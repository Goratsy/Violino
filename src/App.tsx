import { Navigate, Route, Routes } from "react-router-dom";
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

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
