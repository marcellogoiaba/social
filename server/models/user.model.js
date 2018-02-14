const mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
    email: {
        type: String, 
        lowercase: true,
        unique: true,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    first_name: {
        type: String, 
        required: true
    },
    last_name: { 
        type: String, 
        required: true
    }
});

userSchema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    } else {
      return next();
    }
  });
  

//compare password input to password saved in database
userSchema.methods.comparePassword = (psw, cb) => {
    bcrypt.compare(psw, this.password, (err, isMatch) => {
        if(err){
            return cb(err);
        }
        cb(null, isMatch)
    })
}

User = mongoose.model('User', userSchema);
module.exports = User;