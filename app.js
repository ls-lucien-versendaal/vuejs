const app = Vue.createApp({
    //data, functions
    // template:'<h2>Template</h2>'
    data() {
        return {
            showBooks: true,
            url: 'https://google.nl',
            target: '_blank',
            books:[
                {title : 'The Name of the Wind', author: 'Patrick Rothfuss', img:'assets/1.png', isFav: true},
                {title : 'Clean Code', author: 'Bill Gates', img:'assets/2.png', isFav: false},
                {title : 'The Intelligent Trader ', author: 'Jon Doe', img:'assets/3.png', isFav: true},
            ],
            title : 'The Final Show ',
            author: 'Lucien Versendaal',
            age : 32,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title){
            // this.title = "Changes the title"
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks 
        },
        toggleFavBooks(book){
            book.isFav = !book.isFav

        },
        handleEvent(e, data){
             console.log(e, e.type);
             if (data) {
                 console.log(data)
             }
        },
        handleMouseMove(e){
            console.log(e)
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})
app.mount('#app')

//challenge - add to Favs
// - attach a click event to each li tag
// - when a user clicks an li, toggle the 'isFav' property of that book