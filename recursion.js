const _ = require('lodash')

let cars = [
    {name: 'cars', category: null},
    {name: 'utilities', category: 'cars'},
    {name: 'heavy', category: 'cars'},
    {name: 'golf', year: '2016', category: 'heavy'},
    {name: 'golf GTI ', year: '2016', category: 'golf'},
    {name: 'ferrari', year: '2016', category: 'heavy'},
    {name: 'passat', year: '2017', category: 'utilities'}
]

let makeTree = (cars, cat) => {
    let node = {}
    cars
    .filter(x => x.category === cat)
    .forEach(c => { 
        node[c.name] = makeTree(cars, c.name)

        if (c.year != undefined) {
            node[c.name].year = c.year
        }
    })

    return node
}

let hasYear = _.curry((year, obj) => obj.year === year)

console.log('2016 Cars are \n'
,cars.filter(hasYear('2016'))
, '\n');

console.log('Hierarchy of Cars \n'
    , JSON.stringify(makeTree(cars, null)
    , null
    , 2)
)
