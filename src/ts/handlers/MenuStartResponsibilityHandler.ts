import ResponsibilityHandler from "../ResponsibilityHandler";
import ChainOfResponsibility from "../ChainOfResponsibility";

/**
 * Created by Thomas on 2017-05-04.
 */


export default class MenuStartResposibilityHandler extends ResponsibilityHandler {
    public execute (chain: ChainOfResponsibility, data: any) {

        if(!chain.context.isPointInBackground(data)) {
            chain.context.close();//delegate changing state in view
            chain.stopPropagation();
        }

    }
}