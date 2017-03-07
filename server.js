let express = require('express')
let parser = require('body-parser')

let app = express()

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('listening on 3000')
})
