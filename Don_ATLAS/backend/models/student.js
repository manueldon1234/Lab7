import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  studentNumber: { type: String, required: true, trim: true },
  course: { type: String, required: true, trim: true }
});

export default mongoose.model("Student", studentSchema);
