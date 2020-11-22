class Menu {

    constructor(id) {
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector("ul")
        this.lis = this.box.querySelectorAll("li")
        this.submentElens = document.querySelectorAll(".sub-menu")

        this.timer1 = null
        this.timer2 = null

        this.init()
    }

    init() {

        this.lis.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
                let li = e.target

                //防抖：多次触发li事件时，每次触发都要重新计时直到一段时间内没有触发才执行一次，也就是执行最后一次
                if (this.timer1 != null) {
                    clearTimeout(this.timer1)
                }
                this.timer1 = setTimeout(() => {
                    this.submentElens.forEach((item) => {
                        item.classList.remove("active")
                    })
                    li.children[1].classList.add("active")
                }, 300)

            })
        });


        this.lis.forEach((item) => {
            item.addEventListener("mouseleave", (e) => {
                let li = e.target

                if (this.timer2 != null) {
                    clearTimeout(this.timer2)
                }
                this.timer2 = setTimeout(() => {
                    li.children[1].classList.remove("active")
                }, 500)
            })
        });

    }
}