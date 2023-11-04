import React from 'react'
// import AdminNavbar from './AdminNavbar/adminNavbar'
import AdminAllBooks from './AdminRead/adminAllBooks'
import { Route, Routes } from "react-router-dom";
import AdminAllAuthors from './AdminRead/adminAllAuthors'
import AdminAllCategories from './AdminRead/adminAllCategories';
import AddEditBookForm from '../AddEditBookForm/AddEditBookForm';
import AddEditAutherForm from '../AddEditAutherForm/AddEditAutherForm';
import AddCategoryForm from './addCategory';
import AdminOutlet from '../../Outlet/AdminOutlet';
import NotFound from '../../components/NotFound/AdminNotFound'

function dashboard() {
  return (
    <div>

      <Routes>

        <Route exact path='/' element={<AdminOutlet/>}>
          <Route exact path='/' element={<AdminAllBooks/>}></Route>
          <Route path='/adminAllBooks' element={<AdminAllBooks/>}></Route>
          <Route path='/adminAllAuthors' element={<AdminAllAuthors/>}></Route>
          <Route path='/adminAllCategories' element={<AdminAllCategories/>}></Route>
          <Route path='/adminAddBook' element={<AddEditBookForm/>}></Route>
          <Route path='/adminAddAuthor' element={<AddEditAutherForm/>}></Route>
          <Route path='/adminAddCategory' element={<AddCategoryForm/>}></Route>
        </Route>

        <Route path='/*' element={<NotFound/>}/>

      </Routes>

    </div>

  )
}

export default dashboard
