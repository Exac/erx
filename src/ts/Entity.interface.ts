/**
 * Created by Thomas on 2017-05-02.
 */

interface Entity {
    xPos: number;
    yPos: number;
    xVel: number;
    yVel: number;

    update(c: CanvasRenderingContext2D): void;
}

export default Entity;