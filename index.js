//Async Stuff..
// let name = 'ahmad';
// async function caller() {
//   setTimeout(() => console.log(name), 5000)
// }
// caller();



//CallbackFn here..

// program that craft item

const craft = (item, callback) => {
  res = null;
  console.log('processing')

  for (let i = 0; i < 10; i++) {
    let load = '.'

    setTimeout(() => {
      console.log(load)
    }, 2000)
    load += load
  }
  console.log(`making ${item}`)
  setTimeout(() => {
    result = `${item} has been crafted`;
    callback(result)
  }, 5000)
}

craft('pyrofluorotetrahydrate', result => {
  console.log(result);
})

// result = crafter('pickaxe')
// console.log(result)