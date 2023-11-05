import React ,{useEffect, useState} from 'react'
// import AdminNavbar from './AdminNavbar/adminNavbar'
import AdminAllBooks from './AdminRead/adminAllBooks'
import { Route, Routes } from "react-router-dom";
import AdminAllAuthors from './AdminRead/adminAllAuthors'
import AdminAllCategories from './AdminRead/adminAllCategories';
import AddBookForm from '../AddEditBookForm/AddEditBookForm'
import AddAuthorForm from '../AddEditAutherForm/AddEditAutherForm'
import AddCategoryForm from './addCategory'
import AdminOutlet from '../../Outlet/AdminOutlet';
import NotFound from '../../components/NotFound/AdminNotFound'
import axios from 'axios';

function Dashboard() {

  const [books,setBooks]=useState([])
  const [authors,setAuthors]=useState([])
  const [categories,setCategories]=useState([])

  const handleClick = async () => {
    try {
      const [booksResponse, authorsResponse,categoriesResponse] = await Promise.all([
        axios.get('http://localhost:4000/api/books'),
        axios.get('http://localhost:4000/api/authors'),
        axios.get('http://localhost:4000/api/categories')
      ]);

      setBooks(booksResponse.data);
      setAuthors(authorsResponse.data);
      setCategories(categoriesResponse.data);
    
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(()=>{
    handleClick()
  },[])

  return (
    <div>
      

      <Routes>

        <Route exact path='/' element={<AdminOutlet handleClick={handleClick}/>}>
          <Route exact path='/' element={<AdminAllBooks books={books} authors={authors} categories={categories}/>}></Route>
          <Route path='/adminAllBooks' element={<AdminAllBooks books={books} authors={authors} categories={categories}/>}></Route>
          <Route path='/adminAllAuthors' element={<AdminAllAuthors authors={authors}/>}></Route>
          <Route path='/adminAllCategories' element={<AdminAllCategories categories={categories}/>}></Route>
          <Route path='/adminAddBook' element={<AddBookForm/>}></Route>
          <Route path='/adminAddAuthor' element={<AddAuthorForm/>}></Route>
          <Route path='/adminAddCategory' element={<AddCategoryForm/>}></Route>
        </Route>

        <Route path='/*' element={<NotFound/>}/>

      </Routes>

    </div>

  )
}

export default Dashboard
