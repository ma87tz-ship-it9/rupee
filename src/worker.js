export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. ULINZI WA UKURASA WA ADMIN (Basic Authentication)
    if (url.pathname === '/admin') {
      const authHeader = request.headers.get('Authorization');
      
      // Email na Password (Badilisha password hapa)
      const adminEmail = 'info@rupeeplumbing.co.tz';
      const adminPassword = 'Rupee@2026'; // <--- BADILISHA PASSWORD HII
      
      // Tengeneza Base64 ya email:password
      const expectedAuth = 'Basic ' + btoa(`${adminEmail}:${adminPassword}`);

      // Kama hakuna header au si sahihi, omba login
      if (!authHeader || authHeader !== expectedAuth) {
        return new Response('Access Denied. Please login.', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Rupee Admin Panel"',
            'Content-Type': 'text/plain'
          }
        });
      }
    }

    // 2. API YA KU-UPLOAD PICHA (POST /api/upload)
    if (request.method === 'POST' && url.pathname === '/api/upload') {
      try {
        const formData = await request.formData();
        const file = formData.get('image');

        if (!file) {
          return new Response('No image provided', { status: 400 });
        }

        const fileName = `${Date.now()}-${file.name}`;

        await env.R2_BUCKET.put(fileName, file.stream(), {
          httpMetadata: { contentType: file.type },
        });

        return new Response(JSON.stringify({ 
          success: true, 
          url: `/images/${fileName}`
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err) {
        return new Response(err.message, { status: 500 });
      }
    }

    // 3. KURUDISHA PICHA ZILIZOPO KWENYE R2 (GET /images/:fileName)
    if (url.pathname.startsWith('/images/')) {
      const fileName = url.pathname.replace('/images/', '');
      const object = await env.R2_BUCKET.get(fileName);

      if (!object) return new Response('Not found', { status: 404 });

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('etag', object.httpEtag);

      return new Response(object.body, { headers });
    }

    // 4. KURUDISHA REACT APP (static assets)
    return env.ASSETS.fetch(request);
  },
};