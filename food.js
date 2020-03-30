let Food=function (foodX,foodY,foodHeight,foodWidth) {
    this.foodX=foodX;
    this.foodY=foodY;
    this.foodHeight=foodHeight;
    this.foodWidth=foodWidth;

    this.drawFood=function () {
        ctx.fillStyle="#ca1f47";
        ctx.fillRect(this.foodX, this.foodY, this.foodWidth, this.foodHeight);

    }

}