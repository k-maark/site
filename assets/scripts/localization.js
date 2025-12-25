addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const location = request.cf.country;
  const url = new URL(request.url);

  if (url.pathname.startsWith('/hu') || url.pathname.startsWith('/en')) {
    return fetch(request);
  }

  if (location === 'HU') {
    return Response.redirect(url.origin + '/hu' + url.pathname, 302);
  }
  
  return Response.redirect(url.origin + '/en' + url.pathname, 302);
}