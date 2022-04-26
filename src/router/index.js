import PageOne from "./components/PageOne.vue";
import HomePage from "./components/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/1", name: "PageOne", component: PageOne },
  ],
});

export default router;
