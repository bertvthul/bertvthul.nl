import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from '@/components/Home'
import About from '@/components/About'
import News from '@/components/News'
import Projects from '@/components/Projects'
import MixBlendMode from '@/components/MixBlendMode'
import Tasks from '@/components/Tasks'
import Task from '@/components/Task'
import Contact from '@/components/Contact'


Vue.use(Router)
Vue.use(Meta)

export default new Router({
    mode: 'history',
    routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/projects',
      name: 'Projects',
      component: Projects
    },{
      path: '/projects/mix-blend-mode',
      name: 'MixBlendMode',
      component: MixBlendMode
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/news',
      name: 'News',
      component: News
    },{
        path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },{
        path: '/task/:id',
      name: 'Task',
      component: Task
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
