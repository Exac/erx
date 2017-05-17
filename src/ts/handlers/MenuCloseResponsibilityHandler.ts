import ResponsibilityHandler from "../ResponsibilityHandler";
import ChainOfResponsibility from "../ChainOfResponsibility";

/**
 * Created by Thomas on 2017-05-04.
 */


export default class MenuCloseResposibilityHandler extends ResponsibilityHandler {
    public execute (chain: ChainOfResponsibility, dataEvent: any) {

        if (chain.context.isPointInBackground(dataEvent)) {
            chain.context.close();//delegate changing state in view
            chain.stopPropagation();//take responsibility for event
        }

    }
}