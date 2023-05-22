export default class BlogList {
    constructor() {
        this.list = [];
    }

    addBlog(blog) {
        this.list.push(blog) 
    }

    removeBlog(blog) {
        this.list = this.list.filter(item => item !== blog)
    }

    reverse() {
        this.list = this.list.reverse();
    }

    print() {
        for (var i =0; i < this.list.length; i++) {
            console.log(this.list[i]) 
        }
    }

    len() {
        return this.list.length;
    }
}