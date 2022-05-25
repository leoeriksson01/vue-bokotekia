<template>
    <div class="pageContainer">
        <div class="topWrapper">
            <div class="topImage">
                <img
                    src="../assets/heroillustration.jpg"
                    height="100%"
                    width="100%"
                />
            </div>
            <div class="topText">
                <h1 class="themeColor">Bokotekia</h1>
                <h2 class="quoteText">
                    <VueTyper />

                </h2>
            </div>
        </div>

        <div class="homeSearch">
            <div class="searchBox">
                <input
                    type="text"
                    class="searchBar"
                    placeholder="Search..."
                    v-model="query"
                    @keypress="fetchBooks"
                />

                 <h1 class="searchHeader" v-if="this.$route.params.query">
                {{ "Search results for" + " " + this.$route.params.query }}
            </h1>
            </div>

           
        </div>
        <div class="homeBooksGrid">
            <div class="bookCard" v-for="(book, index) in books" :key="index">
                <router-link v-bind:to="'/book/' + book.id">
                <div class="cardImage"> 
                    <img
                        v-bind:src="
                            book.volumeInfo.imageLinks
                                ? book.volumeInfo.imageLinks.smallThumbnail
                                : imageNotFound
                        "
                        width="100%"
                    />
                    </div>
                    
                    <div class="cardInfo">
                        <div class="cardTop"> 
                    <p class="bold maxTwo themeColor">{{ book.volumeInfo.title }}</p>
                    <p class="maxTwo bookInfo">
                        {{
                            book.volumeInfo.authors
                                ? book.volumeInfo.authors[0]
                                : "Okänd"
                        }}
                        <span class="gray"> {{book.volumeInfo.publishedDate && book.volumeInfo.publishedDate }}</span>
                    </p>
                    </div>
                    <div> 
                     <p class="maxThree description">
                        {{
                            book.volumeInfo.description &&
                               book.volumeInfo.description
                        }}
                    </p>
                    </div>
                     </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import VueTyper from "../components/VueTyper.vue";
export default {
    props: {},
    components: {
        VueTyper,
    },
    data() {
        return {};
    },
       methods: {
        fetchBooks(e) {
            console.log(this.searchedQuery)
            console.log(this.query)
            if (e.key == "Enter") {
                this.searchedQuery = this.query
                console.log(this.searchedQuery)
                this.$router.push({
                    path: `/search/${this.query}`,
                    replace: true,
                });
                fetch(
                    `${this.url_base}volumes?q=${this.searchedQuery}&key=${this.api_key}&maxResults=20`
                )
                    .then((res) => res.json())
                    .then((jsonData) => {
                        console.log(jsonData.items);
                        this.books = jsonData.items;
                        this.query = "";
                    });
            }
        },
    },
    mounted() {
        window.scrollTo(0, 0);

          fetch(
                    `${this.url_base}volumes?q=${this.searchedQuery ? this.searchedQuery : "Cat"}&key=${this.api_key}&maxResults=20`
                )
                    .then((res) => res.json())
                    .then((jsonData) => {
                        console.log(jsonData.items);
                        this.books = jsonData.items;
                        this.query = "";
                    });
    },
};
</script>

<style>
.bold {
    font-weight: bold;
    font-size: 0.6em;
}

.quoteText {
    width: 80%;
    margin: 10px auto;
    height: 150px;
}

.bookInfo {
    font-size: 0.5em;
}

.maxTwo {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
}

.maxThree {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
}
img {
    object-fit: cover;
    object-position: center;
}
.pageContainer {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
}
.topWrapper {
    display: flex;
    flex-direction: column;
}
.topWrapper h2 {
    font-family: "Rancho", cursive;
}
.topWrapper h1 {
    font-family: "Acme", sans-serif;
    text-align: center;
}
.topImage {
    display: flex;
    height: 300px;
    justify-content: center;
    align-items: center;
}

.topImage img {
    border-radius: 100% 56% 90% 100%;
    object-position: center;
    max-width: 612px;
    max-height: 400px;
    margin: 0px auto;
    width: 100%;
}

.searchHeader {
    margin: 20px 0px;
    text-align: center;
}

.homeBooksGrid {
    display: grid;
    width: 100%;
    grid-template-columns: 33% 33% 33%;
    gap: 10px 1px;
    margin: 0px auto;
}

.bookCard {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 97%;
    cursor: pointer;
}

.bookCard img {
    height: 140px;
}

.searchBox {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0px auto;
}

.searchBox input {
    background: none;
    border: 1px solid gray;
    padding: 5px 8px 0 14px;
    border-radius: 24px;
    height: 44px;
    margin: 20px 10px;
}

.description {
    display: none;
}

@media screen and (min-width: 600px) {
    .topImage {
        height: auto;
    }
}

@media screen and (min-width: 768px) {
    .quoteText {
        width: 60%;
        margin: 10px auto;
    }

    .searchBox input {
    background: none;
    border: 1px solid gray;
    padding: 5px 8px 0 14px;
    border-radius: 24px;
    height: 44px;
    width: 60%;
    margin: 20px auto;
}
    .homeBooksGrid {
        grid-template-columns: 25% 25% 25% 25%;
        gap: 10px 0px;
    }
    .bookCard img {
        height: 230px;
    }

    .bold {
        font-weight: bold;
        font-size: 0.7em;
    }

    .bookInfo {
        font-size: 0.6em;
    }
}

@media screen and (min-width: 1024px) {
    .homeBooksGrid {
        grid-template-columns: 25% 25% 25% 25%;
        width: 95%;
        margin: 0px auto;
    }
    .quoteText {
        width: 100%;
    }
}

@media screen and (min-width: 1200px) {
    .homeBooksGrid {
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: 0px auto;
        gap: 15px;
    }

    .searchBox {
        flex-direction: row;
        width: 100%;
        gap: 5%;
    }

    .homeSearch {
        width: 59%;
        margin: 0px auto;
    }

    .searchBox input {
        margin: 20px 0px;
    }

  

    .cardInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .description {
   display: -webkit-box;
}

    .bookCard a {
        display: flex;
        flex-direction: row;
    }
    .topWrapper {
        flex-direction: row;
        width: 90%;
        margin: 50px auto 0px auto;
        gap: 5%;
    }
    .topImage {
        min-width: 612px;
        min-height: 400px;
    }
    .bookCard img {
        width: 100px;
        height: 160px;
    }

    .cardInfo {
        margin-left: 20px;
    }
    .topText {
        width: 100%;
        margin-top: 5%;
    }
    
    .searchHeader{
        width: 40%;
    }

    .bookCard {
        width: 100%;
    }

}

@media screen and (min-width: 1900px) {
   
    .homeBooksGrid {
        width: 50%;
        margin: 0px auto;
    }
    .homeSearch {
        width: 50%;
    }
    .topWrapper {
        width: 70%;
    }
}
</style>
