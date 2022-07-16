const fab = {
  isFunctional: true,
  reqMaint: false
}

const stock = {
  skin: 10000,
  innards: 9999
}


checkFabr = ({ isFunctional, reqMaint }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFunctional && !reqMaint) {
        resolve('Fabricator ready')
      } else {
        reject('requirements not met')
      }
    }, 5000)
  })
}

const installWires = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Wire installed')

    }, 5000)
  })
}

const downloadAI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('AI downloaded')
    }, 4000)
  })
}

const installAI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('AI Installed')

    }, 5000)
  })
}
const fabInit = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('creature made')
    }, 20000)
  })
}

const checkStock = ({ skin, innards }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (skin >= 100 && innards >= 100) {
        resolve('ingredients met')
      } else {
        reject('req not met')
      }
    }, 10000)
  })
}

function makeCreature(fabState, para) {
  checkFabr(fabState)
    .then((value) => {
      console.log(value)
      return checkStock(stock);
    })
    .then((value) => {
      console.log(value)
      const promises = [installWires(), downloadAI(), installAI()]

      return Promise.all(promises)
    })
    .then((value) => {
      console.log(value)
      return fabInit();
    })
    .then((value) => {
      console.log(value)
    })
    .catch(rejectedReason => {
      console.log(rejectedReason)
    })
}

makeCreature(fab)