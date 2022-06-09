const app = new Vue({
    el: '#app',

    data:{
        testoH1: "Hello World",
        example: "d-none",
        image: "world2.jpg",
    },

    methods:{
        render: function(){
            if(this.example){
                console.log("la varibaile example è d-none");
                //this.example = "d-block";
            } 
        }
    }
})