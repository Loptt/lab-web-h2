new Vue({
    el: '#app',
    data: {
        title: '',
        image: '',
        text: '',
        author: '',
        empty: true,
        blogs: []
    },
    methods: {
        addPost: function() {
            if (this.title === '' || this.image === '' || this.text === '' || this.author === '') {
                alert("Todos los campos deben de estar llenos");
                return;
            }
            
            this.empty = false
            var blog = {
                title: this.title, image: this.image, text: this.text, author: this.author
            }

            this.text = ''
            this.title = ''
            this.image = ''
            this.author = ''

            this.blogs.push(blog);
        }
    }
});