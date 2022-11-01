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