/**
 * Created by Thomas on 2017-05-04.
 */

import ResponsibilityHandler from "./ResponsibilityHandler";

export default class ChainOfResponsibility {
    context: any = null; //TODO: type this.... relevant context- view, application state, and so on
    handlers: ResponsibilityHandler[] = null; // array of responsibility handlers
    canPropagate: boolean = true;

    constructor (context: any, arrHandlers: ResponsibilityHandler[]) {
        this.context = context;
        if (arrHandlers) {
            this.handlers = arrHandlers;
        } else {
            this.handlers = [];
        }
    }

    public execute (data: any) {
        for (let i = 0; i < this.handlers.length; i++) {
            if (this.canPropagate) {
                //give a handler a chance to claim responsibility~
                (this.handlers[i].execute(this, data));
            } else {
                //event took responsibility~
                break;
            }
        }
        // reset state after event has been handled
        this.canPropagate = true;
    }

    // this is the method a handler can call to claim responsibility
    // and prevent other handlers from acting on the event
    public stopPropagation () {
        this.canPropagate = false;
    }

    public addHandler (handler: ResponsibilityHandler) {
        this.handlers.push(handler);
    }
}