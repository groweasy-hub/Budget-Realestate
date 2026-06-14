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
    priceSuffix: { type: String },
    maintenanceNote: { type: String },
    location: { type: String, required: true },
    locationTrail: { type: String },
    propertyCode: { type: String },
    area: { type: String },
    bhk: { type: String },
    furnishing: { type: String },
    availability: { type: String },
    rating: { type: String },
    reviews: { type: String },
    image: { type: String },
    badge: { type: String },
    description: { type: String },
    aboutPoints: [String],
    amenities: [{ key: String, label: String }],
    locationAdvantages: [{ place: String, time: String }],
    rentSummary: [{ label: String, value: String }],
    nearbyEssentials: [{ label: String, time: String, icon: String }],
    localityDescription: { type: String },
    localityTags: [String],
    securityCard: {
      title: { type: String, default: "Your investment is secure with us." },
      text: { type: String, default: "Transparent. Verified. Trusted." },
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
