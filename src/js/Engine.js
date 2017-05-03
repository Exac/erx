"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PC_1 = require("./PC");
var Engine = (function () {
    function Engine(_c, _canvas) {
        //console.info("E.c:start");
        this.c = _c;
        this.canvas = _canvas;
        this.viewStack = [];
        this.entities = [new PC_1.default(100, 200)];
        this.render();
        window.setInterval(this.update(), Engine.UPDATE_INTERVAL);
        //console.info("E.c:end");
    }
    Engine.prototype.render = function () {
        //console.info("E.r:start");
        this.c.fillStyle = "#000000";
        this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].update(this.c);
        }
        window.requestAnimationFrame(this.render.bind(this));
        //console.info("E.r:done");
    };
    Engine.prototype.update = function () {
    };
    return Engine;
}());
Engine.UPDATE_INTERVAL = 1000 / 16;
exports.default = Engine;
//# sourceMappingURL=Engine.js.map