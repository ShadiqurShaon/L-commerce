import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';


import Login from '../components/Login'
import Register from '../components/Register'

import NewArticle from '../components/AfterAuth/NewArticle'
import Setting from '../components/AfterAuth/Setting'
import Profile from '../components/AfterAuth/Profile.vue'



// import { settings } from 'cluster';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/home',
            name:'home',
            component: Home
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },
        {
            path:'/article-edit',
            name:'article-edit',
            component:NewArticle
        },
        {
            path:'/settings',
            name:'settings',
            component:Setting
        },
        {
            path:'/@:username',
            name:'profile',
            component:Profile
        }
    ]
    

})