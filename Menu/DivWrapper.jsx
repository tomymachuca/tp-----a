import React from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { MostOrdered } from "./PorCobrar/MostOrdered"; // Asumo que 'PorCobrar' es lo que antes llamabas 'MostOrdered'
import { Rating } from "./porcentaje/Rating";
import { Revenue } from "./Gastado/Revenue";
import { MostOrdered1 } from "./PorPagar/MostOrdered1";
import "./style.css";
import "./Gastado/style.css"
import "./PorCobrar/style.css"
import "./Sidebar/style.css"
import "./porcentaje/style.css"
import "./PorPagar/style.css"
export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
          <MostOrdered />
          <MostOrdered1 />
          <Rating />
          <Revenue />
          <Sidebar />
        </div>
  );
};