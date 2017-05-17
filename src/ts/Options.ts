/**
 * Created by Thomas on 2017-05-14.
 */

import { State } from "./State";

export default class SMOptions {
    currentState: State;
    states: Map<string, State>;

    constructor() {
        this.states = new Map<string, State>();
    }
}