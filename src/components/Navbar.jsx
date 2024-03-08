import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../contexts/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ""}`}>
      <NavLink className={styles.brand} to="/">
        Blog <span className="apce">APCE</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login" activeClassName={styles.active}>
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName={styles.active}>
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/posts/create" activeClassName={styles.active}>
                Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeClassName={styles.active}>
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        <span>MENU</span><img src="/pontos.png" alt="Icon menu lista" />
      </button>
    </nav>
  );
};

export default Navbar;
