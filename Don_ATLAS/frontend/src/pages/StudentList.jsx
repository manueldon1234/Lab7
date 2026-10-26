import { useEffect, useState } from "react";
import DataTable from "../components/DataTable.jsx";

const columns = [
  { key: "name", label: "Name" },
  { key: "studentNumber", label: "Student Number" },
  { key: "course", label: "Course" }
];

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((response) => {
        if (!response.ok) throw new Error("API request failed. Is the backend running?");
        return response.json();
      })
      .then(setStudents)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="page">
      <p className="eyebrow">STUDENT INFORMATION</p>
      <div className="page-heading">
        <div><h1>Student List</h1><p>View students currently registered in the system.</p></div>
        <div className="count-card"><span>Total Students</span><strong>{students.length}</strong></div>
      </div>
      <section className="table-card"><div className="table-heading"><h2>Registered Students</h2></div><div className="table-scroll"><DataTable data={students} columns={columns} loading={loading} error={error} /></div></section>
    </main>
  );
}
