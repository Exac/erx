/**
 * Created by Thomas on 2017-05-04.
 */

import State from "../State";
import View from "../View";
import ChainOfResponsibility from "../ChainOfResponsibility";
import MenuCloseResposibilityHandler from "../handlers/MenuCloseResponsibilityHandler";
import MenuStartResposibilityHandler from "../handlers/MenuStartResponsibilityHandler";

/**
 * MenuState
 * Our main view class has its own states, each of which handles
 * which chains of responsibility are active at any time as well
 * as visual transitions
 */
export default class MenuState extends State {
    //name: string
    //context: any (constructed)
    chain: ChainOfResponsibility;
    view: View;

    constructor (context: any) {
        super(context);

        //TODO: setup this.chain as a new ChainOfResponsibility
        this.chain = new ChainOfResponsibility(
            this.view,
            [
                new MenuCloseResposibilityHandler(),
                new MenuStartResposibilityHandler()
            ]
        );

    }

    onEnter () {
        // change the view's chain of responsibility
        // guarantees only the relevant code can execute
        // other states will have different chains to handle clicks on the same view
        console.log("this", this);
        console.log("this.chain", this.chain);
        console.log("this.context", this.context);
        //this.context.setClickHandlerChain(this.chain);
    }

    onLeave () {

    }
}