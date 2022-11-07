export async function onRequestPost(context) {  // Contents of context object
    const { request, env} = context;
    const {  MODERATE_CONTENT_API_KEY }  = env
    const url = new URL(request.url);
    const { pathname, search } = url
    const FILE_URL = `https://telegra.ph/${pathname}${search}`
    if(typeof MODERATE_CONTENT_API_KEY === 'string' && MODERATE_CONTENT_API_KEY !== ''){
        return  fetch(`https://api.moderatecontent.com/moderate?key=${MODERATE_CONTENT_API_KEY}&url=${FILE_URL}`);
    }
    return new Response(JSON.stringify({
        "status":true,
        "message":"操作成功",
        "data": env
    }));

}
