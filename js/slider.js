class Slider {

    constructor(id) {
        this.box = document.querySelector(id)
        this.picBox = this.box.querySelector("ul")
        this.indexBox = this.box.querySelector(".index-box")

        this.index = 1
        this.animated = false
        this.sliders = this.picBox.children.length //图片的数量(8)
        this.auto = null
        this.sliderWidth = this.picBox.clientWidth //一个图片的宽度,clientWidth表示当前容器的宽度
        this.init()
    }

    init() {

        this.initPoint()
        this.copyPic()
        this.leftRight()
        this.autoPlay()
    }

    initPoint() {
        const num = this.picBox.children.length;

        let frg = document.createDocumentFragment();

        for (let i = 0; i < num; i++) {
            let li = document.createElement("li")
            li.setAttribute("data-index", i + 1)
            if (i == 0) li.className = "active1"
            frg.appendChild(li)
        }


        this.indexBox.children[0].style.width = num * 8 * 2 + "px";
        this.indexBox.children[0].appendChild(frg)

        this.indexBox.children[0].addEventListener("click", (e) => {
            let pointIndex = (e.target).getAttribute("data-index");
            if (pointIndex == null) {
                console.log("warning")
            } else {
                let offset = (pointIndex - this.index) * this.sliderWidth
                this.index = pointIndex
                this.move(offset)
            }
        })
    }
    //辅助图实现，第一张的前面加上最后一张，最后一张的后面加上第一张，实现无缝连接
    copyPic() {
        const first = this.picBox.firstElementChild.cloneNode(true);
        const last = this.picBox.lastElementChild.cloneNode(true);

        this.picBox.appendChild(first)
        this.picBox.insertBefore(last, this.picBox.firstElementChild)

        this.picBox.style.width = this.sliderWidth * this.picBox.children.length + "px";
        this.picBox.style.left = -1 * this.sliderWidth + "px"
    }

    move(offset) {
        //加个切换动画
        this.animate(offset)
        //获取小圆点的数量
        const num = this.indexBox.children[0].children.length;
        //先把全部小圆点变成未选中状态
        for (let i = 0; i < num; i++) {
            this.indexBox.children[0].children[i].className = ""
        }
        this.indexBox.children[0].children[this.index - 1].className = "active1"
    }

    animate(offset) {
        const time = 100; //总运动时间
        const rate = 100; //一次运动时间
        let speed = offset / (time / rate) //图片每次移动的距离

        let goal = parseFloat(this.picBox.style.left) - offset //目标位置

        this.animated = true

        let animate = setInterval(() => {
            //如果到达目标 或者 剩下要移动距离比每次移动的距离小 就直接赋值left为最终要达到的位置
            if (parseFloat(this.picBox.style.left) == goal || Math.abs(Math.abs(parseFloat(this.picBox.style.left)) - Math.abs(goal)) < Math.abs(speed)) {
                this.picBox.style.left = goal + "px"
                clearInterval(animate)
                this.animated = false
                if (parseFloat(this.picBox.style.left) == 0) {
                    this.picBox.style.left = -this.sliders * this.sliderWidth + "px"
                } else if (parseFloat(this.picBox.style.left) == -(this.sliders + 1) * this.sliderWidth) {
                    this.picBox.style.left = -this.sliderWidth + "px"
                }
            } else {
                this.picBox.style.left = parseFloat(this.picBox.style.left) - speed + "px"
            }
        }, rate);

    }

    leftRight() {

        this.box.querySelector(".slider-left").addEventListener("click", () => {

            if (this.animated) {
                return
            }
            if (this.index - 1 < 1) {
                this.index = this.sliders
            } else {
                this.index--
            }
            this.move(-this.sliderWidth)

        })

        this.box.querySelector(".slider-right").addEventListener("click", () => {

            if (this.animated) {
                return
            }
            if (this.index + 1 > this.sliders) {
                this.index = 1
            } else {
                this.index++
            }

            this.move(this.sliderWidth)
        })
    }

    autoPlay() {
        this.auto = setInterval(() => {
            this.box.querySelector(".slider-right").click()
        }, 2000);

        this.box.addEventListener("mouseenter", () => {
            clearInterval(this.auto)
        })

        this.box.addEventListener("mouseleave", () => {
            this.auto = setInterval(() => {
                this.box.querySelector(".slider-right").click()
            }, 2000);
        })
    }
}