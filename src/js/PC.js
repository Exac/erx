/**
 * Created by Thomas on 2017-04-26.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Player Controlled object
 */
var PC = (function () {
    function PC(xPosition, yPosition, xVelocity, yVelocity) {
        if (xVelocity === void 0) { xVelocity = 10; }
        if (yVelocity === void 0) { yVelocity = 10; }
        var _this = this;
        this.move = function (event) {
            //wasd => 87, 65, 83, 68
            if (event.keyCode == 87) {
                _this.yPos -= 10;
            }
            else if (event.keyCode == 65) {
                _this.xPos -= 10;
            }
            else if (event.keyCode == 83) {
                _this.yPos += 10;
            }
            else if (event.keyCode == 68) {
                _this.xPos += 10;
            }
        };
        this.xPos = xPosition;
        this.yPos = yPosition;
        this.xVel = xVelocity;
        this.yVel = yVelocity;
        document.addEventListener('keydown', this.move);
    }
    PC.prototype.update = function (c) {
        c.fillStyle = "rgb(255,255," + new Date().getMilliseconds() * .255 % 255 + ")";
        c.fillRect(this.xPos, this.yPos, 200, 200);
        c.fillStyle = "#000000";
        c.font = "40px Helvetica";
        c.fillText("Entity", this.xPos, this.yPos + 40);
    };
    return PC;
}());
exports.default = PC;
//# sourceMappingURL=PC.js.map