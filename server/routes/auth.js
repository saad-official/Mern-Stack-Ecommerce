const router = require("express").Router();
const User = require("../modal/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const tuser = await newUser.save();
    res.status(201).json(tuser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const tuser = await User.findOne({ username: req.body.username });

    !tuser && res.status(401).json("User is Not Found !");
    const hasedPassword = CryptoJS.AES.decrypt(
      tuser?.password,
      process.env.PASS_SEC
    );

    const Originalpassword = hasedPassword.toString(CryptoJS.enc.Utf8);
    // console.log(password, ",", ",", req.body.password);
    // password != req.body.password;
    if (Originalpassword !== req.body.password)
      res.status(401).json("Wrong PassWord");
    else {
      const accessToken = jwt.sign(
        {
          id: tuser._id,
          Admin: tuser.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );
      const { password, ...others } = tuser._doc;
      res.status(200).json({ ...others, accessToken });
    }
  } catch (error) {
    // res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
