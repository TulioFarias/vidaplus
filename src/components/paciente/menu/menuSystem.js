import React, { useState } from "react";
import PropTypes from "prop-types";
import '../../../sass/paciente/menu.scss';
import MainSystem from "../mainPaciente";



function MenuSystem({ menuItems, setSelectedMenu, selectedMenu }) {
  return (
    <div className="sidebar-menu">
      <h3>Menu</h3>
      {menuItems.map((item) => (
        <button
          key={item}
          className={selectedMenu === item ? "active" : ""}
          onClick={() => setSelectedMenu(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

MenuSystem.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedMenu: PropTypes.func.isRequired,
  selectedMenu: PropTypes.string.isRequired,
};

export default function DashboardLayout() {
  const menuItems = [
    "Dashboard",
    "Consultas",
    "Agendamentos",
    "Médicos Disponíveis",
    "Históricos",
    "Teleconsultas",
    "Notificações",
  ];

  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  return (
    <div className="dashboard-layout">
      <MenuSystem
        menuItems={menuItems}
        setSelectedMenu={setSelectedMenu}
        selectedMenu={selectedMenu}
      />

      <MainSystem selectedMenu={selectedMenu}/>
      
    </div>
  );
}
