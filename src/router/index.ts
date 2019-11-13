import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/spotify/:accessToken?",
    name: "spotify",
    props: true,
    component: () =>
      import(/* webpackChunkName: "spotify" */ "../views/Spotify.vue")
  }
];


const router = new VueRouter({
  routes
});


router.beforeEach((to, from, next) => {
  const accessTokenString = '/access_token='
  if (to.path.includes(accessTokenString)) {
    const accessToken = to.path.match(new RegExp(accessTokenString + '(.*)&token_type'))?.[1] ?? ''
    console.log('going to spotify', accessToken)
    next({ name: 'spotify', params: { accessToken }})
  } else {
    next()
  }
})

export default router;
