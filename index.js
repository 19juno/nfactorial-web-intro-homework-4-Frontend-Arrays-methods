console.log('Salem alem')
// 1. Следующая функция возвращает `true`, если параметр `age` больше `18`.
//В ином случае она задаёт вопрос `confirm` и возвращает его результат.

function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
}

console.log(checkAge(15));

// 2. Напишите функцию pow(x,n), которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n) {
    return(x ** n);
}

let ans = pow(1, 100);
console.log(ans);

// 3.Замените код Function Expression стрелочной функцией:


const ask = (question, yes, no) => {confirm(question) ? yes() : no()};
console.log(ask("Вы согласны?", () => { alert("Вы согласились."); }, () => { alert("Вы отменили выполнение."); } ));

// 4. Сортировать в порядке по убыванию 

let myArr = [5, 2, 1, -10, 8];

myArr.sort((a, b) => b-a)

alert( myArr ); // 8, 5, 2, 1, -10

// 5. Трансформировать в массив имён
// У вас есть массив объектов `user`, и в каждом из них есть `user.name`. 
// Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map(element => element.name);
// users.forEach(item => {names.push(item["name"])}); // или можно так
alert( names ); // Вася, Петя, Маша

// 6. У вас есть массив объектов `user`, и у каждого из объектов есть `name`, `surname` и `id`.
//Напишите код, который создаст ещё один массив объектов с параметрами `id` и `fullName`, 
// где `fullName` – состоит из `name` и `surname`.

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = [];

usersMapped = users1.map(element => ({fullName: `${element.name} ${element.surname}`, id: `${element.id}`}));


/*usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]*/
console.log(usersMapped);

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


// 7. Напишите функцию `getAverageAge(users)`, которая принимает массив объектов со свойством `age`и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: `(age1 + age2 + ... + ageN) / N`.

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr = [ vasya2, petya2, masha2 ];

function getAverageAge(arr) {
    let sum = 0;
    arr.forEach(item => (item['age']) ? (sum += item['age']) : alert("Не существует данных"));
    return(sum/arr.length);
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28