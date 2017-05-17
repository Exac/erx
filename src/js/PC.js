/**
 * Created by Thomas on 2017-04-26.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Player Controlled object
 */
class PC {
    constructor(xPosition, yPosition, xVelocity = 10, yVelocity = 10) {
        this.move = (event) => {
            //wasd => 87, 65, 83, 68
            if (event.keyCode == 87) {
                this.yPos -= 10;
            }
            else if (event.keyCode == 65) {
                this.xPos -= 10;
            }
            else if (event.keyCode == 83) {
                this.yPos += 10;
            }
            else if (event.keyCode == 68) {
                this.xPos += 10;
            }
        };
        this.xPos = xPosition;
        this.yPos = yPosition;
        this.xVel = xVelocity;
        this.yVel = yVelocity;
        document.addEventListener('keydown', this.move);
    }
    update(c) {
        c.fillStyle = "rgb(255,255," + new Date().getMilliseconds() * .255 % 255 + ")";
        c.fillRect(this.xPos, this.yPos, 200, 200);
        c.fillStyle = "#000000";
        c.font = "40px Helvetica";
        c.fillText("PC Menu", this.xPos, this.yPos + 40);
    }
}
exports.default = PC;
//# sourceMappingURL=PC.js.map