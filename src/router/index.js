import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import NowPlaying from '@/components/nowPlaying/nowPlaying'
import WillPlaying from '@/components/willPlaying/willPlaying'
import AbroadRanking from '@/components/abroadRanking/abroadRanking'
import Top250 from '@/components/Top250/Top250'
import Introduce from '@/components/introduce/introduce'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: NowPlaying
    },
    {
      path:'/willPlaying',
      component:WillPlaying
    },
    {
      path:'/abroadRanking',
      component:AbroadRanking
    },
    {
      path:'/top250',
      component:Top250
    },
    {
      path:'/introduce',
      component:Introduce
    }
  ],
  mode:'history'
})
