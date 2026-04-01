import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/pages/Home.vue";
import Profile from "@/components/pages/Profile.vue";
import Settings from "@/components/pages/Settings.vue";
import User from "@/components/pages/User.vue";
import Dashboard from "@/components/pages/Dashboard.vue";
import Account from "@/components/pages/Account.vue";
import Profit from "@/components/pages/Profit.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/settings", component: Settings },
  { path: "/user/:id", component: User, props: true },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "account", component: Account },
      { path: "profit", component: Profit },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
