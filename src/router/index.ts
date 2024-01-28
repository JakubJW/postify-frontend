import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import NewPostView from '../views/NewPostView.vue'
import DashboardView from '../views/DashboardView.vue'
import PostCollectionsView from '../views/PostCollectionsView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: '/new-post',
          name: 'newPost',
          component: NewPostView,
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardView,
        },
        {
          path: '/post-collections',
          name: 'postCollections',
          component: PostCollectionsView,
        },
        {
          path: '/schedule',
          name: 'schedule',
          component: ScheduleView,
        },
        {
          path: '/settings',
          name: 'settings',
          component: SettingsView,
        }
        // {
        //   path: '/logout',
        //   name: 'logout',
        //   component: LogoutView,
        // }
      ]
    },
  ]
})

export default router
