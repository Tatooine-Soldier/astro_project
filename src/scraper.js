import BlogList from "./blogContentList.js"
import axios from 'axios'
import cheerio from 'cheerio'
// const cheerio = require('cheerio');

export async function scrapeWeb() {
    try {
        const response = await axios.get("https://blogs.nasa.gov/")
        const $ = cheerio.load(response.data);

        const pageTitle = $('title').text();

        const headers = $('.entry-header h2 a').text()
        // console.log("Header--> ", headers)
        const content = $('.entry-content').text()
        // console.log("Content-->", content.split("\n"))

        var contentList = new BlogList();
        var tempList = content.split("\n")
        for (var j = 0; j < tempList.length; j++) {
            if (tempList[j] !== "") {
                contentList.addBlog(tempList[j])
            }
           
        }
        
        //need to parse the string and concat  eg. "NAS", "Aj", "upiter is bright"
        var list = new BlogList()
        const splitString = headers.split(/([a-z][A-Z]|[0-9][A-Z])/);
        for (var i = 0; i < splitString.length; i++) {
            if (i % 2 === 1) { //if odd index
                splitString[i-1] += splitString[i][0]
                var temp = splitString[i][1] + splitString[i+1] 
                splitString[i+1] = temp 
                list.addBlog(splitString[i-1]) 
            }
        }
        console.log("list --> ", list.len())
        console.log("contentList --> ", contentList.len())
        return {
            list: list, 
            contentList: contentList
        }
    } catch(error) {
        console.error("Error:", error)
    }
}

export var lists = scrapeWeb()
