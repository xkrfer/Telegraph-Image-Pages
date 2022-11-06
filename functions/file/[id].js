export async function onRequest(context) {  // Contents of context object  
    const {
     request, // same as existing Worker API
     env, // same as existing Worker API
     params, // if filename includes [id] or [[path]]
     waitUntil, // same as ctx.waitUntil in existing Worker API    
     next, // used for middleware or to fetch assets    
     data, // arbitrary space for passing data between middlewares 
     } = context;
     const url = new URL(request.url);
     const {  MODERATE_CONTENT_API_KEY }  = env
     const { pathname, search } = url
     const FILE_URL = `https://telegra.ph/${pathname}${search}`
    if(typeof MODERATE_CONTENT_API_KEY === 'string' && MODERATE_CONTENT_API_KEY !== ''){
        const res = await fetch(`https://api.moderatecontent.com/moderate?key=${MODERATE_CONTENT_API_KEY}&url=${FILE_URL}`);
        const response = res.json()
        if(response.rating_label === 'adult'){
            return Response.redirect(url.origin+"/block", 302)
        }
    }
    return fetch(FILE_URL, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
  }
  