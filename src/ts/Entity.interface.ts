/**
 * Created by Thomas on 2017-05-02.
 */

interface Entity {
    xPos: number;
    yPos: number;
    xVel: number;
    yVel: number;

    update(): void;
}

export default Entity;