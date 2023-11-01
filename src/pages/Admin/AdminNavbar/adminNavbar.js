import React from 'react'
import adminNavbarStyle from './adminNavbar.module.css'
import books from '../../../assets/icons/download 1.svg'
import authors from '../../../assets/icons/4649486-200 1.svg'
import categories from '../../../assets/icons/Category.svg'
import { Link } from "react-router-dom";


function adminNavbar() {

    const openNewWindow = () => {
        const url = "/addCategory.js";
        window.open(url, "_blank", "width=600,height=400");
    };

    return (
        <div className={adminNavbarStyle.navbarComponent}>

            <div className={adminNavbarStyle.outerDiv}>

                <Link to={"/dashboard/adminAllBooks"} className={adminNavbarStyle.innerDiv}>
                    <img src={books} alt='books' />
                    <Link to={"/dashboard/adminAllBooks"} className={adminNavbarStyle.threeButton}>Books</Link>
                </Link>

                <Link to={"/dashboard/adminAllAuthors"} className={adminNavbarStyle.innerDiv}>
                    <img src={authors} alt='authors' />
                    <Link to="/dashboard/adminAllAuthors" className={adminNavbarStyle.threeButton}>Authors</Link>
                </Link>
                

                <Link to={"/dashboard/adminAllCategories"} className={adminNavbarStyle.innerDiv}>
                    <img src={categories} alt='categories' />
                    <Link to={"/dashboard/adminAllCategories"} className={adminNavbarStyle.threeButton}>Categories</Link>
                </Link>

            </div>


            <div className={adminNavbarStyle.addContainer}>

                <button className={adminNavbarStyle.addButton}>
                <Link to={"/dashboard/adminAddAuthor"} className={adminNavbarStyle.addMVC}>Add Author</Link>
                </button>

                <button className={adminNavbarStyle.addButton}>
                    <Link to={"/dashboard/adminAddBook"} className={adminNavbarStyle.addMVC}>Add Book</Link>
                </button>

                <button className={adminNavbarStyle.addButton} id="openWindowButton" onClick={openNewWindow}>
                <Link to={"/dashboard/adminAddBook"} className={adminNavbarStyle.addMVC}>Add Category</Link>
                </button>

            </div>

        </div>
    )
}

export default adminNavbar
