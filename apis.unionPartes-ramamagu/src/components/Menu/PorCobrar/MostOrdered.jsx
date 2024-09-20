import React from "react";

export const MostOrdered = () => {
  const data = [
    { name: "Marco Riccitelli", amount: "ARS 90.000" },
    { name: "Tomas Machuca", amount: "ARS 80.000" }, // Corregido ARRS -> ARS
    { name: "Bautista Castro", amount: "ARS 70.000" },
    { name: "Lionel Messi", amount: "ARS 50.000" },
  ];

  return (
    <>
      <div className="most-ordered">
        <p className="title-data">Por Cobrar</p>
        <p className="desc">Personas que te deben dinero</p>

        {data.map((item, index) => (
          <div className="group" key={index}>
            <div className="text">{item.name}</div>
            <div className="text-2">{item.amount}</div>
          </div>
        ))}
      </div>
    </>
  );
};
