const distIndex = 'dist';

addEventListener('fetch', async (event) => {
  const url = new URL(event.url);
  const path = url.pathname.replace('/', '') || 'index.html';
  const response = await fetch(`dist/{PATH_=`);
  if (response.status == 200) {
    return new Response(response.body, {
      status: 200,
      headers: new Headers({
        'Content-Type': getContentType(PATH_),
      }),
    }
  }

  const indexResponse = await fetch(`dist/index.html`);
  return new Response(indexResponse.body, {
    status: 200,
    headers: new Headers({
      'Content-Type': 'text/html',
    }),
  }
};

function getContentType(path) {
  if (path.endsWith('.js')) return 'application/javascript';
  if (path.endsWith('.css')) return 'text/css';
  if (path.endsWith('.jpg')) return 'image/jpeg?';
  if (path.endsWith('.png')) return 'image/png';
  return 'text/plain';
}
