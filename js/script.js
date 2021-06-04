// const myWeight = 85
//  const c = 3e8
// const E = myWeight * c ** 2
// console.log(E)
// console.log(Math.pow(2,4))
// const pi = 3.14
// function surgacaAreaCalculatour(Radius){
//     return E = pi * Radius ** 2
// }
// const surfMars = surgacaAreaCalculatour(3390)
// йййй
// const percentageCaclulator = (number, total) => {
//     return number * 100 / total
// }
// console.log(percentageCaclulator(40, 50))


// const firstNum = 10
// const secondNum = 5
// const sum = (z, g) => z + g
// console.log(sum(firstNum , secondNum))
// const firstFunction = (a, b) =>{
//     return (a + b) * (a + b)
// }
// console.log(firstFunction(2, 4))


// const f = (a, b) => a - b ;
// console.log(f(5, 3))

// //return
// const identity = value =>{
//     return value
//     const a = 3 + 5
// }
// const number = (one, two) => one * two ;
// console.log(number(1, 3))
// const parametr = (firstName, lastName, age) => {
//     return `Привет ${firstName} ${lastName} с возрастом ${age} лет`
// }
// console.log(parametr('Алексей', 'Акимов' , '17'))
// const genderPerson = gender => (gender ==='M') ? 'Ваш пол мужской' : (gender ==='F') ? 'Ваш пол женский' : 'Ваш пол не определен';
// console.log(genderPerson(','))
// const weak = day => (day === 1) ? 'Понедельник' : (day === 2) ? 'Вторник' : (day === 3) ? 'Среда' : (day === 4) ? 'Четверг' : (day === 5) ? 'Пятница' : (day === 6) ? 'Суббота' : 'Воскресенье' 
// console.log(weak(7))

// const people = 'akim maho uvaga renot gas mix'
// const reqV = / \d{0}/g;
// const result = people.match(reqV)
// console.log(result)
// const myFunction = str => {
//     let result = ''
//     let i = str.length - 1
//     while (i >= 0){
//         result += str[i]
//         i -= 1
//     }
//     return result
// }
// console.log(myFunction('hello,world!'))
// let nubmer = 38
// let strNumber = String.nubmer
// let i = 0
// let sum = 0
// const sumIndex = indexNumber => {
//     indexNumber = number.lenght -1
//     while (indexNumber !==0){
//         sum += nubmer[i]
//         i += 1
//         console.log(sum)
//     }
// }
// 1 ЗАДАЧА
// const degreeNumber = number =>{
//     if (number===1){
//         return true
//     }else if (number%3 === 0){
//         return true
//     } else{
//         return false
//     }
// }
// console.log(degreeNumber(81))
// // 2 ЗАДАЧА
// let sumOne = 0 
// let sumTwo = 0 
// const luckyTicket = number =>{  
//     let strNumber = String(number) 
//     let halfIndex = strNumber.length / 2 
//     for (let i = 0; i <= halfIndex - 1; i++){
//          sumOne += Number(strNumber[i]);
//     }
//     for (let i = halfIndex ;i <= strNumber.length -1 ; i++ ){
//         sumTwo += Number(strNumber[i])
//     }
//     if (sumTwo === sumOne){
//         return true
//     } else{
//         return false
//     }
// }
// console.log(luckyTicket(1131))
// // 3 задача
// let sum = 0
// const isPerfect = num =>{
//     for (let i = 1; i < num ; i++){
//         if (num % i === 0) {
//             sum += i
//         } else{
//             continue;
//         }
//     }
//     if (sum === num){
//         return true;
//     } else {
//         return false
//     }
// }
// console.log(isPerfect(496))
// // 4 задача
// const funcAccer = (m, n) =>{
//     if (m > 0 && n > 0){
//        return funcAccer((m - 1) , funcAccer(m , (n-1)))
//     }else if (m > 0 && n === 0){
//        return funcAccer((m - 1) , 1)
//     }else if (m === 0){
//         return n + 1
//     }
// }
// console.log(funcAccer(3,1))
// // 4 задача через тернарный оператор
// const funcAccer2 = (a, b) => (a > 0 && b > 0) ?  funcAccer2((a - 1), funcAccer2(a , (b - 1))) :
//  (a > 0 && b === 0) ? funcAccer2((a - 1), 1) : (a === 0) ? b + 1 : 0
//  console.log(funcAccer2(3,1))


// Лекция
//  let b = 10
//  const multiplayer = () => {
//      a = 5;
//      return a * b
//  }
//  console.log(multiplayer())
//  let str = ''
//  const dnaTorna = (dna) =>{
//     for (let i = 0; i < dna.length - 1; i++){
//          if(dna[i] === 'G'){
//             str += 'C'
//          } else if(dna[i] === 'C'){
//             str += 'G'
//          } else if(dna[i] === 'T'){
//             str += 'A'
//          }else if(dna[i] === 'A'){
//             str += 'U'
//          }else{
//              return null
//          }
//     }
//     return str
//  }
//  console.log(dnaTorna('ACGTGGTCTTAA'))
// const mainIndex = [1]
// const pushMassive = (massive) =>{
//     if (massive.length  < 2){
//         return massive;
//     }
//     let oneIndex = massive[0]
//     let twoIndex = massive[massive.length -1]
//     massive[0] = twoIndex
//     massive[massive.length -1] = oneIndex
//     return massive
// }
// console.log(pushMassive(mainIndex))
// const names = ['smith','john','vasya']
// const newArray = []
// const lastArray = (arr , prefix) =>{
//     for (let i = 0; i < arr.length ; i++){
//         newArray[i] = `${prefix} ${arr[i]}`
//     }
//     return newArray
// }
// console.log(lastArray(names, 'Mr'))

// const names2 = [2, 0, 17 ,3 ,9 ,1 ,22 ,7]
// let sum = 0
// const sumElement = (arr) =>{
//     if (arr.length === 0){
//         return arr
//     }
//     for(let i = 0;i < arr.length; i++){
//         if (arr[i] % 3 === 0){
//             sum += arr[i]
//         }else {
//             continue
//         }
//     }
//     return sum
// }
// console.log(sumElement(names2))

// 1 задача
const maxValue = (value) => {
    if (value.length === 0){
        return null
    }
    let number = value[0]
    for(i=1; i < value.length - 1; i++){
        if(number < value[i]){
            number = value[i];
        }else{
            continue;
        }
    };
    return number
}
console.log(maxValue([]))

//  2 задача
const sumValue = (value) =>{
    if(value.length === 0){
        return 0
    }
    let sum = 0
    for(i = 0;i < value.length - 1 ; i++){
        sum += value[i]
    }
    return sum
}
console.log(sumValue([])); 

//3 задача
const moneyWallet = [  
    'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
    ];  
const wallet = (moneyWallet, currency) =>{
    let sumMoney = 0
        for (let i = 0; i < moneyWallet.length ; i++ ){
            let moneyElement = moneyWallet[i].slice(0,currency.length)
            
            if (moneyElement === currency){
                sumMoney += Number(moneyWallet[i].slice(currency.length + 1))
            } else {
                continue
            }
        }
        return sumMoney
}
console.log(wallet(moneyWallet, 'eur'))

// 4 задача
const flatten = (massive) =>{
    if(massive === 0){
        return massive
    }
    let newMassive = []
    for (let i = 0; i < massive.length; i++){           
            newMassive = newMassive.concat(massive[i])
        }  
    return newMassive
    }
    
console.log(flatten([1, [[2], [3]], [9]]))
