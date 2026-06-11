const express = require("express");
const router = express.Router();
const {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.post("/", protect, adminOnly, createProperty);
router.put("/:id", protect, adminOnly, updateProperty);
router.delete("/:id", protect, adminOnly, deleteProperty);

module.exports = router;
