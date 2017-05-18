/**
 * Created by thomas on 17-05-17.
 */

import View from '../View';
import ChainOfResponsibility from '../ChainOfResponsibility';

export default class GameView extends View {

    constructor () {
        super();//TODO: remove when abstract
    }

    public render (c: CanvasRenderingContext2D) {
        c.font = "32px sans-serif";
        c.fillStyle = "blue";
        c.fillRect(32, 96, 32,32);
        c.fillText("GameView", 32, 96);
    }

    public setClickHandlerChain(chain:ChainOfResponsibility) {
        console.log("chain\n", chain)
    }
}