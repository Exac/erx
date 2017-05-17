///<reference path="Options.ts"/>
/**
 * Created by Thomas on 2017-04-25.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MenuState_1 = require("./states/MenuState");
const StateMachine_1 = require("./StateMachine");
const PC_1 = require("./PC");
const GameState_1 = require("./states/GameState");
const Options_1 = require("./Options");
class Engine {
    constructor(_c) {
        //console.info("E.c:start");
        this.c = _c;
        this.canvas = _c.canvas;
        this.viewStack = [];
        this.entities = [];
        //setup the state machine here, and the current state
        let options = new Options_1.default();
        options.currentState = new MenuState_1.default(this.c);
        options.currentState.name = "initial state";
        options.states.set(options.currentState.name, options.currentState);
        options.states.set("game state", new GameState_1.default(this.c));
        this.stateMachine = new StateMachine_1.default(options);
        this.entities.push(new PC_1.default(25, 25));
        //start rendering views
        this.render();
        //start updating existing entities
        window.setInterval(this.update(), Engine.UPDATE_INTERVAL);
        //console.info("E.c:end");
    }
    render() {
        //console.info("E.r:start");
        this.c.fillStyle = "#000000";
        this.c.fillRect(0, 0, this.c.canvas.width, this.c.canvas.height);
        //TODO: FIX THIS! It's supposed to be calling
        //TODO: VIEWSTACK instead of entities....
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].update(this.c);
        }
        window.requestAnimationFrame(this.render.bind(this));
        //console.info("E.r:done");
    }
    update() {
    }
}
Engine.UPDATE_INTERVAL = 1000 / 16;
exports.default = Engine;
//# sourceMappingURL=Engine.js.map