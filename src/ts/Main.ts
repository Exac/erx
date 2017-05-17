import MenuState from "./states/MenuState";
/**
 * Created by Thomas on 2017-04-16.
 */
const faded = "color:rgba(217,155,40,0.33);";//jshint unused:false

import Engine from './Engine';

class Main {
    E: Engine;

    constructor () {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        let c: CanvasRenderingContext2D = canvas.getContext("2d");

        this.E = new Engine(c);
        this.setCanvasSize();

        //keep canvas the size of the window
        Main.addEvent(window, "resize", this.setCanvasSize);
    }

    public setCanvasSize = () => {
        this.E.c.canvas.width = document.body.clientWidth;
        this.E.c.canvas.height = window.innerHeight;
    };

    private static addEvent (obj: any, type: string, callback: any): void {
        if (obj == null || typeof(obj) == 'undefined') return;
        if (obj.addEventListener) {
            obj.addEventListener(type, callback, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + type, callback);
        } else {
            obj["on" + type] = callback;
        }
    }
}

let M: Main = new Main();//jshint unused:false

// class Rabbit {
//     constructor (public name: string) {}
// }
// let rabbits = Array<Rabbit>();
// rabbits.push(new Rabbit("Fred"), new Rabbit("Opal"), new Rabbit("Otto"));
// let myRabbitName: string = "Opal";
// //let myRabbit:Rabbit = rabbits[myRabbitName];//TS 7015

// class Cat {
//     constructor (public name: string) {}
// }
// class Cats {
//     cats: { [index: string]: Cat } = {};
// }
// let cats: Cats = new Cats();
// cats.cats["Fred"] = new Cat("Fred");
// cats.cats["Opal"] = new Cat("Opal");
// cats.cats["Otto"] = new Cat("Otto");
// let myCatName: string = "Opal";
// let myCat: Cat = cats.cats[myCatName];

// class Dog {
//     constructor (public name: string) {}
// }
// let dogs: { [index: string]: Dog } = {};
// dogs["Fred"] = new Dog("Fred");
// dogs["Opal"] = new Dog("Opal");
// dogs["Otto"] = new Dog("Otto");
// let myDogName:string = "Opal";
// let myDog:Dog = dogs[myDogName];
// console.log(myDog);
// console.log(dogs["Opal"]);

// class Rat {
//     constructor( public name: string) {}
// }
// let rats: Map<string, Rat> = new Map<string, Rat>();
// rats.set("Fred", new Rat("Fred"));
// rats.set("Opal", new Rat("Opal"));
// rats.set("Otto", new Rat("Otto"));
// let myRat:Rat = rats.get("Opal");
// console.log(myRat, rats.size);
// for(let key of rats.keys()) {
//     console.log(key);
// }
// for(let value of rats.values()) {
//     console.log(value);
// }
// for(let [key, value] of rats.entries()) {
//     console.log(key, value);
// }