/**
 * Created by Thomas on 2017-05-04.
 */
import State from './State';

export default class StateMachine {
    states: Map<string, State>;
    currentState: State;


    constructor (options: any = {}) {
        console.log("options", options);
        this.currentState = null;
        this.states = new Map<string, State>();

        if (options.states) {
            this.states = options.states;
        }

        if (options.currentState) {
            this.transition(options.currentState.name);
        }
    }

    /**
     *
     * @param {string} name
     * @param {State} stateInstance
     */
    public addState (name: string, stateInstance: State): void {
        this.states.set(name, stateInstance);
    }

    /**
     * Transition to another named state.
     * @param {string} nextState The name of the next state
     */
    public transition (nextState: string): void {
        //
        // console.log("this", this);
        // console.log("currentState", this.currentState);
        // console.log("nextState", nextState);
        // console.log("this.states", this.states);
        // console.log("this.states.get(nextState)", this.states.get(nextState));
        // console.log("after nextState call...");
        //
        if(this.currentState) {
            //leave current state: transition out, unload assets, views
            this.currentState.onLeave();
        }
        this.currentState = this.states.get(nextState);

        this.currentState.onEnter();
    }
}