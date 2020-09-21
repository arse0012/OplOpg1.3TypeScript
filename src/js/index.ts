new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        tekst: "",
        collection: ""
    },
    methods: {
        Tekst() {
            console.log("Do it " + this.tekst)
            if(this.tekst == "") {
                this.collection = "No Tekst"
            }
            else{
                this.ccollection = this.tekst
            }
        }
    }
})