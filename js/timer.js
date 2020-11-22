class Timer {

    constructor(id) {
        this.box = document.querySelector(id)
        this.hour = this.box.querySelector(".hour")
        this.minute = this.box.querySelector(".minute")
        this.second = this.box.querySelector(".second")
        this.word = this.box.querySelector(".downs")
        this.H = 19;
        //获取当前时间
        var mydate = new Date();
        this.h = mydate.getHours()
        this.m = mydate.getMinutes()
        this.s = mydate.getSeconds()
        //设置计时器
        this.timer = null
        //初始化方法
        this.flag = true
        this.init()
    }

    init() {

        if (this.h > 19) {
            this.H = 21
            this.word.innerHTML = "距结束"
        }else if(this.h > 21){
            this.word.innerHTML = "倒计时"
            this.flag = false
            this.box.style.display = "none"
        }
        if (this.h > 10) {
            this.hour.innerHTML = "0" + (this.H - this.h)
            if (this.m > 50) {
                this.minute.innerHTML = "0" + (59 - this.m)
                if (this.s > 50) {
                    this.second.innerHTML = "0" + (59 - this.s)
                } else {
                    this.second.innerHTML = 59 - this.s
                }
            } else if (this.s > 50) {
                this.minute.innerHTML = 59 - this.m
                this.second.innerHTML = "0" + (59 - this.s)
            } else {
                this.minute.innerHTML = 59 - this.m
                this.second.innerHTML = 59 - this.s
            }
        } else if (this.m > 50) {
            this.hour.innerHTML = this.H - this.h
            this.minute.innerHTML = 59 - this.m
            if (this.s > 50) {
                this.second.innerHTML = "0" + (59 - this.s)
            } else {
                this.second.innerHTML = 59 - this.s
            }
        } else if (this.s > 50) {
            this.hour.innerHTML = this.H - this.h
            this.minute.innerHTML = 59 - this.m
            this.second.innerHTML = "0" + (59 - this.s)
        } else {
            this.hour.innerHTML = this.H - this.h
            this.minute.innerHTML = 59 - this.m
            this.second.innerHTML = 59 - this.s
        }
        if (this.flag) {
            this.down()
        }
    }

    down() {

        this.timer = setInterval(() => {
            if (this.second.innerHTML != 0) {
                if (this.second.innerHTML <= 10) {
                    this.second.innerHTML = "0" + (this.second.innerHTML - 1)
                } else {
                    this.second.innerHTML -= 1;
                }
            } else if (this.minute.innerHTML != 0 && this.second.innerHTML == 0) {
                if (this.minute.innerHTML <= 10) {
                    this.minute.innerHTML = "0" + (this.minute.innerHTML - 1)
                    this.second.innerHTML = 59;
                } else {
                    this.minute.innerHTML -= 1;
                    this.second.innerHTML = 59;
                }
            } else if (this.hour.innerHTML != 0 && this.minute.innerHTML == 0 && this.second.innerHTML == 0) {
                if (this.minute.innerHTML <= 10) {
                    this.hour.innerHTML = "0" + (this.hour.innerHTML - 1)
                    this.minute.innerHTML = 59
                    this.second.innerHTML = 59
                } else {
                    this.hour.innerHTML -= this.hour.innerHTML
                    this.minute.innerHTML = 59
                    this.second.innerHTML = 59
                }
            } else if (this.hour.innerHTML == 0 && this.minute.innerHTML == 0 && this.second.innerHTML == 0) {
                this.box.style.display = "none"
                clearInterval(this.timer)
            }
        }, 1000)
    }

}