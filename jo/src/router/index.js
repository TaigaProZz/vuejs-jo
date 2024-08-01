import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from '../stores/user-module';

const routes = [
  { path: "/", name: "home", component: () => import("../views/home/Home.vue") },
  { path: "/formules", name: "formules", component: () => import("../views/formules/Formules.vue") },
  { path: "/login", name: "login", component: () => import("../views/login/Login.vue") },
  { path: "/double-auth-qrcode", name: "DoubleAuthQrCode", component: () => import("../views/double-auth/DoubleAuthQrCode.vue") },

  { path: "/register", name: "register", component: () => import("../views/register/Register.vue") },
  { path: "/about", name: "about", component: () => import("../views/about/About.vue") },
  { path: "/cart", name: "cart", component: () => import("../views/account-views/AccountViews.vue") },
  { path: "/profile", name: "profile", component: () => import("../views/account-views/AccountViews.vue") },
  { path: "/transactions", name: "transactions", component: () => import("../views/account-views/AccountViews.vue") },
  { path: "/payment-accepted", name: "PaymentAccepted", component: () => import("../views/payment-status/PaymentAccepted.vue") },
  { path: "/payment-refused", name: "PaymentRefused", component: () => import("../views/payment-status/PaymentRefused.vue") },
  { path: "/:pathMatch(.*)*", name: "404", component: () => import("../views/404/404.vue")}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeResolve((to, from, next) => {
  // get user from store
  const userStore = useUserStore();
  const loggedIn = userStore.getIsLoggedIn;
  const doubleAuthActive = userStore.getDoubleAuthSetup;

  // list of pages accessible when logged out
  const publicPages = ["/login", "/register", "/about", "/cart", "/formules", "/", "/payment-accepted", "/payment-refused", 'double-auth-qrcode'];
  const authRequired = !publicPages.includes(to.path);

  // redirect to login page if not logged in and trying to access a restricted page
  if (authRequired && !loggedIn) {
    return next("/login");
  }

  // list of pages innaccessible when logged in
  const notAccessiblePagesLoggedin = ["/login", "/register"];
  const loggedInPages = notAccessiblePagesLoggedin.includes(to.path);

  // redirect to home page if logged in and trying to access login or register page
  if (loggedIn && loggedInPages) {
    console.log('logged in and trying to access login or register page');
    return next("/");
  }

  // block every page if double auth is required 
  const doubleAuthRequiredPages = ["/double-auth-qrcode"];
  const doubleAuthRequired = !doubleAuthRequiredPages.includes(to.path);

  // if double auth is not active, force user to activate it
  if (doubleAuthRequired && loggedIn && doubleAuthActive) {
    console.log('double auth required and active');
    return next("/double-auth-qrcode");
  }

  next();
});

export default router;
