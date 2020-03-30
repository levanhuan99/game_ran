let Snake=function (x,y,height,width,speed) {
    this.x=x;
    this.y=y;
    this.weight=width;
    this.height=height;
    this.speed=speed;

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
        ctx.fillStyle= "#FFFFFF";
        ctx.fillRect(this.x,this.y,this.weight,this.height);

    }

}







