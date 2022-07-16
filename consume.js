const ingredients = {
  coffee : 9000,
  water : 900
}


const coffeeMaker = ({coffee, water}) => {
  return new Promise((resolve, reject) => {
    if(coffee >= 200 && water >= 1000) {
      resolve('sufficient ingredients, coffee has been made')
    } else {
      reject('insufficient ingredients, recipe is rejected, returning an error')
    }
  })
}


const handleSuccess = resolvedVal => {
  console.log(resolvedVal)
}

const handleFailure = rejectedVal => {
  console.log(rejectedVal)
}


// coffeeMaker(ingredients).then(handleSuccess).catch(handleFailure)



// coffeeMaker(ingredients)
// console.log(coffeeMaker)

// const stock = {
//     coffeeBeans: 20,
//     water: 10,
// }
 
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//             resolve("Stok cukup. Bisa membuat kopi");
//         } else {
//             reject("Stok tidak cukup");
//         }
//     });
// };
 
// const handleSuccess = resolvedValue => {
//     console.log(resolvedValue);
// }
 
// const handleFailure = rejectionReason => {
//     console.log(rejectionReason);
// }
 
coffeeMaker(ingredients).then(handleSuccess).catch(handleFailure);