const passport = require('passport');

module.exports = {
  login: (req, res) => {
    passport.authenticate('local', (err, user, info) => {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user
        });
      }
      req.logIn(user, (err) => {
        if (err) {
          res.send(err);
        }
        return res.send({
          message: info.message,
          user
        });
      });
    })(req, res);
  },
  logout: (req, res) => {
    req.logout();
    return res.send({
      message: 'User was logged out!'
    });
  }
};

