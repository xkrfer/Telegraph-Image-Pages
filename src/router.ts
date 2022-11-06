import {createRouter, createWebHistory} from "vue-router"
import Home from "./pages/Home.vue"
import Block from "./pages/Block.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'Home', component: Home, meta: {
                title: '首页'
            }
        },
        {
            path: '/block', name: 'Block', component: Block, meta: {
                title: '违规图片'
            }
        },
        {path: '/:pathMatch(.*)*', redirect: '/'},
    ],
})

router.beforeEach((to, from, next) => {
        const {  meta } = to
        if(meta && meta.title){
            document.title = `${meta.title} | Telegraph-Image-Pages`
        }
        next()
})

