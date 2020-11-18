import LoginHelper from "../helpers/login";
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "create", component: () => import("pages/NaverForm.vue") }
    ],
    beforeEnter: (to, from, next) => {
      let logHelper = new LoginHelper();

      console.log(logHelper.isLoggedIn());
      if (logHelper.isLoggedIn()) next();
      else next("/login");
    }
  },
  {
    path: "/login",
    component: () => import("pages/Login.vue")
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
