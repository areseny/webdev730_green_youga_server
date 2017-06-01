const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    role: req.body.role.trim(),
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
    dob: req.body.dob,
    line1: req.body.line1.trim(),
    line2: req.body.line2.trim(),
    suburb: req.body.suburb.trim(),
    state: req.body.state.trim(),
    pcode: req.body.pcode.trim(),
    description: req.body.description.trim(),
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
