// const bcrypt = require('bcrypt');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy
// const session = require('express-session');
// const loginService = require('../models/loginServer')
// const db = require('../config/db');
// const { query } = require('express');

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     db.user.findById(id).then(function (user) {
//         done(null, user);
//     }).catch(function (err) {
//         console.log(err);
//     })
// });

// passport.use(new LocalStrategy(
//     function (passport) {
//         // Function to authenticate users
//         const authenticateUsers = function (email, password, done) {
//             // Get users by email
//             db.authuser.find({
//                 where: {
//                     au_user_email: req.email
//                 }
//             }).then(function (user) {
//                 bcrypt.compare(au_user_pass, req.password, function (err, result) {
//                     if (err) { return done(err); }
//                     if (!result) {
//                         return done(null, false, { message: 'Email hoặc mật khẩu không chính xác' });
//                     }
//                     else {
//                         req.session.loggedin = true;
//                         req.session.email = email;
//                         return done(null, user);
//                     }

//                 })
//             }).catch(function (err) {
//                 return done(err);
//             })
//         }
//     }
// ))
// passport.use(new LocalStrategy({ usernameField: 'email' },
//     // mặc định local strategy sử dụng username và password chúng ta có thể cấu hình lại
//     // passwordField:'password',
//     // passReqToCallback:true
//     // cho phép chúng ta gửi reqest lại hàm callback
//     function (req, email, password, done) {
//         // tìm một user với email
//         // chúng ta sẽ kiểm tra xem user có thể đăng nhập không
//         db.query('SELECT * FROM authuser WHERE au_user_email = ? AND au_user_pass = ?', [email, password], function (err, result, fields) {
//             if (err) { return done(err); }
//             // Nếu không có user thì in ra lỗi
//             if (!result) {
//                 return done(null, false, { message: 'Email hoặc mật khẩu không đúng' })
//             }
//             else {
//                 req.session.loggedin = true;
//                 req.session.email = email;
//                 return done(null, result);
//             }
//         });
//     }
// ));







// const LocalStrategy = require("passport-local").Strategy
// const bcrypt = require("bcrypt")


// function initialize(passport, getUserByEmail, getUserById){
//     // Function to authenticate users
//     const authenticateUsers = async (email, password, done) => {
//         // Get users by email
//         const user = getUserByEmail(email)
//         if (user == null){
//             return done(null, false, {message: "No user found with that email"})
//         }
//         try {
//             if(await bcrypt.compare(password, user.password)){
//                 return done(null, user)
//             } else{
//                 return done (null, false, {message: "Password Incorrect"})
//             }
//         } catch (e) {
//             console.log(e);
//             return done(e)
//         }
//     }

//     passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUsers))
//     passport.serializeUser((user, done) => done(null, user.id))
//     passport.deserializeUser((id, done) => {
//         return done(null, getUserById(id))
//     })
// }

// module.exports = initialize

// let initPassportLocal = () => {
//     passport.use(new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true
//     },
//         async (req, email, password, done) => {
//             try {
//                 await loginService.findUserByEmail(email).then(async (user) => {
//                     if (!user) {
//                         return done(null, false, req.flash("errors", `This user email "${email}" doesn't exist`));
//                     }
//                     if (user) {
//                         let match = await loginService.comparePassword(password, user);
//                         if (match === true) {
//                             return done(null, user, null)
//                         } else {
//                             return done(null, false, req.flash("errors", match)
//                             )
//                         }
//                     }
//                 });
//             } catch (err) {
//                 console.log(err);
//                 return done(null, false, { message: err });
//             }
//         }));

// };

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     loginService.findUserById(id).then((user) => {
//         return done(null, user);
//     }).catch(error => {
//         return done(error, null)
//     });
// });

// module.exports = initPassportLocal;