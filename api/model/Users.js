const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AunthenticateUser");

class Users {
    fetchUsers(req, res) {
        const query = `
                SELECT 
                userID, firstName, lastName, age, gender, emailAdd, userRole, userURL, userPass 
                FROM Users;
            `;
        db.query(query, (err, results) => {
          if (!err) {
            res.json({
              status: res.statusCode,
              results,
            });
          } else {
            res.json({
              err,
              msg: "an error has occured",
            });
          }
        });
      }
      fetchUser(req, res) {
        const query = `
        SELECT 
        userID, firstName, lastName, age, gender, emailAdd, userRole, userURL, userPass 
        FROM Users 
        WHERE userID = ${req.params.id}
            `;
        db.query(query, (err, result) => {
          if (!err) {
            res.json({
              status: res.statusCode,
              result,
            });
          } else {
            res.json({
              err,
              msg: "an error has occured",
            });
          }
        });
      }
      async register(req, res) {
        const data = req.body;
        data.userPass = await hash(data.userPass, 10);
        const user = {
          emailAdd: data.emailAdd,
          userPass: data.userPass,
        };
    
        const query = `
                INSERT INTO Users 
                SET ?
            `;
        db.query(query, [req.body], (err) => {
          if (!err) {
            let token = createToken(user);
            res.json({
              status: res.statusCode,
              token,
              msg: "user registered successfully",
            });
          } else {
            res.json({
              err,
              msg: "an error has occured",
            });
          }
        });
      }
      async login(req, res) {
        const { emailAdd, userPass } = req.body;
        const query = `
                SELECT 
                userID, firstName, lastName, age, gender, emailAdd, userRole, userURL, userPass
                FROM Users
                WHERE emailAdd = '${emailAdd}'
            `;
        db.query(query, [emailAdd], async (err, result) => {
          if (err) {
            res.json({
              status: res.statusCode,
              msg: "An error has occured",
              err
            });
          }
          if (!result?.length) {
            res.json({
              status: res.statusCode,
              msg: "You are providing the wrong email or password",
            });
          } else {
            await compare(userPass, result[0].userPass, (cErr, cResult) => {
              if (cErr) throw cErr;
              const token = createToken({
                emailAdd,
                userPass,
              });
              if (cResult) {
                res.json({
                  msg: "Logged in successfully",
                  token,
                  cResult: result,
                });
              } else {
                res.json({
                  status: res.statusCode,
                  msg: "Invalid Login details",
                });
              }
            });
          }
        });
      }
      updateUser(req, res) {
        const data = req.body;
        if (data.userPass) {
          data.userPass = hashSync(data.userPass, 10)
        }

        const query = `
                UPDATE Users 
                SET ? 
                WHERE userID = ${req.params.id}
            `;
        db.query(query, [data], (err) => {
          if (!err) {
            res.json({
              status: res.statusCode,
              msg: "User profile updated successfully",
            });
          } else {
            res.json({
              err,
              msg: "An error has occured",
            });
          }
        });
      }
      removeUser(req, res) {
        const query = `
                DELETE FROM Users 
                WHERE userID = ${req.params.id}
            `;
        db.query(query, (err) => {
          if (!err) {
            res.json({
              status: res.statusCode,
              msg: "User record deleted successfully",
            });
          } else {
            res.json({
              status: res.statusCode,
              err,
              msg: "An error has occured",
            });
          }
        });
      }
}

module.exports = { Users };