interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    name: string,
    surname: string,
    age: number,
    role: string,
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log(`${person.name} ${person.surname}, ${person.age}, ${person.role}`)
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
        let filterp = persons.filter(el => el.role === this.criteria) // to vyba nie jest dobrze
        return filterp;
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    }

    //AD.1
    console.log('AD.1')

   users.forEach(user=>{
      logPerson(user);
   })
   admins.forEach(admin=>{
    logPerson(admin);
 })

    //AD.2
    console.log('AD.2')
     const persons = [...users,...admins]
     persons.forEach(person =>{
         logPerson(person)
     })
     console.log('test')
     persons.forEach(logPerson)

     //AD.3
    console.log('AD.3')

    const personsad3 = persons.filter(person => person.age > 25)
    
    personsad3.forEach(person =>{
        logPerson(person)})

    //AD.4
    console.log('AD.4')
    const personsad4 = filterPersons(persons, {name: 'Adam'});
    console.log(personsad4)
   


    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    document.body.innerHTML = 'polaczone'