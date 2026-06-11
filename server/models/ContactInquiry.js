const mongoose = require("mongoose");

const contactInquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    service: {
      type: String,
      enum: ["Buy Property", "Rent Property", "Auctions", "Legal Help"],
    },
    message: { type: String },
    status: {
      type: String,
      enum: ["pending", "contacted", "resolved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactInquiry", contactInquirySchema);
