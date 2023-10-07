import { createRouter, createWebHistory, RouteComponent } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: (): Promise<RouteComponent> => import('../sections/StageOne.vue'),
    },
    {
      path: '/stage1',
      name: 'stageOne',
      component: (): Promise<RouteComponent> => import('../sections/StageOne.vue'),
    },
    {
      path: '/stage2',
      name: 'stageTwo',
      component: (): Promise<RouteComponent> => import('../sections/StageTwo.vue'),
    },
    {
      path: '/stage3',
      name: 'stageThree',
      component: (): Promise<RouteComponent> => import('../sections/StageThree.vue'),
    },
    {
      path: '/stage4',
      name: 'stageFour',
      component: (): Promise<RouteComponent> => import('../sections/StageFour.vue'),
    },
  ],
})

export default router
