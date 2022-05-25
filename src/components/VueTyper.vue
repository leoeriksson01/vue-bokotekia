<template>
    <vue-typer
        :shuffle="true"
        caret-animation="phase"
        :text="[
            '“You can never get a cup of tea large enough or a book long enough to suit me.” – C.S. Lewis',
            '“Books were my pass to personal freedom.” – Oprah Winfrey',
            '“A room without books is like a body without a soul.” – Cicero (pillow from Minnie and Maude)',
            '“It is is better to know one book intimately than a hundred superficially.” – Donna Tartt in The Secret History',
            '“In the end, we’ll all become stories.” – Margaret Atwood in Moral Disorder and Other Stories (print from LittleEra)',
            '“Think of this – that the writer wrote alone, and the reader read alone, and they were alone with each other.” – A.S. Byatt in Possession',
            '“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” – George R.R. Martin',
            '“There is more treasure in books than in all the pirate’s loot on Treasure Island.”– Walt Disney',
            '“Never trust anyone who has not brought a book with them.” – Lemony Snicket',
            '“Until I feared I would lose it, I never loved to read. One does not love breathing.” – Harper Lee',
            'Show me a family of readers, and I will show you the people who move the world.” – Napoléon Bonaparte',
            '“Reading is essential for those who seek to rise above the ordinary.” – Jim Rohn',
            '“You don’t have to burn books to destroy a culture. Just get people to stop reading them.” – Ray Bradbury',
            '-Reading should not be presented to children as a chore, a duty. It should be offered as a gift. — Kate DiCamillo',
            '“Books train your mind to imagination to think big.” ― Taylor Swift',
            '“Think before you speak. Read before you think.” – Fran Lebowitz',
            '“The reading of all good books is like conversation with the finest (people) of the past centuries.” – Descartes',
            '“Reading one book is like eating one potato chip.” – Diane Duane',
            '“Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.” — Anna Quindlen',
            '“I read a book one day and my whole life was changed.” – Orhan Pamuk',
        ]"
    ></vue-typer>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
    components: {
        VueTyper,
    },
};
</script>

<style>
.vue-typer .custom.char.selected {
    background-color: transparent;
    text-decoration: line-through;
}

.vue-typer .custom.caret {
    display: none;
}
</style>
