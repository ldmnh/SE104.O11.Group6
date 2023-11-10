// const db = require('../config/db')
// const bcrypt = require('bcrypt');

// // const User = function (user) {
// //     // this.name = user.name;
// //     this.password = user.password;
// //     this.email = user.email;
// // };

// // User.findByEmail = (email, result) => {
// //     db.query(`SELECT * from authuser WHERE au_user_email = '${email}'`, (err, res) => {
// //         if (err) {
// //             result(err, null);
// //             return;
// //         }
// //         if (res.length) {
// //             result(null, res[0])
// //             return;
// //         }
// //         result(null, null);
// //     });
// // }
// // module.exports = User;

// let handleLogin = (email, password) => {
//     return new Promise(async (resolve, reject) => {
//         //check email is exist or not
//         let user = await findUserByEmail(email);
//         if (user) {
//             //compare password
//             await bcrypt.compare(password, user.password).then((isMatch) => {
//                 if (isMatch) {
//                     resolve(true);
//                 } else {
//                     reject(`The password that you've entered is incorrect`);
//                 }
//             });
//         } else {
//             reject(`This user email "${email}" doesn't exist`);
//         }
//     });
// };


// let findUserByEmail = (email) => {
//     return new Promise((resolve, reject) => {
//         try {
//             db.query(
//                 ' SELECT * FROM `authuser` WHERE `au_user_email` = ?  ', email,
//                 function(err, rows) {
//                     if (err) {
//                         reject(err)
//                     }
//                     let user = rows[0];
//                     resolve(user);
//                 }
//             );
//         } catch (err) {
//             reject(err);
//         }
//     });
// };

// let findUserById = (id) => {
//     return new Promise((resolve, reject) => {
//         try {
//             DBConnection.query(
//                 ' SELECT * FROM `authuser` WHERE `au_user_id` = ?  ', id,
//                 function(err, rows) {
//                     if (err) {
//                         reject(err)
//                     }
//                     let user = rows[0];
//                     resolve(user);
//                 }
//             );
//         } catch (err) {
//             reject(err);
//         }
//     });
// };

// let comparePassword = (password, userObject) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             await bcrypt.compare(password, userObject.password).then((isMatch) => {
//                 if (isMatch) {
//                     resolve(true);
//                 } else {
//                     resolve(`The password that you've entered is incorrect`);
//                 }
//             });
//         } catch (e) {
//             reject(e);
//         }
//     });
// };

// module.exports = {
//     handleLogin: handleLogin,
//     findUserByEmail: findUserByEmail,
//     findUserById: findUserById,
//     comparePassword: comparePassword
// };


