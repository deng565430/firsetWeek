class PraiseButton {
  constructor(){
    this.num  = 0
  }
}

class Thumb extends PraiseButton {
  constructor(num){
    super(num)
    this.timeoutId = null
  }
  clickTenTimes() {
    clearTimeout(this.timeoutId)
    var self = this;
    this.timeoutId = setTimeout(function(){
        return self.addNum()
    },200)
  }
  stop(data = 10) {
    return this.num <= data
  }
  addNum () {
    this.num++
    console.log(this.stop())
    return this.stop()
  }
}

var thumb = new Thumb();
