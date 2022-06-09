const app = new Vue({
    el: '#app',

    data:{
        testoH1: "Hello World",
        example: "d-none",
        image: "world2.jpg",
    },

    methods:{
        render: function(){
            if(this.example == "d-none"){
                this.example = "d-block";
            } else if (this.example == "d-block") {
                this.example = "d-none";
            }
        }
    }
})

