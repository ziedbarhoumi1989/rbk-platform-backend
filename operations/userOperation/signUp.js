const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function signUp(req, res) {
    let { errors, isValid } = regiteryValidation(req.body);
    if (!isValid) {
      
      res.status(200).json(errors);
    } else {
    
      var { name, username, email, password, ConfirmPassword } = req.body;
      User.find(email)
        .then(data => {
          //console.log(data);
          if (data) {
            res
              .status(200)
              .json({ message: "user already exists", success: false });
          } else {
            //if no user with this email we will hash the password,save the
            //user data in the database and generate the authentication token
            var password = req.body.password;
            let hash = bcrypt.hashSync(password, 12);
            var password = hash;
            User.create({
              firstName: req.body.firstName,
              LastName: req.body.LastName,
              email: req.body.email,
              password: hash,
              phoneNumber:req.body.phoneNumber,
              type:req.body.type,

            })
              .then(result => {
                if (result) {
                  // res.redirect('/login')
                  //console.log(result);
                  var payload = {
                    id: result.id,
                    email: result.email,
                   
                  };
                  //console.log('this is a secret key');
                  jwt.sign(
                    payload,
                    'this is a secret key',
                    { expiresIn: 300 },
                    (err, token) => {
                      var refreshToken = randToken.uid(250);
                      var date = new Date();
                      // console.log(refreshToken);
                      //console.log(token);
                      
                      Token.create(
                        token,
                        new Date(date.getTime() + 5 * 60 * 1000),
                        refreshToken,
                        new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000),
                        result.id
                      );
                      res.cookie("refreshtoken", refreshToken, {
                        maxAge: 60 * 60 * 1000,
                        httpOnly: true
                      });
                      res.cookie("token", token, {
                        maxAge: 60 * 60 * 1000, // keep it  60 * 60 * 1000
                        httpOnly: true
                      });
                      
                      return res.json({
                        payload,
                        success: true,
                        token: "Bearer " + token,
                        refreshToken: refreshTokenYolo
                      });
                      
                    }
                  );
                }
              })
              .catch(err => {
                if (err) {
                  res.sendStatus(401);
                }
              });
          }
        })
        .catch(err => console.log(err));
    }
  }