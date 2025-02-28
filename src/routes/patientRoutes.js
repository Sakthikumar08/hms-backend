const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// Route to fetch patient details by Aadhaar number
router.get("/:aadhaarNumber", async (req, res) => {
  try {
    const patient = await Patient.findOne({ aadhaarNumber: req.params.aadhaarNumber });
    
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;