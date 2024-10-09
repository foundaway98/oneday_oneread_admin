import { createStore } from "vuex";

export default createStore({
  state: {
    currentView: "PostList",
    posts: [],
    currentPost: null,
  },
  mutations: {
    SET_CURRENT_VIEW(state, view) {
      state.currentView = view;
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_CURRENT_POST(state, post) {
      state.currentPost = post;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      // API 호출을 통해 포스트 목록을 가져오는 로직
      const posts = await // API 호출
      commit("SET_POSTS", posts);
    },
    async fetchPost({ commit }, postId) {
      // API 호출을 통해 특정 포스트를 가져오는 로직
      const post = await // API 호출
      commit("SET_CURRENT_POST", post);
    },
    changeView({ commit }, view) {
      commit("SET_CURRENT_VIEW", view);
    },
  },
  getters: {
    currentView: (state) => state.currentView,
    posts: (state) => state.posts,
    currentPost: (state) => state.currentPost,
  },
});
