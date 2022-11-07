export async function onRequestPost(context) {  // Contents of context object  
    const {  request } = context;
    const url = new URL(request.url);
    return fetch('https://telegra.ph/' + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
}
  