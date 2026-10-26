import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  empNumber: { type: String, required: true, trim: true },
  department: { type: String, required: true, trim: true }
});

export default mongoose.model("Faculty", facultySchema);
