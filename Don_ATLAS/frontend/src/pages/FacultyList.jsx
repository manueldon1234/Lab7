import { useEffect, useState } from "react";
import DataTable from "../components/DataTable.jsx";

const columns = [
  { key: "name", label: "Name" },
  { key: "empNumber", label: "Employee Number" },
  { key: "department", label: "Department" }
];

export default function FacultyList() {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/faculties")
      .then((response) => {
        if (!response.ok) throw new Error("API request failed. Is the backend running?");
        return response.json();
      })
      .then(setFaculties)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="page">
      <p className="eyebrow">FACULTY INFORMATION</p>
      <div className="page-heading">
        <div><h1>Faculty List</h1><p>View faculty members and their departments.</p></div>
        <div className="count-card"><span>Total Faculty</span><strong>{faculties.length}</strong></div>
      </div>
      <section className="table-card"><div className="table-heading"><h2>Faculty Directory</h2></div><div className="table-scroll"><DataTable data={faculties} columns={columns} loading={loading} error={error} /></div></section>
    </main>
  );
}
