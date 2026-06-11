const express = require("express");
const router = express.Router();
const { submitInquiry, getAllInquiries, updateInquiryStatus } = require("../controllers/contactController");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

router.post("/", submitInquiry);
router.get("/", protect, adminOnly, getAllInquiries);
router.patch("/:id/status", protect, adminOnly, updateInquiryStatus);

module.exports = router;
