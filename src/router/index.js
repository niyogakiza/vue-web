// eslint-disable-next-line
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './../components/Layout';
import Home from './../components/Home';
import Content from './../components/Content';
import Had from './../components/Had';
import Oita from './../components/Oita';
import Pitp from './../components/Pitp';
import Scb from './../components/Scb';
import Contact from './../components/Contact';
import About from './../components/About';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component:Layout,
      redirect: '/home',
      children:[
        {
          path: '/home',
          component: Home,
          children:[
            {
              path:'',
              name:'Home',
              component: Content
            }
          ]
        },
        {
          path: '/hisangrydove',
          component: Had,
          children:[
            {
              path: '',
              name: 'Hisangrydove',
              component: Content
            }
          ]
        },
        {
          path: '/outrageinthealtar',
          component: Oita,
          children:[
            {
              path: '',
              name:'Outrageinthealtar',
              component: Content
            }
          ]

        },
        {
          path: '/contact',
          component: Contact,
          children:[
            {
              path: '',
              name: 'Contact',
              component:Content
            }
          ]
        },
        {
          path:'/priesthoodinthepoet',
          component: Pitp,
          children:[
            {
              path:'',
              name:'Priesthoodinthepoet',
              component:Content
            }
          ]
        },
        {
          path: '/sovereigncitybookstore',
          name:'Sovereigncitybookstore',
          component: Scb
        },
        {
          path:'/about',
          name:'About',
          component: About
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition){
    return{
      x:0,
      y:0
    }
  }
})
