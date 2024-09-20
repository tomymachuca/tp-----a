import React from "react";

export const Rating = () => {
  const ratingData = [
    { name: "Los de Futbol", percentage: "85%" },
    { name: "Mardel 2024", percentage: "85%" },
    { name: "Casa Capital", percentage: "92%" },
  ];

  return (
    <div className="rating">
      <table className="rating-table">
        <thead>
          <tr>
            <th>Grupo</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {ratingData.map((group, index) => (
            <tr key={index}>
              <td>{group.name}</td>
              <td>{group.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


