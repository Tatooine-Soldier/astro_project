<template>
    <section class="blog-post-container">
        <section class="blog-post">
            <section class="blog-title-container">
                <section class="blog-title">
                    <div>{{ title }}</div>
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
        background-color: var(--secondary-dark);
        border: solid grey 1px;;
        width: 80%;
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