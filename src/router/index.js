import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';
    import HomeGlobal from '../components/views/HomeGlobalFeed'
    import HomeMyFeed from '../components/views/HomeMyFeed'
    import HomeTag from '../components/views/HomeTage'
    


import Login from '../components/Login'
import Register from '../components/Register'

import NewArticle from '../components/AfterAuth/NewArticle'
import Setting from '../components/AfterAuth/Setting'
import Profile from '../components/AfterAuth/Profile.vue'

import Western from '../components/views/Western'
import Watches from '../components/views/Watches'
import Tshirt from '../components/views/Tshirt'
import Tops from '../components/views/Tops'
import Footwear from '../components/views/Footwear'
import Kurtis from '../components/views/Kurtis'
import Bags from '../components/views/Bags'
import Sarres from '../components/views/Sarres'
import productView from '../components/views/ProductView'
import cart from '../components/views/Cart'
// import { settings } from 'cluster';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeGlobal
                },
                {
                    path: 'my-feed',
                    name: 'home-my-feed',
                    component: HomeMyFeed
                },
                {
                    path: 'tag/:tag',
                    name: 'home-tag',
                    component: HomeTag
                }

            ]
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/article-edit',
            name: 'article-edit',
            component: NewArticle
        },
        {
            path: '/settings',
            name: 'settings',
            component: Setting
        },
        {
            path: '/@:username',
            name: 'profile',
            component: Profile
        },
        {
            path: '/Western',
            name: 'Western',
            component: Western
        },
        {
            path: '/Watches',
            name: 'Watches',
            component: Watches
        },
        {
            path: '/Tshirt',
            name: 'Tshirt',
            component: Tshirt
        },
        {
            path: '/Tops',
            name: 'Tops',
            component: Tops
        },
        {
            path: '/Footwear',
            name: 'Footwear',
            component: Footwear
        },
        {
            path: '/Kurtis',
            name: 'Kurtis',
            component: Kurtis
        },
        {
            path: '/Bags',
            name: 'Bags',
            component: Bags
        },
        {
            path: '/Sarres',
            name: 'Sarres',
            component: Sarres
        },
       {
        name: 'product-view',
        path: '/product-view/:slug',
        component: productView,
        props: true
       },
       {
           name:'cart',
           path:'/cart',
           component:cart
       }

    ]


})