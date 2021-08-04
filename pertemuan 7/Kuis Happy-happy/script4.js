const vegzas = [
    {
        name: "Charly",
        age: 22,
        coder: true,
        gender: "m",
    },
    {
        name: "Steven",
        age: 35,
        coder: true,
        gender: "m",
    },
    {
        name: "Law",
        age: 21,
        coder: true,
        gender: "m",
    },
    {
        name: "Rosey",
        age: 42,
        coder: false,
        gender: "f",
    },
    {
        name: "Steph",
        age: 18,
        coder: true,
        gender: "f",
    },
    {
        name: "Jon",
        age: 47,
        coder: false,
        gender: "m",
    },
    ];

let nameFilter = vegzas.filter(vegzas => vegzas.gender === 'm' && vegzas.age > 30);
console.log(nameFilter);