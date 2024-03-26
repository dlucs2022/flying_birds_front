import { createRouter,createWebHashHistory} from "vue-router";
import Layout from "../components/layout.vue";
import AppHome from "@/components/AppHome.vue";
import AppUpload from "@/components/AppUpload.vue";
import AppQuery from "@/components/AppQuery.vue";
//




const routes = [
    {path : "/",name:"layout",component : Layout,redirect : "/home"},
    {path : "/home",name:"home",component : AppHome},
    {path : "/upload",name:"upload",component : AppUpload},
    {path : "/query",name:"query",component : AppQuery},
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
export default router ;

