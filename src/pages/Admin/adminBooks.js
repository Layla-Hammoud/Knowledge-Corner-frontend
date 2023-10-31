import React from 'react'
import AdminNavbar from './adminNavbar'
import AdminAllBooks from './adminAllBooks'
import { Route, Routes } from "react-router-dom";
import AdminAllAuthors from '../Admin/adminAllAuthors'
import AdminAllCategories from './adminAllCategories';

function adminBooks() {
  return (
    <div>
  
      <AdminNavbar />
      <Routes>
        <Route path='adminAllBooks' element={<AdminAllBooks />}/>
        <Route path='adminAllAuthors' element={<AdminAllAuthors />}/>
        <Route path='adminAllCategories' element={<AdminAllCategories />}/>
      </Routes>
      
    </div>
  )
}

export default adminBooks
