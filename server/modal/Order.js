const mongoose = require("mongoose");

const CartScheme = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    quantity: Number,
  },
  { timestamps: true }
);

// create bootcamp slug from the name
CartScheme.pre("save", function (next) {
  // console.log("SLugify ran", this.name);
  this.quantity = this.products.length;
  next();
});

module.exports = mongoose.model("Order", CartScheme);
