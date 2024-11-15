import React from 'react';
import '../css/AdminTemplate.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Utilisateurs</li>
        <li>Produits</li>
        <li>Paramètres</li>
      </ul>
    </div>
  );
}

export default Sidebar;
