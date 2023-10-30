import React from 'react'
import adminNavbarStyle from '../Admin/adminNavbar.module.css'
import books from '../../assets/icons/download 1.svg'
import authors from '../../assets/icons/4649486-200 1.svg'
import categories from '../../assets/icons/Category.svg'

function adminNavbar() {
  return (
    <div className={adminNavbarStyle.navbarComponent}>

        <div className={adminNavbarStyle.outerDiv}>

            <button className={adminNavbarStyle.innerDiv}>
                <img src={books} alt='books'/>
                <h2>Books</h2>
            </button>

            <button className={adminNavbarStyle.innerDiv}>
                <img src={authors} alt='authors'/>
                <h2>Authors</h2>
            </button>

            <button className={adminNavbarStyle.innerDiv}>
                <img src={categories} alt='categories'/>
                <h2>Categories</h2>
            </button>

        </div>


        <div className={adminNavbarStyle.addContainer}>

            <button className={adminNavbarStyle.addButton}>
                Add Author
            </button>

            <button className={adminNavbarStyle.addButton}>
                Add Book
            </button>

            <button className={adminNavbarStyle.addButton}>
                Add Category
            </button>

        </div>

    </div>
  )
}

export default adminNavbar
