let Food=function (foodHeight,foodWidth,color) {
    this.foodX=Math.floor(Math.random()*cavas.clientWidth);
    this.foodY=Math.floor(Math.random()*cavas.clientHeight);

    this.color=color;
    this.foodHeight=foodHeight;
    this.foodWidth=foodWidth;

    this.drawFood=function () {
        ctx.fillStyle=this.color;
        ctx.fillRect(this.foodX, this.foodY, this.foodWidth, this.foodHeight);
    }
}