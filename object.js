const student = {
    name: 'Sakib Khan',
    id: 121,
    address: 'Movie Cinema',
    isSingle: true,
    friends: ['Apu', 'Razz', 'Salman', 'Aamir'],
    movies: [{ name: 'No-1 Sakib Khan', year: 2015 }, { name: 'King Khan', year: 2018 }],
    act: function () {
        console.log('Acting like Sakib Khan');
    },
    car: {
        brand: 'Tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon mask',
            country: 'USA',

        }
    }
}
console.log(student.act);
student.act();