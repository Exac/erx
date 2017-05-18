/**
 * Created by Thomas on 2017-04-26.
 */

import Entity from '../Entity';

/**
 * Player Controlled object
 */
export default class PC extends Entity {
    xPos: number;
    yPos: number;
    xVel: number;
    yVel: number;

    constructor(xPosition: number, yPosition: number, xVelocity: number = 10, yVelocity: number = 10) {
        super();

        //this.xPos = xPosition;
        //this.yPos = yPosition;
        //this.xVel = xVelocity;
        //this.yVel = yVelocity;
        //
        //document.addEventListener('keydown', this.move);
    }

    public update() {

        //c.fillStyle = "rgb(255,255," + new Date().getMilliseconds() * .255 % 255 + ")";
        //c.fillRect(this.xPos, this.yPos, 200, 200);
        //c.fillStyle = "#000000";
        //c.font = "40px Helvetica";
        //c.fillText("PC Menu", this.xPos, this.yPos + 40);
    }

    public move = (event: KeyboardEvent) => {
        //wasd => 87, 65, 83, 68
        //if (event.keyCode == 87) {
        //    this.yPos -= 10;
        //} else if (event.keyCode == 65) {
        //    this.xPos -= 10;
        //} else if (event.keyCode == 83) {
        //    this.yPos += 10;
        //} else if (event.keyCode == 68) {
        //    this.xPos += 10;
        //}
    };
}