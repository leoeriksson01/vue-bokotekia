<template>
    <div id="app">
        <NavBar />
         <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";


export default {
    data() {
        return {
        };
    },
    components: {
        NavBar,
    },
}
</script>

<style>
.themeColor {
    color: #007399;
}

.gray {
    color: #202124;
}

#app {
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
}


p,
li,
ul {
    font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Rancho", cursive;
}
body, .pageContainer {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: "Noticia Text", serif;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgb(24, 24, 24);
}

@media screen and (min-width: 600px) {
    h1 {
        font-size: 2.5em;
    }

    h2 {
        font-size: 2em;
    }
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 1024px) {
}

@media screen and (min-width: 1200px) {
}
</style>
