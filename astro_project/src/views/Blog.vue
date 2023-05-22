<script setup>
import BlogPost from "../components/BlogPost.vue"
import { getDate } from "../getDate.js"
import { scrapeWeb } from "../scraper.js"
</script>

<template>
    <section>
        <section>
            {{ date }}
        </section>
        <section v-for="(item, index) in titleList" :key="index" class="blogs-container">
            <BlogPost :title="item" :content="contentList[index]"></BlogPost>
        </section>
    </section>
</template>

<style>
.blogs-container {
    margin: 0 auto;;
}
</style>

<script>
    export default {
        data() {
            return {
              titleList: [],
              contentList: [],
              date: ""
            }
        }, 
        mounted() {
            var dlist = scrapeWeb()
            console.log("dlist:", dlist)
            dlist.then((data) => {
                this.titleList = data.list.list
                this.contentList = data.contentList.list
                
                console.log("data:", this.contentList)

            
            })

            this.date = getDate();
           
        }
    }
</script>