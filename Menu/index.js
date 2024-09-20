import { DivWrapper } from "./DivWrapper";
import Account from "./Sidebar/Cuenta/Account.js"; // Ruta relativa corregida
import Groups from "./Sidebar/Grupos/Groups.js";   // Esto parece estar correcto
export { DivWrapper } from "./DivWrapper";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<DivWrapper />} />
        <Route path="/account" element={<Account />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/add-ticket" element={<AddTicket />} />
        {/* Agrega otras rutas que necesites */}
      </Routes>
    </Router>
  );
}

export default App;
