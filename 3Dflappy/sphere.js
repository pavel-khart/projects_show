class bird {
  constructor(x, gravity) {
    this.x = x
    this.y = -20
    this.grv = gravity
    this.vel = 0
    this.score=0
    this.scoree='false'
  }
  display() {
    push()
    noStroke()
    translate(this.x, this.y)
    fill(255, 255, 0)
    ellipsoid(15+this.vel/10,15-this.vel/10)
    pop()
  }
  move() {
    this.vel += this.grv
    this.y += this.vel
    if (mouseIsPressed && this.y > -height / 2) {
      this.vel = -12
    }
    if (this.y > height / 2) {
      this.y = -20
      this.vel = 0
      play='false'

    }
    
  }
  collide(other){
    
  if(this.x<other.x+(other.w/2) && this.x>other.x-(other.w/2)&& ((this.y-8<other.y-125)||(this.y+8>other.y+125))){
    play='false'
    other.col=[255,0,0]
     
     
     
   }
  }
}