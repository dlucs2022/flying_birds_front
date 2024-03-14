import { createRouter,createWebHashHistory} from "vue-router";
import Layout from "@/components/layout.vue";
import AppHome from "@/components/AppHome.vue";
import AppUpload from "@/components/AppUpload.vue";

const routes = [
    {path : "/",redirect : "/Layout",component : Layout},
    {path : "/home",name:"home",component : AppHome},
    {path : "/upload",name:"upload",component : AppUpload}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router ;