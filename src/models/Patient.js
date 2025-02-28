const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  aadhaarNumber: { type: String, required: true, unique: true },
  linkedMobile: { type: String, required: true },
  medicalConditions: { type: [String], default: [] },
  allergies: { type: [String], default: [] },
  emergencyContact: {
    name: String,
    relation: String,
    phone: String,
  },
  healthID: { type: String, required: true, unique: true },
  insuranceSchemes: { type: [String], default: [] },
});

module.exports = mongoose.model("Patient", PatientSchema);
