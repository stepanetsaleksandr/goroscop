import { createApp } from "vue";
import App from "./App.vue";
import PageOne from "./components/PageOne.vue";
import HomePage from "./components/HomePage.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";
import PageFour from "./components/PageFour.vue";
import PageFive from "./components/PageFive.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/1", name: "PageOne", component: PageOne },
    { path: "/2", name: "PageTwo", component: PageTwo },
    { path: "/3", name: "PageThree", component: PageThree },
    { path: "/4", name: "PageFour", component: PageFour },
    { path: "/5", name: "PageFive", component: PageFive },
  ],
});

createApp(App).use(router).mount("#app");
