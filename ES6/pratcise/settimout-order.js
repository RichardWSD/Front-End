// chrome在以前有最少1ms的限制，但是现在取消了 https://chromestatus.com/feature/4889002157015040

// node中2 1 0 或者 1 0 2
// chrome中很稳定的 0 1 2
/* setTimeout(() => {
	console.log(2)
}, 2)

setTimeout(() => {
	console.log(1)
}, 1)

setTimeout(() => {
	console.log(0)
}, 0) */

// nextTick测试
/* console.log(1)

setTimeout(() => {
    console.log(2)
    new Promise(resolve => {
        console.log(4)
        resolve()
    }).then(() => {
        console.log(5)
    })
    process.nextTick(() => {
        console.log(3)
    })
})

new Promise(resolve => {
    console.log(7)
    resolve()
}).then(() => {
    console.log(8)
})

process.nextTick(() => {
    console.log(6)
}) */

// setTimeout 和 setImmediate 确实输出顺序无法保证
/* setTimeout(() => {
	console.log(0)	
})

setImmediate(() => {
	console.log(1)
}) */

// 利用 node 事件循环机制保证输出顺序
const fs = require('fs')

fs.readFile('./settimout-order.js', () => {
    setTimeout(() => {
        console.log('timeout')
    })
    setImmediate(() => {
        console.log('immediate')
    })
})