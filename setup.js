const cavas=document.getElementById("myCavas");
const ctx=cavas.getContext("2d");


let gameScreen=new Screen(300, 450);
let snake=new Snake(20,40,10,10,10);
let food=new Food(50,50,10,10);

//window.setInterval(start(),100);
function run() {
    window.addEventListener("keydown", keyPress);
}
function keyPress(event) {
    switch (event.keyCode) {
        case 37:
            snake.moveLeft();
            break;
        case 38:
            snake.moveUp();
            break;
        case 39:
            snake.moveRight();
            break;
        case 40:
            snake.moveDown();
            break;
    }
}
gameScreen.drawScreen();
snake.drawSnake();
food.drawFood();

//hàm vẽ lại game
function redraw() {
    // screen.drawScreen();
    gameScreen.drawScreen();
    snake.drawSnake();
    food.drawFood();

}

//hàm kiểm tra va chạm
function checkEating() {

    if (snake.x < food.x + food.width &&
        snake.x + snake.width > food.x &&
        snake.y < food.y + food.height &&
        snake.y + snake.height > food.y) {
        return true;
    }
    return  false;
}




