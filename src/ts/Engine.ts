/**
 * Created by Thomas on 2017-04-25.
 */
import Entity from './Entity';
import PC from './PC';

export default class Engine {
    static UPDATE_INTERVAL = 1000/16;

    //stateMachine:object;
    viewStack:  any[];
    entities:   Entity[];
    c:          CanvasRenderingContext2D;
    canvas:     HTMLCanvasElement;

    constructor (_c:CanvasRenderingContext2D, _canvas:HTMLCanvasElement) {
        //console.info("E.c:start");
        this.c = _c;
        this.canvas = _canvas;
        this.viewStack = [];
        this.entities = [new PC(100, 200)];
        this.render();
        window.setInterval(this.update(), Engine.UPDATE_INTERVAL);
        //console.info("E.c:end");
    }

    public render ():void {
        //console.info("E.r:start");
        this.c.fillStyle = "#000000";
        this.c.fillRect(0,0,this.canvas.width, this.canvas.height);

        for(let i=0; i<this.entities.length; i++) {
            this.entities[i].update(this.c);
        }

        window.requestAnimationFrame(this.render.bind(this));
        //console.info("E.r:done");
    }

    update ():void {

    }

}