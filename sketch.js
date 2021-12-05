const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var borracha;
var pedra;
var ferro;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    borracha = new Rubber(520, 520, 40, 120);
    pedra = new Rock(820, 520, 50, 130);
    ferro = new Iron(320, 520, 70, 150);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    borracha.display();
    pedra.display();
    ferro.display();
}