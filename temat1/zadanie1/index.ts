const personName = 'John';
document.body.innerHTML = `<h1>Hello ${personName}</h1>`

class Pearson {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string,lastname: string,age: number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;

    }

    Show(){
        document.body.innerHTML +=`Witaj ${this.firstname} i ${this.lastname} mam ${this.age} lat`
    }

}
let p = new Pearson("John","Blake",11)
p.Show()