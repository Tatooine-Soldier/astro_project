<script setup>
import BlogPost from "../components/BlogPost.vue"
import { getDate } from "../getDate.js"
import { scrapeWeb } from "../scraper.js"
</script>

<template>
    <section class="blog-container">
        <section class="blog-top">
            <section class="blog-header">Blog:  {{ date }}</section>
            <div id="sort-arrows" @click="reverseList()">
                <b>Sort</b>  &darr; &uarr;
            </div>
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

.blog-container {
    margin-top: 2%;;
    padding: 1%;
}

.blog-header {
    font-size: 2em;
}

.blog-top {
    display: grid;
    grid-template-columns: 70% 30%;
}

#sort-arrows {
    padding: 2%;    
    background-color: var(--primary-dark);  
    width: 18%;
    display: flex;
    align-items: center;
    border-radius: 15px;;
}

#sort-arrows:hover {
    cursor: pointer;
}

#sort-arrows b {
    padding-right: 5%;
}

@media screen and (max-width: 1100px) {
    #sort-arrows {
        width: 22%;
    }
  }

@media screen and (max-width: 900px) {
    #sort-arrows {
        width: 26%;
    }
}

@media screen and (max-width: 750px) {
    #sort-arrows {
        width: 32%;
    }
}

@media screen and (max-width: 600px) {
    #sort-arrows {
        width: 38%;
    }

    .blog-container {
        margin-top: 8%;;
    }
}

@media screen and (max-width: 500px) {
    #sort-arrows {
        width: 45%;
    }
}

@media screen and (max-width: 400px) {
    #sort-arrows {
        width: 60%;
        padding: 2%;;
        height: 50%;
    }

    .blog-container {
        margin-top: 24%;;
        background-color: var(--secondary-dark);
    }
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
           
        },
        methods: {
            reverseList() {
                this.titleList.reverse();
                this.contentList.reverse();
            }
        }
    }
</script>