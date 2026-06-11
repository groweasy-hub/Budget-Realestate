const Property = require("../models/Property");

exports.getAllProperties = async (req, res) => {
  const { type, category, location } = req.query;
  const filter = { isActive: true };
  if (type) filter.listingType = type;
  if (category) filter.category = category;
  if (location) filter.location = new RegExp(location, "i");

  const properties = await Property.find(filter);
  res.json({ success: true, count: properties.length, data: properties });
};

exports.getPropertyById = async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ success: false, message: "Property not found" });
  res.json({ success: true, data: property });
};

exports.createProperty = async (req, res) => {
  const property = await Property.create(req.body);
  res.status(201).json({ success: true, data: property });
};

exports.updateProperty = async (req, res) => {
  const property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!property) return res.status(404).json({ success: false, message: "Property not found" });
  res.json({ success: true, data: property });
};

exports.deleteProperty = async (req, res) => {
  const property = await Property.findByIdAndDelete(req.params.id);
  if (!property) return res.status(404).json({ success: false, message: "Property not found" });
  res.json({ success: true, message: "Property deleted" });
};
