export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ===== 1. API YA LOGIN =====
    if (request.method === 'POST' && url.pathname === '/api/login') {
      const { email, password } = await request.json();
      if (email === 'info@rupeeplumbing.co.tz' && password === 'Rupee@2026') {
        return new Response(JSON.stringify({ success: true, token: 'rupee-admin-token' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), { 
        status: 401, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    // ===== 2. API YA KU-UNGANISHA PICHA MPYA (Upload) =====
    if (request.method === 'POST' && url.pathname === '/api/upload') {
      try {
        const formData = await request.formData();
        const file = formData.get('image');
        const type = formData.get('type'); // 'hero' au 'product'

        if (!file) return new Response('No image', { status: 400 });

        const fileName = `${type}-${Date.now()}-${file.name}`;
        
        // Hifadhi picha kwenye R2
        await env.R2_BUCKET.put(fileName, file.stream(), { 
          httpMetadata: { contentType: file.type } 
        });

        // Hifadhi jina la faili kwenye KV
        const currentList = await env.KV_CONFIG.get(type) || '[]';
        const list = JSON.parse(currentList);
        list.push(fileName);
        await env.KV_CONFIG.put(type, JSON.stringify(list));

        return new Response(JSON.stringify({ success: true, fileName }), { 
          headers: { 'Content-Type': 'application/json' } 
        });
      } catch (err) {
        return new Response(err.message, { status: 500 });
      }
    }

    // ===== 3. API YA KUSOMA ORODHA YA PICHA =====
    if (request.method === 'GET' && url.pathname === '/api/images') {
      const type = url.searchParams.get('type'); // 'hero' au 'product'
      const list = await env.KV_CONFIG.get(type) || '[]';
      return new Response(list, { headers: { 'Content-Type': 'application/json' } });
    }

    // ===== 4. KURUDISHA PICHA KUTOKA R2 =====
    if (url.pathname.startsWith('/images/')) {
      const fileName = url.pathname.replace('/images/', '');
      const object = await env.R2_BUCKET.get(fileName);
      if (!object) return new Response('Not found', { status: 404 });
      
      const headers = new Headers();
      object.writeHttpMetadata(headers);
      return new Response(object.body, { headers });
    }

    // ===== 5. KURUDISHA REACT APP =====
    return env.ASSETS.fetch(request);
  },
};