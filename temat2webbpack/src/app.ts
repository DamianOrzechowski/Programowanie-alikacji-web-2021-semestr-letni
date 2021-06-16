import Animal from './Animal';
import Horse from './Horse';
import Snake from './Snake';

import './style/styles.scss';

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
console.log('cos')

enum Gender{

}
class Pearson {
    name:string
    nazwisko:string
    age:number
    constructor(name:string,nazwisko:string,age:number){
        this.name = name
        this.nazwisko = nazwisko
        this.age = age
        


        

    }
    wypisanie():string{
        
        return this.name + " " + this.nazwisko
    }
    dodajjedenrok():any{
        
        
        return this.age++


    }
}
const osoba = new Pearson('damian','orzechowsi',25);
osoba.wypisanie




  