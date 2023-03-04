const router = require("express").Router();

const Cart = require("../modal/Cart");
const Product = require("../modal/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./VerifyToken");

// Create Cart
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update Cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.fsindByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete Cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart Has been Deleted ..");
  } catch (error) {
    res.status(500).json(error);
  }
});

// get Cart
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Products Products
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  let products;
  try {
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get all Cart
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// // Get User Statis
// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },

//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   console.log("hello world");
//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_SEC
//     ).toString();
//   }

//   try {
//     const updateduser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );

//     res.status(200).json(updateduser);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json("User Has Been Deleted");
//   } catch (error) {}
// });
module.exports = router;
