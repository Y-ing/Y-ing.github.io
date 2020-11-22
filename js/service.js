class Service {

    constructor(id) {
        this.box = document.querySelector(id);
        this.lis = this.box.querySelectorAll("li")
        this.img_hover = ["./img/service1.1.png", "./img/service2.1.png", "./img/service3.1.png", "./img/service4.1.png", "./img/service5.1.png", "./img/service6.1.png", "./img/service7.1.png", "./img/service8.1.png", "./img/service9.1.png", "./img/service10.1.png", "./img/service11.1.png", "./img/service12.1.png"]
        this.num = 0
        this.img = ["./img/service1.png", "./img/service2.png", "./img/service3.png", "./img/service4.png", "./img/service5.png", "./img/service6.png", "./img/service7.png", "./img/service8.png", "./img/service9.png", "./img/service10.png", "./img/service11.png", "./img/service12.png"]

        this.timer1 = null

        this.init()
    }

    init() {

        this.lis.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
                let li = e.target

                if (this.timer1 != null) {
                    clearTimeout(this.timer1)
                }
                this.timer1 = setTimeout(() => {
                    this.num = item.children[0].children[0].alt
                    li.children[0].children[0].src = this.img_hover[this.num - 1]
                }, 100);
            })
        });


        this.lis.forEach((item) => {
            item.addEventListener("mouseleave", (e) => {
                let li = e.target

                this.num = item.children[0].children[0].alt
                li.children[0].children[0].src = this.img[this.num - 1]

            })
        });

    }
}