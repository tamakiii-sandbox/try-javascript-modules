const name = './User'
// const name = './Programmer'

import(`${name}.js`)
  .then(Module => {
    const u = new Module.default('John')
    console.log(u.hello())
  })
  .catch(err => {
    console.log(err.message)
  })
