const { User } = require('../models/User')
const bcrypt = require('bcrypt')

const getSignIn = async (req, res) => {
  try {
    let user = 'Guest'
    if (req.session.username) {
      user = req.session.username
    }
    res.render('signin', { user })
  } catch (error) {
    throw error
  }
}

const signIn = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    })
    if (user) {
      bcrypt.compare(req.body.password, user.password, async (err, result) => {
        if (result) {
          req.session.username = user.username
          let thisUser = req.session.username
          res.render('homepage', { thisUser })
        } else {
          let user = 'wrong password'
          res.render('signin', { user })
        }
      })
    } else {
      let user = 'no user found'
      res.render('signin', { user })
    }
  } catch (error) {
    throw error
  }
}

const signOut = async (req, res) => {
  try {
    req.session.destroy((err) => {
      let user = 'Guest'
      res.render('signin', { user })
    })
  } catch (error) {
    throw error
  }
}

const getUserForm = (req, res) => {
  try {
    res.render('signup')
  } catch (error) {
    throw error
  }
}

const createUserForm = async (req, res) => {
  try {
    if (req.session.username) {
      const username = req.body.username
      const password = req.body.password
      const confirm = req.body.confirm

      const duplicateUser = await User.findOne({
        where: { username: username }
      })

      if (duplicateUser || password !== confirm) {
        let alert = 'Create was unsuccessful'
        res.render('signup', { alert })
      } else {
        bcrypt.hash(password, 10, async (err, hash) => {
          await User.create({
            username: username,
            password: hash
          })
        })
        let alert = 'Successfully created'
        res.render('signup', { alert })
      }
    } else {
      res.redirect('signin')
    }
  } catch (error) {
    throw error
  }
}

const getHomePage = (req, res) => {
  let thisUser = req.session.username
  res.render('homepage', { thisUser })
}

const redirectSignin = (req, res) => {
  res.render('signin')
}

// Controller for server-side developing

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.send('Successful new user created')
  } catch (error) {
    throw error
  }
}
module.exports = {
  createUser,
  getSignIn,
  signIn,
  signOut,
  getUserForm,
  createUserForm,
  redirectSignin,
  getHomePage
}
