const app = new Vue({
    el: '#app',

    data:{
        testoH1: "Hello World",
        example: "d-none",
    },

    methods:{
        render: function(){
            if(this.example){
                this.example = "d-block";
            } 
        }
    }
})