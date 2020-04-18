import Vue from 'vue'
import Router from 'vue-router'
import { pushd } from 'shelljs';

Vue.use(Router);
export function createRouter() {
    return new Router({
        mode: "history",
        routes: [
            /**
             * 首页
             */
            {
                path: "/",
                name: "Home",
                component: () => import("@/components/Home.vue")
            },
            {
                path: "/article",
                name: "Article",
                component: () => import("@/app/Article/Article.vue")
            },
            /**
             * 处理死链接，继续跳转至列表页
             */
            {
                path: "/article*",
                name: "Article",
                component: () => import("@/app/Article/Article.vue")
            },
            {
                path: '/housinglist',
                name: 'HousingList',
                component: () => import("@/components/HousingList")
            },
            /**
             * 详情路径 /article/以数字为单位
             */
            {
                path: "/article/:id(\\d+)",
                name: "ArticleDetail",
                component: () => import("@/app/Article/ArticleDetail.vue")
            }
        ]
    })
}