class Player{
    constructor(name,x,y,w,h){
        this.name = name
        this.x = x
        this.w = w
        this.y = y
        this.h = h
        this.score = 0
        this.speed = 0
        this.antScore = 0
        this.v = 0
        this.g = 0.98
        this.j = 16
        this.resta = 80

    }
    draw(){
        fill(255)
        
        rect(this.x,this.y,this.w,this.h)
        image(this.name,this.x,this.y,this.w,this.h)
        textSize(14);
        fill("black")
        text("Presiona W para saltar",50, 30)
        text("Presiona S para agachar",50, 50)

        text("SCORE: " + this.antScore, width-150, 30)
        text(this.score, width-50,30)
    }
    update(){

        this.v += this.g
        this.y += this.v
        
        if((this.y + this.w) > height-this.resta){
            this.y = (height-this.resta) - this.w
            this.v = 0
        }
    }
    onBottom(){
        return this.y == ((height-this.resta) - this.w)
    }
    salto(){
        this.v -= this.j
    }
    
    collision(obstaculo){
        if((this.x+this.w>=obstaculo.x)&&(obstaculo.y+obstaculo.h>=this.y&&obstaculo.y+obstaculo.h<=this.y+this.h)&&(obstaculo.x+obstaculo.w>=this.x)
        ||((this.y >= obstaculo.y && this.y <= obstaculo.y + obstaculo.w)&&(this.x+this.w >= obstaculo.x)&&(obstaculo.x+obstaculo.w>= this.x1)
        ||(this.y+this.h >= obstaculo.y && this.y+this.h <= obstaculo.y+obstaculo.h)&&(this.x+this.w >= obstaculo.x)&&(obstaculo.x+obstaculo.w>=this.x))){
            return true
        }
        else{
            return false
        }
    }

}