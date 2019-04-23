class Obstaculo{
    constructor(x,y,w,h,s,r){
        this.x = x
        this.y = y
        this.r = r
        this.w = w
        this.h = h
        this.s = s
        this.speed = 5
    }
    draw(){
        fill(192)
        //console.log(this.y)
        
        console.log(this.s)
        switch(this.s){
            case 0:
                rect(this.x,this.y,this.w,this.h)
            break;
            case 1:
                rect(this.x,this.y,60,this.h)
            break;
            case 2:
                rect(this.x,this.y,this.w,this.h)
            break;
        }
        
    }
    move(){
        this.x -= this.speed
    }
    Screen(){
        return (this.x < -this.w ? true : false)
    }

}