const cavas=document.getElementById("myCavas");
const ctx=cavas.getContext("2d");


let gameScreen=new Screen(300, 450);
let snake = new Snake(20,40,10,10,5, " red ");
let food=new Food(7,7,"black");


function start(){
    snake.drawSnake();
    food.drawFood();
}

//hàm vẽ lại game
function redraw() {
    gameScreen.clear();
     snake.drawSnake();
    food.drawFood();

}

//hàm kiểm tra va chạm
function checkEating() {
    if (snake.x===food.foodY && snake.y===food.foodY) {
        return true;
    }
    return false;
}
function ate() {
    if (checkEating()){
        food.drawFood();
        console.log(checkEating());
    }

}
// function snakeLength() {
//     if (checkEating()){
//         snake.width+=food.foodWidth;
//         console.log("hi");
//     }
// }

function moveRight() {
    snake.moveRight();
    redraw();
    ate();
}
function moveLeft() {
    snake.moveLeft();
    redraw();
    ate();
}
function moveUp() {
    snake.moveUp();
    redraw();
    ate();
}
function moveDown() {
    snake.moveDown();
    redraw();
    ate();
}

function keyPress(event) {
    switch (event.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }

}




