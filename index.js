const zlib = require('zlib')
const readline = require('readline')
const fs = require('fs')

const write = (streams, path, line) => {
  if (!streams[path]) {
    streams[path] = fs.createWriteStream(path)
    console.log(`created ${path}.`)
  }
  streams[path].write(line + '\n')
}

if (process.argv.length !== 3) {
  console.log('usage: zcat mokuroku.csv.gz | node index.js 7')
} else {
  let streams = {}
  const Z = parseInt(process.argv[2])
  const rl = readline.createInterface({
    input: process.stdin
  })
  rl.on('line', line => {
    const [z, x, y] = line.split('/').map(v => parseInt(v))
    const X = x >> (z - Z)
    const Y = y >> (z - Z)
    const path = `${Z}-${X}-${Y}.csv`
    write(streams, path, line)
  })
  rl.on('close', () => {
    for (let path in streams) {
      streams[path].close()
      console.log(`finalized ${path}.`)
    }
  })
}
