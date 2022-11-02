import {request} from "./utils/request";
export function getWallpaper(){
    return request<{
        status: boolean,
        message:string,
        data: {
            url:string
        }[]
    }>({
        url: "/api/bing/wallpaper",
        method: "get"
    })
}

export function postUpload(file: any){
    const  formData = new FormData();
    formData.append('file', file)
    return request.post('/upload',formData, {
        headers: {
            "Content-Type": "multipart/form-data;boundary="+ new Date().getTime()
        }
    } )
}