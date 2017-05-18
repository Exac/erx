/**
 * Created by thomas on 17-05-17.
 */

import View from '../View';
import ChainOfResponsibility from '../ChainOfResponsibility';

export default class MenuView extends View {

    constructor () {
        super(); //TODO: remove when this is abstract
    }

    public render (c: CanvasRenderingContext2D) {
        c.fillStyle = "red";
        c.font = "32px sans-serif"
        c.fillRect(32,32,new Date().getSeconds()%60,32);
        c.fillText("MenuView", 32,32);
    }

    public setClickHandlerChain(chain:ChainOfResponsibility) {
        console.log("chain \n", chain)
    }
}