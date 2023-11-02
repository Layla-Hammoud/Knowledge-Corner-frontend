import React from "react";
// we have to import pages component in order to work in route
import { Route, Routes } from "react-router-dom";
import AllAuthors from "./components/AllAuthors/AllAuthors";
import AllBooks from "./components/AllBooks/AllBooks";
import SingleBook from './pages/SingleBook/SingleBook'
import Landing from "./pages/Landing/Landing";
import Dashboard from './pages/Admin/dashboard'
import UserOutlet from "./Outlet/userOutlet";
import NotFound from './components/NotFound/WebsiteNotFound'

function App() {
  return (
    <div className="App">
      
      <Routes>

        <Route exact path="/" element={<UserOutlet />}>
          <Route exact path="/" element={<Landing />}> </Route>
          <Route path="/AllBooks" element={<AllBooks />}></Route> 
          <Route path="/AllAuthors" element={<AllAuthors />}></Route>
          <Route path="/SingleBook" element={<SingleBook/>}></Route>
        </Route>

        <Route path="/dashboard/*" element={<Dashboard/>}></Route>
        
        <Route path="/*" element={<NotFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
