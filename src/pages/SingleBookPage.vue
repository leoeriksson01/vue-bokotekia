<template>
    <div class="singleBookPageContainer">
        <div class="bookTitle">
            <p v-if="book.volumeInfo.title" class="themeColor">
                {{ book.volumeInfo.title }}
            </p>
            <span v-if="book.volumeInfo.authors[0]">
                by {{ book.volumeInfo.authors[0] }}</span
            >
        </div>
        <div class="bookImageWithInfo">
            <img
                v-bind:src="
                    book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.smallThumbnail
                        : imageNotFound
                "
                width="100%"
            />
            <div class="bookMainInfo">
                <p v-if="book.volumeInfo.authors[0]">
                    <span class="bold"> Author: </span>
                    {{ book.volumeInfo.authors[0] }}
                </p>
                <p v-if="book.volumeInfo.publishedDate">
                    <span class="bold"> Published: </span>
                    {{ book.volumeInfo.publishedDate }}
                </p>
                <p v-if="book.volumeInfo.pageCount">
                    <span class="bold"> Pages: </span>
                    {{ book.volumeInfo.pageCount }}
                </p>
                <p v-if="book.volumeInfo.language">
                    <span class="bold"> Language: </span>
                    {{ book.volumeInfo.language }}
                </p>
                 <p v-if="book.saleInfo.listPrice.amount && book.saleInfo.listPrice.currencyCode">
                    <span class="bold"> Price: </span>
                    {{ book.saleInfo.listPrice.amount + " " + book.saleInfo.listPrice.currencyCode }}
                </p>

                  <div class="bookMoreInfo">
            <p v-if="book.volumeInfo.description">
                <span class="bold"> Description: </span>
                <span v-html="book.volumeInfo.description">  </span>
                
            </p>
            <p class="categories" v-if="book.volumeInfo.categories">
                <span class="bold"> Categories: </span>
                <br />
                <span
                    v-for="(category, index) in book.volumeInfo.categories"
                    :key="index"
                >
                    {{ category }}
                </span>
            </p>

            <a
                v-bind:href="book.saleInfo.buyLink"
                :disabled="!book.saleInfo.buyLink"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button class="buyButton" :disabled="!book.saleInfo.buyLink">Se boken på Google Store</button>
            </a>
        </div>
            </div>
        </div>

        <div class="bookExtraInfo">
            <p v-if="book.volumeInfo.description">
                <span class="bold"> Description: </span>
                <span v-html="book.volumeInfo.description">  </span>
                
            </p>
            <p class="categories" v-if="book.volumeInfo.categories">
                <span class="bold"> Categories: </span>
                <br />
                <span
                    v-for="(category, index) in book.volumeInfo.categories"
                    :key="index"
                >
                    {{ category }}
                </span>
            </p>

            <a
                v-bind:href="book.volumeInfo.infoLink"
                :disabled="!book.volumeInfo.infoLink"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button class="buyButton" :disabled="!book.volumeInfo.infoLink">Se boken på Google Store</button>
            </a>
        </div>

            
    </div>
</template>

<script>
// Imports

export default {
    data() {
        return {
            id: this.$route.params.id,
            book: {},
            api_key: process.env.VUE_APP_API_KEY,
            url_base: "https://www.googleapis.com/books/v1/",
            query: "",
            searchedWord: "",
            imageNotFound:
                "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg",
        };
    },
    created() {
        fetch(`${this.url_base}volumes/${this.id}?key=${this.api_key}`)
            .then((res) => res.json())
            .then((jsonData) => {
                this.book = jsonData;
                console.log(this.book);
            });
    },
    mounted() {
        window.scrollTo(0, 0);
    },

    methods: {},
};
</script>

<style scoped>
.bold {
    font-size: 16px;
}
</style>

<style>

 .bookMoreInfo {
        display: none;
    }
.singleBookPageContainer {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 100px auto 0px auto;
}

.bookTitle {
    margin-bottom: 10px;
}

.bookTitle p,
.bookTitle span {
    font-size: 1.1em;
}

.bookImageWithInfo {
    width: 100%;
    display: flex;
    gap: 20px;
}

.bookImageWithInfo img {
    width: 50%;
    max-width: 300px;
}

.bookMainInfo {
    width: 100%;
    gap: 5px;
    display: flex;
    flex-direction: column;
}
.bookExtraInfo {
    margin-top: 30px;
}
.categories {
    margin: 20px 0px;
}

.buyButton{
    background: rgb(148, 0, 0);
    color: white;
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    margin: 20px 0px;
    border: none;
    transition: 0.4s;
    cursor: pointer;
}

.buyButton:hover {
    filter:brightness(1.3);
}

@media screen and (min-width: 768px) {
    .buyButton {
        width: fit-content;
        padding: 10px 15px;
    }
    
}
@media screen and (min-width: 1024px) {
    .bookExtraInfo {
        display: none;
    }

    .bookMoreInfo {
        display: block;
    }
    
}
@media screen and (min-width: 1200px) {
.singleBookPageContainer {
    width: 80%;
}
.bookImageWithInfo {
    gap: 30px;
}
    
}

@media screen and (min-width: 1900px) {
.singleBookPageContainer {
    width: 60%;
}
.bookImageWithInfo {
    gap: 40px;
}
    
}
</style>
