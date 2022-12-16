import { createRouter, createWebHistory } from "vue-router";
import About from "../views/footer";
const routes = [{ path: "/about", component: About, name: "About" }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
