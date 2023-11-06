import React from 'react'
import { Route, Routes } from "react-router-dom";
import AllAuthors from '../components/AllAuthors/AllAuthors';
import AllBooks from "../components/AllBooks/AllBooks";
import SingleBook from '../pages/SingleBook/SingleBook'
import SingleAuther from '../pages/SingleAuther/SingleAuther'
import Landing from "../pages/Landing/Landing";
import Dashboard from '../pages/Admin/dashboard'
import UserOutlet from "../Outlet/userOutlet";
import NotFound from '../components/NotFound/WebsiteNotFound'

function AppRoutes() {
  return (
    <Routes>

        <Route exact path="/" element={<UserOutlet />}>
          <Route exact path="/" element={<SingleAuther />}> </Route>
          <Route path="/AllBooks" element={<AllBooks />}></Route> 
          <Route path="/AllAuthors" element={<AllAuthors />}></Route>
          <Route path="/SingleBook" element={<SingleBook/>}></Route>
        </Route>

        <Route path="/dashboard/*" element={<Dashboard/>}></Route>
        
        <Route path="/*" element={<NotFound/>}></Route>

      </Routes>
  )
}

export default AppRoutes
