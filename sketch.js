//Variables required
var copter,copterImage,parcel,parcelImage, ground, groundImage;
var MyEngine, MyWorld;
var groundBody,parcelBody;

//Name Spacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;
const Body=Matter.Body;

function preload()
{
    copterImage=loadImage("helicopter.png")
    parcelImage=loadImage("package.png")
    groundImage=loadImage("ground.png")
}

function setup()
{
    createCanvas(800,590)
    //rectMode(CENTER);
    
    ground=createSprite(width/2,height-30,800,80);
    ground.addImage(groundImage)
    //ground.shapeColor="brown";

    parcel=createSprite(width/2,100,20,20);
    parcel.addImage(parcelImage)
    parcel.scale=0.2;

    copter = createSprite(width/2,100,50,50);
    copter.addImage(copterImage)
    copter.scale=0.7;

    MyEngine=Engine.create();
    MyWorld=MyEngine.world;

    groundBody=Bodies.rectangle(width/2,height-30,800,20,{isStatic:true})
    World.add(MyWorld,groundBody);

    parcelBody=Bodies.circle(width/2,100,20,{restitution: 0.4, isStatic: true})
   World.add(MyWorld,parcelBody)

   Engine.run(MyEngine)
}

function draw()
{
    background("lightblue")
    //Engine.update(MyEngine)
    parcel.x=parcelBody.position.x;
    parcel.y=parcelBody.position.y;
    keyPressed();
    drawSprites();
    textSize(20)
    fill("green")
    text("Press Enter to drop Medical Package",250,20)
}

function keyPressed()
{
    if(keyCode===ENTER)
    {
        Body.setStatic(parcelBody,false)
    }
}