console.log('hi :)');
console.log("its so cloudly, I'd rather be in bed");

let x = 'ello'
// console.log(typeof(x))
// console.log(typeof(y))

// console.log('40' + 2)
// console.log('40' - 2)

// console.log('2' == 2)
// console.log('' === 0)

const letters = [
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
    ['a', 'b', 'c'],
]

function peopleArrayPrints(greeting) {
    const people = [
        {'name':'sarah', 'age': 25, 'height': 72},
        {'name':'amit', 'age': 35, 'height': 55},
        {'name':'mara', 'age': 29, 'height': 72},
        {'name':'max', 'age': 88, 'height': 67},
    ]
    
    for (let i = 0; i < people.length; i++) {
        console.log(people[i].name);
    }
    
    for (let person of people) {
        console.log(person);
        const keys = Object.keys(person)
        for (let theKey of keys) {
            console.log(person[theKey]);
        }
    }
    
    console.log(people.name);
    console.log(people[2].age)
    console.log(greeting);
    return 4;
}
console.log(peopleArrayPrints('hi'))

// ages['max'] = 88
// console.log(ages.mara.likes)
// console.log(ages.mara[1])
// console.log(ages)

// console.log(letters[4])
// letters[5] = 'f'
// console.log(letters)

// console.log([] + [])
// console.log([] + {})
// console.log({} + [])
// console.log({} + {})
