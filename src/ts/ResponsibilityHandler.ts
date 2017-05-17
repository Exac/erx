/**
 * Created by Thomas on 2017-05-04.
 */
import ChainOfResponsibility from "./ChainOfResponsibility";

export default class ResponsibilityHandler {
    public execute (chain: ChainOfResponsibility, data: any) {
        // use chain to call chain.stopPropagation() if this handler claims
        // responsibility, or to get access to the chain's context member property
        // if this event handler doesn't need to claim responsibility, simply
        // return; and the next handler will execute
    }
}