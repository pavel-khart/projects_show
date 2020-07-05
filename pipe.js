class pipe {
  constructor(w, col) {
    this.y = random((windowHeight / 2) - 125, (-windowHeight / 2) + 125)
    this.x = width / 2 + w
    this.w = w
    this.col = col
  }
  display() {
    push()
    push()
    strokeWeight(2)
    translate(this.x, this.y + height / 2 + 125)
    fill(this.col[0], this.col[1], this.col[2])
    box(this.w, height, this.w)
    pop()
    strokeWeight(2)
    translate(this.x, this.y - height / 2 - 125)
    fill(this.col[0], this.col[1], this.col[2])
    box(this.w, height, this.w)
    pop()

    //print(width)
    //pop()
  }
  move() {
    this.x -= 3



  }
}