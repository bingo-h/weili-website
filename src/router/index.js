import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
    { path: '/services', name: 'Services', component: () => import('@/views/Services.vue') },
    { path: '/cases', name: 'Cases', component: () => import('@/views/Cases.vue') },
    { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
    { path: '/faq', name: 'Faq', component: () => import('@/views/Faq.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
