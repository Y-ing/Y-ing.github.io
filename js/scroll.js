class Scroll {

    constructor(id) {
        this.box = document.querySelector(id)
        this.box2 = document.querySelector("#f-right")

        this.init()
    }

    init() {

        if (parseFloat(window.scrollY) > 665) {
            this.box.classList.add("flex-box")
            this.box2.classList.add("f-flex")
        } else {
            this.box.classList.remove("flex-box")
            this.box2.classList.remove("f-flex")
        }
        if (parseFloat(window.scrollY) < 665) {
            this.box2.children[0].children[0].children[0].style.color = "#333333"
        } else if (parseFloat(window.scrollY) > 665 && parseFloat(window.scrollY) < 887) {
            this.box2.children[0].children[1].children[0].style.color = "#333333"
            this.box2.children[0].children[0].children[0].style.color = "#e1251b"
        } else if (parseFloat(window.scrollY) > 887) {
            this.box2.children[0].children[0].children[0].style.color = "#333333"
            this.box2.children[0].children[1].children[0].style.color = "#e1251b"
        }

        this.scroll()
    }

    scroll() {

        window.onscroll = () => {
            if (parseFloat(window.scrollY) > 665) {
                this.box.classList.add("flex-box")
                this.box2.classList.add("f-flex")
            } else {
                this.box.classList.remove("flex-box")
                this.box2.classList.remove("f-flex")
            }
            if (parseFloat(window.scrollY) < 665) {
                this.box2.children[0].children[0].children[0].style.color = "#333333"
            } else if (parseFloat(window.scrollY) > 665 && parseFloat(window.scrollY) < 887) {
                this.box2.children[0].children[1].children[0].style.color = "#333333"
                this.box2.children[0].children[0].children[0].style.color = "#e1251b"
            } else if (parseFloat(window.scrollY) > 887) {
                this.box2.children[0].children[0].children[0].style.color = "#333333"
                this.box2.children[0].children[1].children[0].style.color = "#e1251b"
            }
        }
    }
}