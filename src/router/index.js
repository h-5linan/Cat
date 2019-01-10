import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home"
import Community from "@/components/community"
import Publish from "@/components/publish"
import Shop from "@/components/shop"
import My from "@/components/my"
import Err from "@/components/error"
import Login from "@/components/login"
import Article from "@/components/my/article"
import Noarticle from "@/components/my/article/components/noarticle"
import Nocollect from "@/components/my/article/components/nocollect"
import Pet from "@/components/my/pet"
import Collect from "@/components/my/collect"
import PetChange from "@/components/my/pet/components/petchange"
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:Home,
      meta:{
        requireAuth:true
      }
    },
    {
      path:"/community",
      name:"community",
      component:Community,
      meta:{
        requireAuth:true
      }
    },
    {
      path:"/publish",
      name:"publish",
      component:Publish,
      meta:{
        requireAuth:true
      }
    },
    {
      path:"/shop",
      name:"shop",
      component:Shop,
      meta:{
        requireAuth:true
      }
    },
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        requireAuth:true
      },
      children:[
        {
          path:"/my/article",
          name:"article",
          component:Article,
          meta:{
            requireAuth:true
          },
          children:[
            {
              path:"/my/article/noarticle",
              name:"noarticle",
              component:Noarticle,
              meta:{
                requireAuth:true
              },
              
            },
            {
              path:"/my/article/nocollect",
              name:"nocollect",
              component:Nocollect,
              meta:{
                requireAuth:true
              },
              
            },
          ]
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
        },
            {
              path:"/my/pet/petchange",
              name:"change",
              component:PetChange,
              meta:{
                requireAuth:true
              },      
            },
          
        
      ],
    },
    {
      path:"/login",
      name:"login",
      component:Login,
    },
    {
      path:"**",
      component:Err
    }
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
