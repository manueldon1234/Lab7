import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">CAMPUS INFORMATION SYSTEM</p>
        <h1>Welcome to the <span>Student Portal</span></h1>
        <p className="hero-copy">A simple, organized place to view student and faculty information.</p>
        <div className="actions">
          <Link className="button primary" to="/students">View Students →</Link>
          <Link className="button secondary" to="/faculties">View Faculty</Link>
        </div>
      </section>
      <section className="feature-grid">
        <article className="feature-card"><div className="feature-icon">🎓</div><h2>Students</h2><p>View student names, student numbers, and courses.</p><Link to="/students">Browse students →</Link></article>
        <article className="feature-card"><div className="feature-icon">👩‍🏫</div><h2>Faculty</h2><p>View faculty names, employee numbers, and departments.</p><Link to="/faculties">Browse faculty →</Link></article>
        <article className="feature-card"><div className="feature-icon">☁️</div><h2>Cloud Database</h2><p>Records are requested from an Express API connected to MongoDB Atlas.</p></article>
      </section>
    </main>
  );
}
