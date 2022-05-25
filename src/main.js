import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import Routes from "./routes";

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: "history",
});

Vue.mixin({
    data() {
        return {
            api_key: process.env.VUE_APP_API_KEY,
            url_base: "https://www.googleapis.com/books/v1/",
            query: "",
            searchedQuery: this.$route.params.query,
            books: [],
            imageNotFound:
                "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg",
        };
    },
 
});

new Vue({
    el: "#app",
    render: (h) => h(App),
    router: router,
});
