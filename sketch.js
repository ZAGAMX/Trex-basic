let player
const obs = []
const parallax = []
let x 
let bg
let suelo
let d1,d2
let f1,f2,s1,s2
let bandera = false

function preload(){
	bg = loadImage("image/fondo.png")
	f2 = loadImage("image/fondon.jpg")
	suelo = loadImage("image/suelo.png")
	s2 = loadImage("image/suelon.png")
	d1 = loadImage("image/dino1.png")
	d2 = loadImage("image/dino3.png")
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	escenario(false)
	iniciar()
}

function draw() {

	background("black")
	for(const p of parallax){
		p.move()
		p.draw()
	}
	
	player.update()
	player.draw()

	for (let i = obs.length-1; i >= 0; i--) {
		obs[i].move()
		obs[i].draw()
		if(player.collision(obs[i])){
			console.log("choco")
			if(player.antScore>player.score){
				player.antScore = player.antScore
			}
			else{
				player.antScore = player.score
			}
			obs.length = 0
			player.score = 0
			x = 0
			fill("black")
			text("Pulse espacio para continuar",width/2, height/2)
			bandera = true
			noLoop()
		}
		else{
			if(frameCount%5==0){
				player.score += 1
			}
			
		}
		console.log(bandera)
		if(player.score==200){
			escenario(true)
	}
		
		if(obs[i].Screen()){
			obs.splice(i,1)
		  }
		
	}
	if(frameCount % 120 == 0){
		let r = [0,1,2]
			let s = random(r)
			let as = [115,150]
		let sda = random(as)
		obs.push(new Obstaculo(width,height-sda,50,30,s))
	}
	
}

function keyPressed(){
	if(keyCode == 87 && player.onBottom()){
		player.salto()
	}
	if(keyCode == 32 && bandera == true){
		bandera = false
		escenario(bandera)
		loop()
	}
	if (keyCode == 83 && keyIsPressed === true) {
			player.name = d2
			player.w = 60
			player.h = 59
			player.resta = 59
	  } else {
			player.name = d1
		  	player.w = 50
			player.h = 60
			player.resta = 70
	  }
	
}



function iniciar(){
	console.log(height)
	let r = [0,1,2]
		let s = random(r)
		let as = [115,150]
		let sda = random(as)
	player = new Player(d1,50,height-100,50,60);
	obs.push(new Obstaculo(width,height-sda,50,30,s));
}
function escenario(change){
	
	if(change == false){
		
		for (let index = 0; index < 2; index++) {
			parallax.push(new Backgraound(bg, index * width, 0,width, height,0.5))
		}
		for (let index = 0; index < 2; index++) {
			parallax.push(new Backgraound(suelo, index * width, height - 300, width, 300,2))
		}
	}
	else{
		
		for (let index = 0; index < 2; index++) {
			parallax.push(new Backgraound(f2, index * width, 0,width, height,0.5))
		}
		for (let index = 0; index < 2; index++) {
			parallax.push(new Backgraound(s2, index * width, height - 300, width, 300,2))
		}
	}
	
}
