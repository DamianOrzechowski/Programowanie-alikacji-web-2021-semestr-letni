var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log(person.name + " " + person.surname + ", " + person.age + ", " + person.role);
}
function filterPersons(persons, criteria) {
    var _this = this;
    var filterp = persons.filter(function (el) { return el.role === _this.criteria; }); // to vyba nie jest dobrze
    return filterp;
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
}
//AD.1
console.log('AD.1');
users.forEach(function (user) {
    logPerson(user);
});
admins.forEach(function (admin) {
    logPerson(admin);
});
//AD.2
console.log('AD.2');
var persons = users.concat(admins);
persons.forEach(function (person) {
    logPerson(person);
});
console.log('test');
persons.forEach(logPerson);
//AD.3
console.log('AD.3');
var personsad3 = persons.filter(function (person) { return person.age > 25; });
personsad3.forEach(function (person) {
    logPerson(person);
});
//AD.4
console.log('AD.4');
var personsad4 = filterPersons(persons, { name: 'Adam' });
console.log(personsad4);
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
document.body.innerHTML = 'polaczone';
