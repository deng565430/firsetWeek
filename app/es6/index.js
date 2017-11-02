class PraiseButton {
  constructor(){
    this.num  = 0
  }
}

class Thumb extends PraiseButton {
  constructor(num){
    super(num)
  }
  clickTenTimes() {
    this.num++
    return this.stop()
  }
  stop(data = 10) {
    return this.num <= data
  }
}

var thumb = new Thumb();
