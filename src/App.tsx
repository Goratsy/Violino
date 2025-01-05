import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/admin/Admin";
import Landing from "./pages/user/Landing";
import Login from "./pages/admin/login/Login";
import { createContext, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Popup from "./components/UI/popup/Popup";

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

const PopupContext = createContext<{
  steckMessages: { isErrorPopup: boolean, message: string }[] | null,
  setSteckMessages: React.Dispatch<React.SetStateAction<{ isErrorPopup: boolean, message: string }[] | null>>,
}>({
  steckMessages: null,
  setSteckMessages: noop,
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [steckMessages, setSteckMessages] = useState<{ isErrorPopup: boolean, message: string }[] | null>(null);

  return (
    <HelmetProvider>
      <PopupContext.Provider value={{ steckMessages, setSteckMessages }}>
        <AuthentificationContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Popup />

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
      </PopupContext.Provider>
    </HelmetProvider>
  )
}

export { AuthentificationContext, PopupContext };
export default App;
