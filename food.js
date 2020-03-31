let Food=function (foodHeight,foodWidth,color) {
    this.x=Math.floor(Math.random()*cavas.clientWidth);
    this.y=Math.floor(Math.random()*cavas.clientHeight);

    this.color=color;
    this.foodHeight=foodHeight;
    this.foodWidth=foodWidth;

    this.drawFood=function () {
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x, this.y, this.foodWidth, this.foodHeight);
    }
}