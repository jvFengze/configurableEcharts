import { createRouter, createWebHashHistory } from "vue-router"
import { ElMessage } from 'element-plus'

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../main/index.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router