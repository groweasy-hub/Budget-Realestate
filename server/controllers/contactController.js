const ContactInquiry = require("../models/ContactInquiry");

exports.submitInquiry = async (req, res) => {
  const inquiry = await ContactInquiry.create(req.body);
  res.status(201).json({ success: true, message: "Inquiry submitted", data: inquiry });
};

exports.getAllInquiries = async (req, res) => {
  const inquiries = await ContactInquiry.find().sort({ createdAt: -1 });
  res.json({ success: true, count: inquiries.length, data: inquiries });
};

exports.updateInquiryStatus = async (req, res) => {
  const inquiry = await ContactInquiry.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  if (!inquiry) return res.status(404).json({ success: false, message: "Inquiry not found" });
  res.json({ success: true, data: inquiry });
};
