import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/blog/Home'
import NewBlog from 'components/blog/NewTopic'
import Blog from 'components/blog/Thread'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: "new",
          name: "new",
          component: NewBlog
        }
      ]
    },
    {
      path: "/blog/:id",
      name: "thread-show",
      component: Blog
    }
  ]
})
