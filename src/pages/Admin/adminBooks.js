import React from 'react'
import AdminNavbar from './adminNavbar'
import AdminAllBooks from './adminAllBooks'
import { Route, Routes } from "react-router-dom";
import AdminAllAuthors from '../Admin/adminAllAuthors'
import AdminAllCategories from './adminAllCategories';

function adminBooks() {
  return (
    <div>
      {/* <AdminNavbar/>
      <AdminAllBooks/> */}

<AdminNavbar />
      <Routes>
        <Route path='/' element={<AdminAllBooks/>}></Route>
        <Route path='/adminAllAuthors' element={<AdminAllAuthors/>}></Route>
        <Route path='/adminCategories' element={<AdminAllCategories/>}></Route>
      </Routes>
{/* 
      <Routes>
        <Route path="/AllAuthors" element={<AdminBooks />}></Route>
      </Routes> */}
    </div>
  )
}

export default adminBooks
