<template>
    <section class="blog-post-container">
        <section class="blog-post">
            <section class="blog-title-container">
                <section class="blog-title">
                    <div id="title-in">{{ title }}</div>
                </section>
            </section>
            <section class="blog-content-container">
                <section class="blog-content">
                    <div>{{ content }}</div>
                </section>
            </section>
        </section>
    </section>
</template>


<style>
    .blog-post-container {
        background-color: #4b4b4b ;
        border: solid var(--primary-light) 1px;;
        border-radius: 10px;;
        width: 80%;
        margin: 2%;
        box-shadow: 10px 10px 8px #252424;
    }

    .blog-post-container:hover {
        background-color: var(--primary-dark);
        cursor: pointer;
    }

    .blog-post {
        padding: 1%;
        font-size: 1.1em;
    }

    #title-in {
        text-decoration: underline;
    }

    @media screen and (max-width: 400px) {
        .blog-post-container {
            margin: 6%;
        }
    }

</style>

<script>
export default {
    data() {
        return {
            title: this.$props.title,
            content: this.$props.content
        }
    },
    props: ['title', 'content'],
}
</script>