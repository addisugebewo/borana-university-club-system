import { Link, NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* University Logo and Name */}
        <Link to="/" className={styles.navbarBrand} onClick={closeMenu}>
          <div className={styles.brandIcon}>
            <GraduationCap size={30} />
          </div>

          <div className={styles.brandText}>
            <h2>BORANA UNIVERSITY</h2>
            <span>Student Club & Event Management</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/clubs"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Clubs
          </NavLink>

          <NavLink
            to="/events"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Events
          </NavLink>

          <NavLink
            to="/announcements"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            Announcements
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            About
          </NavLink>

          {/* Authentication Buttons */}
          <div className={styles.navAuth}>
            <Link to="/login" className={styles.loginBtn} onClick={closeMenu}>
              Login
            </Link>

            <Link
              to="/register"
              className={styles.registerBtn}
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
