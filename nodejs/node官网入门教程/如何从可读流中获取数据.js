const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

// 使用可写流
// readableStream.pipe(writableStream)

// 使用 readable 事件直接地消费可读流
readableStream.on('readable', () => {
  console.log(readableStream.read().toString())
})

readableStream.push('hi!')
readableStream.push('ho!')