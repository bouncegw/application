// function myFanction(begin, end) {
//     if (end >= begin){
//         return end + myFanction(begin, end-1)
//     }else {
//         return 0
//     }
// }
// console.log(myFanction(4, 10))
// const myFanction2 = (mybegin, myend) =>{
//     if (myend >= mybegin){
//         return myend + myFanction2(mybegin, myend -1)
//     } else{
//         return 0
//     }
// }
// console.log(myFanction2(1, 4))
// const myFanction3 =(mybegin2, myend2) => (mybegin2 <= myend2) ? myend2 + myFanction3(mybegin2, myend2 - 1) : 0
// console.log(myFanction3(1, 4))

//Type error
// let typeError
// console.log(typeError.break)

//Referens error
// const referensError =() => {
//     let error1
// }
// console.log(error1)

// Logic Error
// const logicError = num =>{
//     return num + 100 / 20 - 10
// }
// console.log(logicError(10))
// Если бы мы сделали выражение функции (num + 100) / (20 - 10) получился бы дугой результат

// Syntax error
// const syntaxError = (a, b) => (a > b) ? true : false
// console.log(syntaxError('ava' 1,1))
// const factorial = (n) => {
//     if (n === 0) {
//         return 1;
//     }
//     // counter - отслеживает движение от n до 1. acc текущий результат умножения от n до 1.
//     const iter = (counter, acc) => {
//       if (counter === 1) {
//         return acc; // в этот момент acc будет равен конечному ответу
//       }  
//       return iter (counter - 1, counter * acc);
//     };
//     return iter(n, 1);
// };
// console.log(factorial(3))