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
  // redirect to login page if user is not logged in and tries to access a restricted page
  const publicPages = ["/login", "/register", "/about", "/cart", "/formules", "/", "/payment-accepted", "/payment-refused"];
  const authRequired = !publicPages.includes(to.path);

  const notAccessiblePagesLoggedin = ["/login", "/register"];
  const loggedInPages = notAccessiblePagesLoggedin.includes(to.path);

  const doubleAuthPage = ["/double-auth-qrcode"];
  const doubleAuthRequired = doubleAuthPage.includes(to.path);

  // get user from store
  const userStore = useUserStore();
  const loggedIn = userStore.getIsLoggedIn;
  const doubleAuthActive = userStore.getUser.doubleAuthActive;
  console.log("double auth active: ", doubleAuthActive);
  console.log(doubleAuthRequired);
  console.log(loggedIn);

  // redirect to login page if not logged in and trying to access a restricted page
  if (authRequired && !loggedIn) {
    return next("/login");
  }

  // redirect to home page if logged in and trying to access login or register page
  else if (loggedIn && loggedInPages) {
    return next("/");
  }

  // if double auth is not active, force user to activate it
  else if (doubleAuthRequired && loggedIn && !doubleAuthActive) {
    return next("/double-auth-qrcode");
  }

  else if (doubleAuthRequired && loggedIn && doubleAuthActive) {
    return next('/profile');
  }
 
  next();

});

export default router;
