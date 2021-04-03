var DustbinImg, PaperImg
var dustbinSprite, paperSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState="onSling"

function preload()
{
	//DustbinImg= loadImage("dustbingreen.png")
	//PaperImg= loadImage("paper.png")
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);

	//paperSprite= createSprite(200, 430, 20,20)
	//paperSprite.addImage(PaperImg)
	//paperSprite.scale=0.3

	//dustbinSprite=createSprite(915,384,50,50)
    //dustbinSprite.addImage(DustbinImg)
    //dustbinSprite.scale=0.35


	engine = Engine.create();
	world = engine.world;
	//Blue
    Box1 = new Rectangle(380,366,30,50)
    Box2 = new Rectangle(410,366,30,50)
    Box3 = new Rectangle(440,366,30,50)
    Box4 = new Rectangle(470,366,30,50)
    Box5 = new Rectangle(500,366,30,50)
    Box6 = new Rectangle(530,366,30,50)
    Box7 = new Rectangle(560,366,30,50)
    Box8 = new Rectangle(590,366,30,50)
    Box9 = new Rectangle(620,366,30,50)
	Box10 = new Rectangle(500,156,30,50)

    //Green
	GreenBox1 = new Rectangle2(410,316,30,50)
    GreenBox2 = new Rectangle2(440,316,30,50)
    GreenBox3 = new Rectangle2(470,316,30,50)
    GreenBox4 = new Rectangle2(500,316,30,50)
    GreenBox5 = new Rectangle2(530,316,30,50)
    GreenBox6 = new Rectangle2(560,316,30,50)
	GreenBox7 = new Rectangle2(590,316,30,50)
    //Pink
	PinkBox1 = new Rectangle3(440,256,30,50)
    PinkBox2 = new Rectangle3(470,256,30,50)
    PinkBox3 = new Rectangle3(500,256,30,50)
    PinkBox4 = new Rectangle3(530,256,30,50)
    PinkBox5 = new Rectangle3(560,256,30,50)
    //Yellow
	YellowBox1 = new Rectangle4(470,206,30,50)
    YellowBox2 = new Rectangle4(500,206,30,50)
    YellowBox3 = new Rectangle4(530,206,30,50)

	//Pink Smaller Boxes
	PinkSmallBox1= new Rectangle3(726,206,30,50)
	PinkSmallBox2= new Rectangle3(756,206,30,50)
	PinkSmallBox3= new Rectangle3(786,206,30,50)
	PinkSmallBox4= new Rectangle3(816,206,30,50)
	PinkSmallBox5= new Rectangle3(846,206,30,50)
	PinkSmallBox6= new Rectangle3(876,206,30,50)
    //Blue Smaller Boxes
	BlueSmallBox1= new Rectangle(756,156,30,50)
	BlueSmallBox2= new Rectangle(786,156,30,50)
	BlueSmallBox3= new Rectangle(816,156,30,50)
	BlueSmallBox4= new Rectangle(846,156,30,50)
    //Yellow Smaller Boxes
	YellowSmallBox1= new Rectangle4(786,106,30,50)
	YellowSmallBox2= new Rectangle4(816,106,30,50)
	//Green Smaller Boxes
	GreenSmallBox1= new Rectangle2(801,56,30,50)



	Ground3 = new ground(800,250,200,15)
	Ground2 = new ground(500,400,300,15)
    Ground1= new ground(width/2,450,width,15)
    Ball= new Paper(100,300,10)
	
	//Create the Bodies Here.
	Launcher1= new Launcher(Ball.body,{x:100,y:300})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");

 // text("Drag the Paper Ball to the top and shoot", 400, 250)
 // Engine.update(engine)
 
 //dustbinSprite.x= HorizontalBox1.body.position.x
// dustbinSprite.y= HorizontalBox1.body.position.y

  Box1.display()
  Box2.display()
  Box3.display()
  Box4.display()
  Box5.display()
  Box6.display()
  Box7.display()
  Box8.display()
  Box9.display()
  Box10.display()

  GreenBox1.display()
  GreenBox2.display()
  GreenBox3.display()
  GreenBox4.display()
  GreenBox5.display()
  GreenBox6.display()
  GreenBox7.display()
  PinkBox1.display()
  PinkBox2.display()
  PinkBox3.display()
  PinkBox4.display()
  PinkBox5.display()
  YellowBox1.display()
  YellowBox2.display()
  YellowBox3.display()
  PinkSmallBox1.display()
  PinkSmallBox2.display()
  PinkSmallBox3.display()
  PinkSmallBox4.display()
  PinkSmallBox5.display()
  PinkSmallBox6.display()
  BlueSmallBox1.display()
  BlueSmallBox2.display()
  BlueSmallBox3.display()
  BlueSmallBox4.display()
  YellowSmallBox1.display()
  YellowSmallBox2.display()
  GreenSmallBox1.display()

  Ground3.display()
  Ground2.display()
  Ground1.display()
  Launcher1.display()
  Ball.display()

  //paperSprite.x=paperObject.body.position.x
// paperSprite.y=paperObject.body.position.y
//keyPressed()
  drawSprites();
}


function mouseDragged(){
	if(gameState=="onSling"){
Matter.Body.setPosition(Ball.body, {x: mouseX, y: mouseY})
	}
}


function mouseReleased(){
Launcher1.fly();
    gameState="launched"

}

function keyPressed(){
    if (keyCode==32){
    Launcher1.attach(Ball.body);
	gameState= "onSling"

	}}

	//function keyPressed() {
	//	if (keyCode===UP_ARROW) {
	//	   Matter.Body.applyForce(Ball.body,paperObject.Ball.position,{x:33,y:-26});
		   
	//	 }
	 //  }