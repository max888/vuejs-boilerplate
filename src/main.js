// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Users from './components/Users'
import Test from './components/Test'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: Home},
    {path:'/blog', component: Blog},
    {path:'/blog/:id', component: BlogPost},
    {path:'/users', component: Users},
    {path: '/test', component: Test}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
      <li><router-link to="/test">test</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
    `,
}).$mount('#app')
