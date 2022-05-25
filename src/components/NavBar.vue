<template>
    <div class="navbar">
         <router-link to="/">
        <div class="logoContainer">
            <img src="../assets/logo.png" height="100%" width="100%" />
        </div>
        </router-link>
        
        <div class="navLinks"> 
        <router-link to="/">Home</router-link>
        </div>
        <div class="navSearch">
               <input
                    type="text"
                    class="searchBar"
                    placeholder="Search..."
                    v-model="query"
                    @keypress="fetchBooks"
                />
        </div>
    </div>
</template>

<script>
export default {
        methods: {
        fetchBooks(e) {
            if (e.key == "Enter") {
                this.searchedQuery = this.query
                this.$router.push({
                    path: `/search/${this.query}`,
                    replace: true,
                });
                fetch(
                    `${this.url_base}volumes?q=${this.searchedQuery}&key=${this.api_key}&maxResults=20`
                )
                    .then((res) => res.json())
                    .then((jsonData) => {
                        this.books = jsonData.items;
                        this.query = "";
                    });
            }
        },
    },
};
</script>

<style>
.navbar {
    z-index: 9999999;
    width: 100%;
    background: rgba(255, 255, 255, 0.603);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    height: 74px;
    padding: 10px 10px;
}
a {
    text-decoration: none;
    color: black;
    font-size: 1.5em;
}

.logoContainer img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 100%;
}

.navLinks {
    margin-left: 50px;
    display: flex;
    gap: 20px 20px;
}

.navbar input {
    background: none;
    border: 1px solid gray;
    padding: 5px 8px 0 14px;
    border-radius: 24px;
    height: 44px;
    width: 80%;
    margin: 0px 10px 0px 10%;
}

@media screen and (min-width: 1200px) {
    .navbar input {
   
    margin: 0px 10px 0px 100%;
}
}
</style>
