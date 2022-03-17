var json = require('./competences-1.json');
const filter = 'T-AIA-901'
let finalResult = []
json.data.map((item) => {
    if (item.nest_columns[3] === filter) {
        finalResult.push(item.nest_columns[2])
    }
})
console.log(finalResult)