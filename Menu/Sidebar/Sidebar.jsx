import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        {[
          { to: "/menu", label: "Menu", icon: "/img/iconly-bold-chart.svg" },
          { to: "/help", label: "Ayuda", icon: "/img/iconly-bold-info-square.svg" },
          { to: "/account", label: "Cuenta", icon: "/img/iconly-bold-profile.svg" },
          { to: "/settings", label: "Configuraciones", icon: "/img/iconly-bold-setting.svg" },
          { to: "/comments", label: "Comentarios", icon: "/img/iconly-bold-chat.svg" },
          { to: "/groups", label: "Grupos", icon: "/img/iconly-bold-document.svg" },
          { to: "/add-ticket", label: "Dividir Ticket", icon: "/img/iconly-bold-buy.svg" },
        ].map((item, index) => (
          <div className="menu-item" key={index}>
            <Link to={item.to}>
              <div className="menu-label">{item.label}</div>
              <img className="menu-icon" alt={item.label} src={item.icon} />
            </Link>
          </div>
        ))}
      </div>
      <div className="logo">
        <div className="logo-2">
          <div className="c-wrapper">
            <div className="c">G</div>
          </div>
        </div>
        <div className="name">SliceTicket</div>
      </div>
      <img className="separator-3" alt="Separator" src="/img/separator-3.svg" />
    </div>
  );
};
