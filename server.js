
console.log(`show __dirname: ${__dirname}`)

const xPort = 30001
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
// app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || xPort)

const urlAddress = `http://localhost:${xPort}`

console.log(`visit here: ${urlAddress}`)