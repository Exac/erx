/**
 * Created by Thomas on 2017-04-16.
 */
const faded = "color:rgba(217,155,40,0.33);";//jshint unused:false

import Engine from './Engine';

class Main {
    public E: Engine;

    constructor () {
        let canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        let c : CanvasRenderingContext2D = canvas.getContext("2d");
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight;

        this.E = new Engine(c, canvas);
    }
}

let M:Main = new Main();//jshint unused:false
