const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const postResource = require('./controller')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// home
app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'This is Nodejs and express App'
    })
})

app.get('/posts', postResource.getPosts)
app.get('/posts/:id', postResource.getPostById)

// listen to port
const PORT = 8090;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})


