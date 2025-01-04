import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/admin/Admin";
import Landing from "./pages/user/Landing";
import Login from "./pages/admin/login/Login";
import { createContext, useState } from "react";
import { HelmetProvider } from "react-helmet-async";

const noop = () => {
  throw new Error("setIsAuthenticated is not initialized");
};

const AuthentificationContext = createContext<{
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isAuthenticated: false,
  setIsAuthenticated: noop
});

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  return (
    <HelmetProvider>
      <AuthentificationContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Routes>
          {/* Landing for user */}
          <Route path="/" element={<Landing />} />

          {/* Landing for admin */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

      </AuthentificationContext.Provider>
    </HelmetProvider>
  )
}

export { AuthentificationContext };
export default App;
