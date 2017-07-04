/**
 * Created by Raminta on 7/4/2017.
 */
const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')



app.get('/login', function (req, res) {
    res.render('login')
})

app.get('/accounts', function (req, res) {
    res.render('accounts')
})

app.get('/account', function (req, res) {
    res.render('account')
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})