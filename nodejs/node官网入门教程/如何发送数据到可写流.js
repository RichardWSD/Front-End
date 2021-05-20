const Stream = require('stream')
const writableStream = new Stream.Writable()
writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}
writableStream.write('hey!\n')
writableStream.write('hey!\n')