import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>🎬 Catálogo de Filmes</h1>
      <nav className="nav-links">
        <NavLink to="/" className="nav-link">📋 Ver Lista</NavLink>
        <NavLink to="/adicionar" className="nav-link">➕ Adicionar Filme</NavLink>
      </nav>
    </header>
  );
}

export default Header;