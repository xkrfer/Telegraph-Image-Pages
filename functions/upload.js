export async function onRequestPost(context) {  // Contents of context object  
    const {request, env} = context;
    const {IMAGES} = env
    const url = new URL(request.url);
    const res = await fetch('https://telegra.ph/' + url.pathname + url.search, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
    const response = await res.json()
    /** 是否有IMAGES这个KV */
    if (IMAGES && Array.isArray(response) && response.length === 1) {
        const src = response[0].src
        if (src) {
            await IMAGES.put(src, getUserId())
        }
    }
    return res
}

function getUserId() {
    return 'Anonymous'
}
  