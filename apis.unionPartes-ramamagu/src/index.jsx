import React from "react";
import ReactDOMClient from "react-dom/client";
import { DivWrapper } from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/LandingPage/style.css";
import { LandingPage } from './components/LandingPage/LandingPage'; // Ajusta la importación si es necesario
import SignIn from "./components/sign-in/SignIn";
import SingUp from "./components/sign-up/SignUp" // Supón que el componente SignIn está en esta ruta
import TicketForm from "./components/ChargeTicket/ChargeTicket";


const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/add-ticket" element={<TicketForm />} />
      <Route path="/sign-up" element={<SingUp />} />
      <Route path="/menu" element={<DivWrapper />} />
    </Routes>
  </Router>
);




