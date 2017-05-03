"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Thomas on 2017-04-16.
 */
var faded = "color:rgba(217,155,40,0.33);"; //jshint unused:false
var Engine_1 = require("./Engine");
var Main = (function () {
    function Main() {
        var canvas = document.getElementById('canvas');
        var c = canvas.getContext("2d");
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight;
        this.E = new Engine_1.default(c, canvas);
    }
    return Main;
}());
var M = new Main(); //jshint unused:false
//# sourceMappingURL=Main.js.map