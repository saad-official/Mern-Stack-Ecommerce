require("dotenv").config();
const router = require("express").Router();
const KEY = process.env.PRIVATE_STRIPE_KEY;
console.log("key", KEY);
const stripe = require("stripe")(
  "sk_test_51M1Q5XFep3JG9bio6F1iDstfS6T7EmmV4obA0W5gzBfPDe2qgx19lNJdVAs9eto7Q58Tef0dRjdlbyq6ZhH9nKIJ00cl25S5TZ"
);

router.post("/payment", (req, res) => {
  console.log(req.body);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
