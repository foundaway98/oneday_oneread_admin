import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/MainView.vue"),
      children: [
        {
          path: "",
          name: "PostList",
          component: () => import("@/components/posts/PostHistory.vue"),
        },
        {
          path: "create",
          name: "PostCreate",
          component: () => import("@/components/posts/PostCreate.vue"),
        },
      ],
    },
  ],
});

export { router };
