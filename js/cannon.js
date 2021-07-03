class Cannon{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    display(){
        fill("#676e6a")
        push();
        translate(this.x,this.y)
        rotate(this.a)
        rect(0,0,this.w,this.h)
        pop();

        arc(this.x-30,this.y+90,140,200,PI,TWO_PI)
        
    }
}