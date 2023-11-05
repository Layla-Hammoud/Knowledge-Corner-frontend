import React from 'react'
import adminNavbarStyle from './adminNavbar.module.css'
import books from '../../../assets/icons/download 1.svg'
import authors from '../../../assets/icons/4649486-200 1.svg'
import categories from '../../../assets/icons/Category.svg'
import { Link } from "react-router-dom";


function adminNavbar({handleClick}) {

    return (
        <div className={adminNavbarStyle.navbarComponent}>

            <div className={adminNavbarStyle.outerDiv}>

                <div onClick={handleClick}>
                <Link to={"/dashboard/adminAllBooks"} className={adminNavbarStyle.innerDiv}>
                    <img src={books} alt='books' />
                    <p className={adminNavbarStyle.threeButton}>Books</p>
                </Link>
                </div>

                <Link to={"/dashboard/adminAllAuthors"} className={adminNavbarStyle.innerDiv}>
                    <img src={authors} alt='authors' />
                    <p className={adminNavbarStyle.threeButton}>Authors</p>
                </Link>
                

                <Link to={"/dashboard/adminAllCategories"} className={adminNavbarStyle.innerDiv}>
                    <img src={categories} alt='categories'/>
                    <p className={adminNavbarStyle.threeButton}>Categories</p>
                </Link>

            </div>


            <div className={adminNavbarStyle.addContainer}>

                <button className={adminNavbarStyle.addButton}>
                <Link to={"/dashboard/adminAddAuthor"} className={adminNavbarStyle.addMVC}>Add Author</Link>
                </button>

                <button className={adminNavbarStyle.addButton}>
                    <Link to={"/dashboard/adminAddBook"} className={adminNavbarStyle.addMVC}>Add Book</Link>
                </button>

                <button className={adminNavbarStyle.addButton}>
                <Link to={"/dashboard/adminAddCategory"} className={adminNavbarStyle.addMVC}>Add Category</Link>
                </button>

            </div>

        </div>
    )
}

export default adminNavbar
