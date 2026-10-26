import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="brand" to="/">Campus<span>Portal</span></NavLink>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/faculties">Faculty</NavLink>
      </nav>
    </header>
  );
}
