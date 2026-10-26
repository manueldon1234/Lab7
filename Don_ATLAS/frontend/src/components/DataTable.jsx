export default function DataTable({ data, columns, loading = false, error = "" }) {
  if (loading) return <p className="state-message">Loading records…</p>;
  if (error) return <p className="state-message error">{error}</p>;
  if (!data.length) return <p className="state-message">No records found. Check your database and sample data.</p>;

  return (
    <table>
      <thead>
        <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => <td key={column.key}>{item[column.key] || "—"}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
