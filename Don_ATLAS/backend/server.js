import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Student from "./models/student.js";
import Faculty from "./models/faculty.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Student Portal API is running" });
});

app.get("/api/students", async (_req, res) => {
  try {
    const students = await Student.find().sort({ name: 1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Could not load students", error: error.message });
  }
});

app.get("/api/faculties", async (_req, res) => {
  try {
    const faculties = await Faculty.find().sort({ name: 1 });
    res.json(faculties);
  } catch (error) {
    res.status(500).json({ message: "Could not load faculty", error: error.message });
  }
});

// Lab/demo helper: inserts five sample records per collection only when empty.
// Do not expose an unprotected seed endpoint in a public production deployment.
app.get("/api/seed", async (_req, res) => {
  try {
    let studentsAdded = 0;
    let facultyAdded = 0;

    if (await Student.countDocuments() === 0) {
      const students = [
        { name: "Alex Santos", studentNumber: "2026-0001", course: "BSIT" },
        { name: "Jamie Reyes", studentNumber: "2026-0002", course: "BSCS" },
        { name: "Taylor Cruz", studentNumber: "2026-0003", course: "BSIT" },
        { name: "Morgan Garcia", studentNumber: "2026-0004", course: "BSIS" },
        { name: "Jordan Mendoza", studentNumber: "2026-0005", course: "BSCS" }
      ];
      await Student.insertMany(students);
      studentsAdded = students.length;
    }

    if (await Faculty.countDocuments() === 0) {
      const faculties = [
        { name: "Prof. Andrea Lim", empNumber: "EMP-001", department: "Information Technology" },
        { name: "Prof. Carlo Dizon", empNumber: "EMP-002", department: "Computer Science" },
        { name: "Prof. Bianca Ramos", empNumber: "EMP-003", department: "Information Systems" },
        { name: "Prof. Daniel Flores", empNumber: "EMP-004", department: "Information Technology" },
        { name: "Prof. Mika Torres", empNumber: "EMP-005", department: "Computer Science" }
      ];
      await Faculty.insertMany(faculties);
      facultyAdded = faculties.length;
    }

    res.json({ message: "Seed check complete", studentsAdded, facultyAdded });
  } catch (error) {
    res.status(500).json({ message: "Could not seed database", error: error.message });
  }
});

async function start() {
  if (!process.env.MONGO_URI) {
    console.error("Missing MONGO_URI. Create backend/.env using backend/.env.example.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

start();
