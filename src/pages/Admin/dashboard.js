import React ,{useEffect, useState} from 'react'
// import AdminNavbar from './AdminNavbar/adminNavbar'
import AdminAllBooks from "./AdminRead/adminAllBooks";
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

  const handleDeleteBook=(bookId)=>{
    axios.delete(`http://localhost:4000/api/books/${bookId}`)
    .then((response) =>{
      console.log('Book deleted successfully')
      // Filter the books to exclude the deleted book
      const updatedBooks = books.filter((book) => book._id !== bookId);
      setBooks(updatedBooks);
    })
    .catch((error) =>{
      console.error('Error deleting book:',error)
    })
  }

  const handleDeleteAuthor=(authorId)=>{
    axios.delete(`http://localhost:4000/api/authors/${authorId}`)
    .then((response) =>{
      console.log('Author deleted successfully')
      // Filter the authors to exclude the deleted author
      const updatedAuthors = authors.filter((author) => author._id !== authorId);
      setAuthors(updatedAuthors);
    })
    .catch((error) =>{
      console.error('Error deleting author:',error)
    })
  }

  const handleDeleteCategory=(categoryId)=>{
    axios.delete(`http://localhost:4000/api/categories/${categoryId}`)
    .then((response)=>{
      console.log("Category deleted successfully")

      const updatedCategories = categories.filter((category) => category._id !== categoryId);
      setCategories(updatedCategories)
    })
    .catch((error)=>{
      console.error('Error deleting category:',error)
    })
  }
  

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
          <Route exact path='/' element={<AdminAllBooks books={books} authors={authors} categories={categories} handleDeleteBook={handleDeleteBook}/> }></Route>
          <Route path='/adminAllBooks' element={<AdminAllBooks books={books} authors={authors} categories={categories} handleDeleteBook={handleDeleteBook}/>}></Route>
          <Route path='/adminAllAuthors' element={<AdminAllAuthors authors={authors} handleDeleteAuthor={handleDeleteAuthor}/>}></Route>
          <Route path='/adminAllCategories' element={<AdminAllCategories categories={categories} handleDeleteCategory={handleDeleteCategory}/>}></Route>
          <Route path='/adminAddBook/:type' element={<AddBookForm/>}></Route>
          <Route path='/adminAddAuthor' element={<AddAuthorForm/>}></Route>
          <Route path='/adminAddCategory' element={<AddCategoryForm/>}></Route>
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Dashboard
