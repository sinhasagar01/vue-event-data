import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventLayout from '../views/event/Layout.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import NotFound from '../views/NotFound.vue'
// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const AboutView = () => import('../views/AboutView.vue')
import NetworkError from '../views/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutView,
    props: { showExtra: false },
  },
  {
    path: '/about',
    redirect: { name: 'about' },
  },
  {
    path: '/about-extra',
    name: 'about-extra',
    component: AboutView,
    props: { showExtra: true },
  },
  {
    path: '/events/:id',
    name: 'event-layout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'event-details',
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'event-register',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'event-edit',
        component: EventEdit,
      },
    ],
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: (to) => {
      return { path: '/events/' + to.params.afterEvent }
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
