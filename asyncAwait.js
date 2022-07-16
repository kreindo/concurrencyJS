const fab = {
  isSus: true
}

const mats = {
  iron: 1000,
  reds: 1000
}

const employee = {
  person : 'ahmadsan',
  employeeId : null
}

const validatePersonnel = ({person, employeeId}) => {
  return new Promise((resolve, reject) => {
  setTimeout(()=>{
    if(person && employeeId){
      resolve(`Employee ${person} ${employeeId} is validated`)
    } else {
      reject(`Validation disregarded, Security protocols initiated, please evacuate the facility`)
    }
  }, 5000)
  })
}

const checkFab = ({ isSus }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSus) {
        resolve('Fabricator is ready')
      } else {
        reject('Fabricator is not ready')
      }
    }, 5500)
  })
}

const checkMats = ({ iron, reds }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`req met, iron ${iron} and reds ${reds}`)
    }, 3000)
  })
}

async function makeFan(fabState, matState, personnelState) {
  try {
    const value1 = await validatePersonnel(personnelState);
    console.log(value1)
    const value2 = await checkFab(fabState)
    console.log(value2)
    const value3 = await checkMats(matState)
    console.log(value3)
  } catch(rejectionMsg) {
    console.log(rejectionMsg)
  }

}

makeFan(fab, mats, employee);