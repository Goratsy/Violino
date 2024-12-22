import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/admin/Admin";
import Landing from "./pages/user/Landing";
import Login from "./pages/admin/login/Login";

function App() {
  return (
    <Routes>
      {/* Landing for user */}
      <Route path="/" element={<Landing />} />

      {/* Landing for admin */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
