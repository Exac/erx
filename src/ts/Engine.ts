///<reference path="Options.ts"/>
/**
 * Created by Thomas on 2017-04-25.
 */

import State from "./State";
import MenuState from "./states/MenuState";
import GameState from "./states/GameState";
import StateMachine from './StateMachine';
import Entity from './Entity';
import PC from './entities/PC';
import SMOptions from "./Options";
import View from "./View";
import MenuView from "./views/MenuView";
import GameView from "./views/GameView";

export default class Engine {
    static UPDATE_INTERVAL = 1000 / 16;

    stateMachine: StateMachine;
    viewStack: any[];
    entities: Entity[];
    c: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    constructor(_c: CanvasRenderingContext2D) {
        //console.info("E.c:start");
        this.c = _c;
        this.canvas = _c.canvas;
        this.viewStack = [];
        this.entities = [];

        //setup the state machine here, and the current state
        let options = new SMOptions();
        options.currentState = new MenuState(this.c);
        options.currentState.name = "initial state";
        options.states.set(options.currentState.name, options.currentState);
        options.states.set("game state", new GameState(this.c));
        this.stateMachine = new StateMachine(options);

        //TODO: setup viewStack
        this.viewStack.push(new MenuView());
        this.viewStack.push(new GameView());

        //setup entities
        this.entities.push(new PC(25, 25));

        //start rendering views
        this.render();

        //start updating existing entities
        window.setInterval(this.update(), Engine.UPDATE_INTERVAL);
        //console.info("E.c:end");
    }

    public render() {
        //console.info("E.r:start");
        this.c.fillStyle = "#000000";
        this.c.fillRect(0, 0, this.c.canvas.width, this.c.canvas.height);

        //TODO: FIX THIS! It's supposed to be calling
        //TODO: VIEWSTACK instead of entities....
        for (let i = 0; i < this.viewStack.length; i++) {
            (this.viewStack[i]).render(this.c);
        }

        window.requestAnimationFrame(this.render.bind(this));
        //console.info("E.r:done");
    }

    update(): void {
        //entities
        for (let i = 0; i < this.entities.length; i++) {
            (this.entities[i]).update(); //delegte update logic to each entity
        }
    }

}