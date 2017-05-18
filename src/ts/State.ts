/**
 * Created by Thomas on 2017-05-04.
 */

export default class State {
    name: string = ''; // unique identifier used for transitions
    context: any = null; // state identity context- determining state
                         // transition logic

    constructor (context: any) {
        this.context = context;
    }

    public onEnter (): void {} // Transition effects go here

    public onLeave (): void {}

}
