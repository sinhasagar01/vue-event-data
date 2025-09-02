import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      props: { showExtra: false },
    },
    {
      path: '/about-extra',
      name: 'about-extra',
      component: AboutView,
      props: { showExtra: true },
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFoundComponent,
    },
  ],
})

export default router
