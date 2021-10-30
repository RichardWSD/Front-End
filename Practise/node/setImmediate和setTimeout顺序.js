const fs = require('fs')

// 这个可以保证顺序
fs.readFile('./progress.js', () => {
    setTimeout(() => {
        console.log('timeout')
    })
    setImmediate(() => {
        console.log('immediate')
    })
})

// 这个无法保证顺序
setTimeout(() => {
  console.log('timeout')
})
setImmediate(() => {
  console.log('immediate')
})