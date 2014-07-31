
var ball = function(gameBoard) {
    var xPos = 0,
        yPos = 0,
        size = 4;

    function drawPong(x, y) {
        gameBoard.getContext().fillStyle = 'white';
        gameBoard.getContext().fillRect(x, y, size, size);
    }

    function init() {
        var ballStartY = (gameBoard.getHeight() / 2 - (size / 2)),
            ballStartX = (gameBoard.getWidth() / 2 - (size / 2));

        xPos = ballStartX;
        yPos = ballStartY;

        drawPong(ballStartX, ballStartY);
    }

    init();
    return {
        init: init,
        drawPong: drawPong
    };
};