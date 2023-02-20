const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const AppRouter = require('./routes/AppRouter')
const seed = require('./data/seed')

// handlebars
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {
  allowInsecurePrototypeAccess
} = require('@handlebars/allow-prototype-access')

const handlebars = expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// allow persistent user data on browser
app.use(cookieParser())
app.use(
  session({
    secret: 'secretkeyfornow',
    resave: false,
    saveUninitialized: true
  })
)

//allow express to read json request bodies
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', AppRouter)
app.use(cors())

app.listen(PORT, async () => {
  await seed()
  console.log(`Server Started On Port: ${PORT}`)
})
