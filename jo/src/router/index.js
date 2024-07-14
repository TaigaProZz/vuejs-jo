import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/home/Home.vue") },
  { path: "/formules", name: "formules", component: () => import("../views/formules/Formules.vue") },
  { path: "/login", name: "login", component: () => import("../views/login/Login.vue") },
  { path: "/register", name: "register", component: () => import("../views/register/Register.vue") },
  { path: "/about", name: "about", component: () => import("../views/about/About.vue") },
  { path: "/cart", name: "cart", component: () => import("../views/cart/Cart.vue") },

];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
