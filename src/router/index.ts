import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/movies",
    name: "movies",
    component: () =>
      import(/* webpackChunkName: "moviesPage" */ "../views/MoviesPage.vue")
  },
  {
    path: "/candidate",
    name: "candidate",
    component: () =>
      import(
        /* webpackChunkName: "candidatePage" */ "../views/CandidatePage.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const accessTokenString = "/access_token=";
  if (to.path.includes(accessTokenString)) {
    const accessToken =
      to.path.match(new RegExp(accessTokenString + "(.*)&token_type"))?.[1] ??
      "";
    console.log("going to spotify", accessToken);
    next({ name: "spotify", params: { accessToken } });
  } else {
    next();
  }
});

export default router;
