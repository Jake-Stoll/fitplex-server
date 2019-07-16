const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {
    email: { type: 'string', required: true, unique: true, isEmail: true, },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    password: { type: 'string', required: true },
    type: { type: 'string', required: true },
    // Attributes for Studio Account
    studioName: { type: 'string' },
    studioAddress: { type: 'string' },
    studioCity: { type: 'string' },
    studioState: { type: 'string' },
    studioZipcode: { type: 'number', max: 99999 },
    // Add a reference to Classes
    classes: {
      collection: 'class',
      via: 'studio'
    }
  },
  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return cb(err);
      }
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
          return cb(err);
        }
        user.password = hash;
        return cb();
      });
    });
  }
};
