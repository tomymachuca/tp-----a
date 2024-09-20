import React from "react";

export const MostOrdered1 = () => {
  const data = [
    { name: "Marco Riccitelli", amount: "ARS 90.000" },
    { name: "Tomas Machuca", amount: "ARS 80.000" }, // Corregido ARRS -> ARS
    { name: "Bautista Castro", amount: "ARS 70.000" },
    { name: "Lionel Messi", amount: "ARS 50.000" },
  ];

  return (
    <>
      <div className="most-ordered1">
        <p className="title-data">Por pagar</p>
        <p className="desc">Personas a las que le debes dinero</p>

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
