let Snake=function (x,y,height,width,speed,color) {
    this.x=x;
    this.y=y;
    this.weight=width;
    this.height=height;
    this.speed=speed;
    this.color=color;

    this.moveRight =function () {
        this.x+=this.speed;
    }
    this.moveLeft=function () {
        this.x-=this.speed;

    }

    this.moveUp=function () {
        this.y-=this.speed;

    }

    this.moveDown=function () {
        this.y+=this.speed;
    }
    this.drawSnake=function () {
        ctx.beginPath();
        ctx.fillStyle= this.color;
        ctx.fillRect(this.x,this.y,this.weight,this.height);
        ctx.fill();
    }
}







