// import * as fs from 'fs';

const fs = require('fs')
var out = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((cust, line) => {
    cust[line[0]] = cust[line[0]] || []
    cust[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return cust
  }, {})

console.log('Output: ', JSON.stringify(out, null, 2))
