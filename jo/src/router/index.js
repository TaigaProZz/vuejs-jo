import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/home/Home.vue") },
  { path: "/formules", name: "formules", component: () => import("../views/formules/Formules.vue") },
  { path: "/login", name: "login", component: () => import("../views/login/Login.vue") },
  { path: "/register", name: "register", component: () => import("../views/register/Register.vue") },
  { path: "/about", name: "about", component: () => import("../views/about/About.vue") },
  { path: "/cart", name: "cart", component: () => import("../views/account-views/AccountViews.vue") },
  { path: "/profile", name: "profile", component: () => import("../views/account-views/AccountViews.vue") },
  { path: "/transactions", name: "transactions", component: () => import("../views/account-views/AccountViews.vue") },
  { path: "/payment-accepted", name: "PaymentAccepted", component: () => import("../views/payment-status/PaymentAccepted.vue") },
  { path: "/payment-refused", name: "PaymentRefused", component: () => import("../views/payment-status/PaymentRefused.vue") },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
