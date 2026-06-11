const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Flats", "Villas", "Plots", "Commercial", "Farm Lands", "Luxury Homes", "Auctions"],
      required: true,
    },
    listingType: {
      type: String,
      enum: ["buy", "rent", "auction"],
      required: true,
    },
    price: { type: String, required: true },
    location: { type: String, required: true },
    area: { type: String },
    bhk: { type: String },
    availability: { type: String },
    rating: { type: String },
    reviews: { type: String },
    image: { type: String },
    badge: { type: String },
    description: { type: String },
    amenities: [{ key: String, label: String }],
    locationAdvantages: [{ place: String, time: String }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
