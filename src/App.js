import React, { useEffect, useState } from "react";
import { createContext } from "react";
import AppRoutes from "./routes/AppRoutes";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
export const userContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  axios.defaults.withCredentials = true;
  async function getUser() {
    const response = await axios.get(`http://localhost:5000/api/user/getUser/`);
  }
  useEffect(() => {}, []);
  return (
    <HelmetProvider>
      <userContext.Provider value={{ user, setUser }}>
        <div className="App">
          <AppRoutes />
        </div>
      </userContext.Provider>
    </HelmetProvider>
  );
}

export default App;
