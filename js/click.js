class Click {

    constructor(id) {
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector("ul")
        this.num = this.ul.children.length
        this.init()
    }

    init() {

        for (let i = 0; i < this.num; i++) {
            this.ul.children[i].addEventListener("click", () => {
                for (let j = 0; j < this.num; j++) {
                    this.ul.children[j].classList.remove("tab-style")
                }
                this.ul.children[i].classList.add("tab-style")
            })
        }
    }
}