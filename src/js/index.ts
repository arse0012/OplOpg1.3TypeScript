new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        tekst: "",
        result: "",
        cases: "toUpperCase"
    },
    methods: {
        Tekst() {
            console.log("Tekst" + this.tekst)
            this.result = this.tekst.toString()
            if (this.tekst == "") {
                this.result = "No Tekst"
            }
            else {
                console.log(this.cases)
                switch (this.cases) {
                    case "toUpperCase": console.log("toUpperCase")
                        this.result = this.tekst.toUpperCase()
                        break
                    case "toLowerCase": console.log("toLowerCase")
                        this.result = this.tekst.toLowerCase()
                        break
                }
            }
        }
    }
})