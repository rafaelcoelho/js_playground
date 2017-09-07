const _ = require('lodash')

let cars = [
    {name: 'golf', year: '2016'},
    {name: 'jeta', year: '2016'},
    {name: 'cruze', year: '2016'},
    {name: 'fusca', year: '2016'},
    {name: 'ferrari', year: '2016'},
    {name: 'passat', year: '2017'}
]

let hasYear = _.curry((year, obj) => obj.year === year)

let getCars = cars.filter(hasYear('2017'))

console.log(getCars)