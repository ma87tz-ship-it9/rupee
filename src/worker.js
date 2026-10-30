export default {
  async fetch(request, env, ctx) {
    // 1. API ya Ku-upload Picha (POST /api/upload)
    if (request.method === 'POST' && new URL(request.url).pathname === '/api/upload') {
      try {
        const formData = await request.formData();
        const file = formData.get('image');

        if (!file) {
          return new Response('No image provided', { status: 400 });
        }

        // Tengeneza jina la kipekee kwa ajili ya picha
        const fileName = `${Date.now()}-${file.name}`;

        // Weka picha kwenye R2 Bucket
        await env.R2_BUCKET.put(fileName, file.stream(), {
          httpMetadata: { contentType: file.type },
        });

        // Rudisha URL ya picha
        return new Response(JSON.stringify({ 
          success: true, 
          url: `/images/${fileName}` // Tutahitaji kuunda route ya kuonyesha picha baadaye
        }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err) {
        return new Response(err.message, { status: 500 });
      }
    }

    // 2. Kurudisha picha zilizopo kwenye R2 (GET /images/:fileName)
    const url = new URL(request.url);
    if (url.pathname.startsWith('/images/')) {
      const fileName = url.pathname.replace('/images/', '');
      const object = await env.R2_BUCKET.get(fileName);

      if (!object) return new Response('Not found', { status: 404 });

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('etag', object.httpEtag);

      return new Response(object.body, { headers });
    }

    // 3. Kurudisha React App (static assets)
    return env.ASSETS.fetch(request);
  },
};