import React from 'react'
import AdminNavbar from './AdminNavbar/adminNavbar'
import AdminAllBooks from './AdminRead/adminAllBooks'
import { Route, Routes } from "react-router-dom";
import AdminAllAuthors from './AdminRead/adminAllAuthors'
import AdminAllCategories from './AdminRead/adminAllCategories';
import AddBookForm from '../AddBookForm/AddBookForm'
import AddAuthorForm from '../AddAutherForm/AddAutherForm'

function dashboard() {
  return (
    <div>

      <AdminNavbar />
      <Routes>
        <Route index element={<AdminAllBooks />} />
        <Route path='adminAllBooks' element={<AdminAllBooks />} />
        <Route path='adminAllAuthors' element={<AdminAllAuthors />} />
        <Route path='adminAllCategories' element={<AdminAllCategories />} />

        <Route path='adminAddBook' element={<AddBookForm/>}/>
        <Route path='adminAddAuthor' element={<AddAuthorForm/>}/>
      </Routes>

    </div>

  )
}

export default dashboard
