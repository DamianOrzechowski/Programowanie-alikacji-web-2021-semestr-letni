var personName = 'John';
document.body.innerHTML = "<h1>Hello " + personName + "</h1>";
var Pearson = (function () {
    function Pearson(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Pearson.prototype.Show = function () {
        document.body.innerHTML += "Witaj " + this.firstname + " i " + this.lastname + " mam " + this.age + " lat";
    };
    return Pearson;
})();
var p = new Pearson("John", "Blake", 11);
p.Show();
