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
  isOpenPopup: boolean,
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>,
  isErrorPopup: boolean,
  setIsErrorPopup: React.Dispatch<React.SetStateAction<boolean>>, 
  popupMessage: string,
  setPopupMessage: React.Dispatch<React.SetStateAction<string>>
}>({
  isOpenPopup: false,
  setIsOpenPopup: noop,
  isErrorPopup: false,
  setIsErrorPopup: noop, 
  popupMessage: '',
  setPopupMessage: noop
});

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  let [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  let [isErrorPopup, setIsErrorPopup] = useState<boolean>(false);
  let [popupMessage, setPopupMessage] = useState<string>('');
  const closePopup = () => { setIsOpenPopup(false); }

  return (
    <HelmetProvider>
      <PopupContext.Provider value={{ isOpenPopup, setIsOpenPopup, isErrorPopup, setIsErrorPopup, popupMessage, setPopupMessage }}>
        <AuthentificationContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Popup isOpen={isOpenPopup} onClose={closePopup} isErrorPopup={isErrorPopup} timeClose={3500}>{popupMessage}</Popup>

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
