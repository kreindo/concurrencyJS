const executor = (resolve, reject) => {
  const isReady = false;
  if (isReady) {
    resolve('your order has arrived')
  } else {
    reject("your order's gone missing")
  }
}


const packageChecker = () => {
  return new Promise(executor);
}

const res = packageChecker()

console.log(res)


fetch('https://jsonplaceholder.typicode.com/posts').then((dat)=>{
  res = JSON.stringify(dat)
}).then(()=>{
  console.log(res)
})