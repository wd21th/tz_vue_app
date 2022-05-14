import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage";
import CreatePost from "@/pages/CreatePost";
import PostIdPage from "@/pages/PostIdPage";



import { onAuthStateChanged } from "firebase/auth";
import { fs_auth } from "./../../firebase";

// signOut(fs_auth)
const routes = [
    {
        path: '/',
        component: Main,
        // meta:  {layout: 'main', auth: true},
        meta: { requiresAuth: false }
    },
    {
        path: '/posts',
        component: UserPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/posts/:id/post/:desc',
        component: PostIdPage,
        meta: { requiresAuth: true }
    },
  /*   {
        path: '/create_post',
        component: CreatePost,
        meta: { requiresAuth: true }
    }, */
    
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    onAuthStateChanged(fs_auth, user=> {
        // console.log("to.meta.requiresAuth")
        console.log(to.meta.requiresAuth)
        // console.log(to.meta.requiresAuth && !user)
        console.log(user)
        if (to.meta.requiresAuth && !user) next("/") // Login
        else next()
    })
  })


export default router;
