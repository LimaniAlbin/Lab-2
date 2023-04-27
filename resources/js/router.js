import Home from "./Home.vue";
import List from "./admin/Products/Products.vue";
import Products from "@/admin/Products/Products.vue";

const routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: '/products',
        component: Products
    }
]

export default routes;
