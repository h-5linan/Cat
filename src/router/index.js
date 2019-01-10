import Vue from 'vue'
import Router from 'vue-router'
// 首页的路由
import Home from "@/components/home"
import HomeDetail from "@/components/home/components/detail"

import Community from "@/components/community"
// 发布文件的路由
import Publish from "@/components/publish"
import Post from "@/components/publish/components/post"
import Photo from "@/components/publish/components/photo"
import Dynamic from "@/components/publish/components/dynamic"

import Shop from "@/components/shop"
import My from "@/components/my"
import Fans from "@/components/my/components/fans"
import Err from "@/components/error"
import Login from "@/components/login"
import Details from "@/components/community/component/details"
import CatDetail from "@/components/community/component/catDetail"
import Article from "@/components/my/article"
import Pet from "@/components/my/pet"
import Collect from "@/components/my/collect"


Vue.use(Router)

var router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",     //跳转到首页
      name:"home",
      component:Home,
      meta:{
        requireAuth:true,
        flag:true
      }
    },
    {
      path:"/homedetail",     //跳转到文章详情页
      name:"homedetail",
      component:HomeDetail,
      meta:{
        requireAuth:true,
        flag:false
      }
    },
    {
      path:"/community",
      name:"community",
      component:Community,
      meta:{
        requireAuth:true,
        flag:true
      }
    },
    {
      path:"/publish",   //发布路由
      name:"publish",
      component:Publish,
      meta:{
        requireAuth:true,
        flag:false
      }
    },
    {
      path:"/post",   //发布页面跳转到发帖页面
      name:"post",
      component:Post,
      meta:{
        requireAuth:true,
        flag:false
      }
    },
    {
      path:"/photo",   //发布页面跳转到相册页面
      name:"photo",
      component:Photo,
      meta:{
        requireAuth:true,
        flag:false
      }
    }, 
    {
      path:"/dynamic",   //相册页面跳转到发布动态页面
      name:"dynamic",
      component:Dynamic,
      meta:{
        requireAuth:true
      }
    }, 
    {
      path:"/shop",
      name:"shop",
      component:Shop,
      meta:{
        requireAuth:true,
        flag:true
      }
    },
    {
      path: "/my/components",//我的页面跳转到粉丝页面
      name: "fans",
      component: Fans,
    },
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        requireAuth:true,
        flag:true
      },
      children:[
        {
          path:"/my/article",
          name:"article",
          component:Article,
          meta:{
            requireAuth:true
          },
        },
        {
          path:"/my/collect",
          name:"collect",
          component:Collect,
          meta:{
            requireAuth:true
          },
        },
        {
          path:"/my/pet",
          name:"pet",
          component:Pet,
          meta:{
            requireAuth:true
          },
        }
      ],
    },
    {
      path:"/login",
      name:"login",
      component:Login,
    },
    {
      path:"/details",
      name:"details",
      component:Details,
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path:"/catDetail",
      name:"catDetail",
      component:CatDetail,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path:"**",
      component:Err
    },
    
  ]
})
// 全局守卫（登录验证）
/* router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(token){
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
}) */
export default router;
