let Screen=function (height,width) {
    this.height=height;
    this.width=width;
    this.drawScreen=function () {
        ctx.fillStyle= "#21419a";
        ctx.fillRect(0,0,this.width,this.height);

    }
    this.clear=function () {
        ctx.clear(0,0,cavas.clientHeight,cavas.clientWidth);

    }

}

















// const scale=10;
// const rows= cavas.height/scale;
// const cols= cavas.width/scale;
//
// let snake;
// (function setup() {
//     snake=new Snake();
//
//
//     window.setInterval(()=>{
//         ctx.clearRect(0,0,cavas.width,cavas.height);
//         snake.update();
//         snake.draw();
//     },250)
// }());
// window.addEventListener('keydown',event)