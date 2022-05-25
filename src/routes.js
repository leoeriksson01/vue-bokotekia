import HomePage from './pages/HomePage.vue';
import SingleBookPage from './pages/SingleBookPage.vue';

export default [
    { path: '/', component: HomePage},
    { path: '/search/:query', component: HomePage},
    { path: '/book/:id', component: SingleBookPage}
]