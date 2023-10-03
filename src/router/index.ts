import { createRouter, createWebHistory, RouteComponent } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: (): Promise<RouteComponent> => import('../sections/BeCareful.vue'),
    },
    {
      path: '/stageOne',
      name: 'stageOne',
      component: (): Promise<RouteComponent> => import('../sections/StageOne.vue'),
    },
    {
      path: '/stageTwo',
      name: 'stageTwo',
      component: (): Promise<RouteComponent> => import('../sections/StageTwo.vue'),
    },
    {
      path: '/stageThree',
      name: 'stageThree',
      component: (): Promise<RouteComponent> => import('../sections/StageThree.vue'),
    },
  ],
})

export default router
