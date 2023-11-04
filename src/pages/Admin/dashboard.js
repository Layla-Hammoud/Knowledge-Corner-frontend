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

  const handleClick=async()=>{
    try{
      const response= await axios.get("http://localhost:4000/api/books")
      // console.log(response.data)
      setBooks(response.data)
      // console.log(books)
    }
    catch(error){
      console.log(error)
    }
  }

  // const handleClick=async()=>{
  //   try{
  //     const response= await axios.get("http://localhost:4000/api/books")

  //     const booksWithAuthorNames = await Promise.all(
  //       response.data.map(async (book) => {
  //         // Make a separate API request to fetch the author's name
  //         const authorResponse = await axios.get(`http://localhost:4000/api/authors/${book.authorId}`);
  //         const authorName = authorResponse.data.firstName;
  //         return { ...book, authorName };
  //       })
  //     );
      
  //     setBooks(booksWithAuthorNames)
  //     console.log(books)
    
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }



  useEffect(()=>{
    handleClick()
  },[])

  return (
    <div>
      

      <Routes>

        <Route exact path='/' element={<AdminOutlet handleClick={handleClick}/>}>
          <Route exact path='/' element={<AdminAllBooks books={books}/>}></Route>
          <Route path='/adminAllBooks' element={<AdminAllBooks books={books}/>}></Route>
          <Route path='/adminAllAuthors' element={<AdminAllAuthors/>}></Route>
          <Route path='/adminAllCategories' element={<AdminAllCategories/>}></Route>
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
