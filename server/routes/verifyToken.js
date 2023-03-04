const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  console.log("tt", req.headers.token);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid");
      req.user = user;
      console.log("req", user, process.env.JWT_SEC);
      next();
    });
  } else {
    return res.status(401).json("You are not Authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  console.log("uoo", req.headers);
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are Not Allowed to do that !");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.Admin) {
      next();
    } else {
      res.status(403).json("You are Not Allowed to do that !");
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
