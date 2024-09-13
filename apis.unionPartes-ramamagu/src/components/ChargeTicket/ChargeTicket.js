import React, { useState } from "react";
import './style.css'; // Asegúrate de importar el archivo CSS correctamente

const TicketForm = () => {
  const [formData, setFormData] = useState({
    fecha: '',
    monto: '',
    casa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del ticket:', formData);
  };

  return (
    <div className="ChargeTicket">
      <div className="header">
        <div className="left">
          <div className="text-wrapper-2">SliceTicket</div>
        </div>
        <div className="div-2">
        <div className="menu-item" onClick={() => window.location.href = '/menu'}>
  <div className="text-wrapper-3">Menu</div>
</div>

<div className="menu-item" onClick={() => alert('Ruta de "Contactanos" aún no definida')}>
  <div className="text-wrapper-3">Contactanos</div>
</div>

        </div>
      </div>
      <div className="form-container" style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Ingrese su Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="fecha" style={{ display: 'block', marginBottom: '5px' }}>Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="monto" style={{ display: 'block', marginBottom: '5px' }}>Monto Total:</label>
            <input
              type="number"
              id="monto"
              name="monto"
              value={formData.monto}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="casa" style={{ display: 'block', marginBottom: '5px' }}>Casa a tu nombre:</label>
            <select
              id="casa"
              name="casa"
              value={formData.casa}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="" disabled>Seleccione una opción</option>
              <option value="casa1">Casa 1</option>
              <option value="casa2">Casa 2</option>
              <option value="casa3">Casa 3</option>
            </select>
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px 0', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;

