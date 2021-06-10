class Particle{
    constructor(x,y,r){
        var option={
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,r,options)
        world.add(world,this.body)
        this.color = color(random(0,255),random(0,255),random(0,255))
    }
}