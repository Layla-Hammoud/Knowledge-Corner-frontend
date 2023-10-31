import React from 'react'
import adminNavbarStyle from '../Admin/adminNavbar.module.css'
import books from '../../assets/icons/download 1.svg'
import authors from '../../assets/icons/4649486-200 1.svg'
import categories from '../../assets/icons/Category.svg'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



function adminNavbar() {

    const openNewWindow = () => {
        const url = "/addCategory.js";
        window.open(url, "_blank", "width=600,height=400");
    };

    return (
        <div className={adminNavbarStyle.navbarComponent}>

            <div className={adminNavbarStyle.outerDiv}>

                <button className={adminNavbarStyle.innerDiv}>
                    <img src={books} alt='books' />
                    <Link to={"/"} className={adminNavbarStyle.threeButton}>Books</Link>
                </button>

                {/* <button className={adminNavbarStyle.innerDiv}>
                    <img src={authors} alt='authors' />
                    <NavLink to={"/adminAuthors"} className={adminNavbarStyle.threeButton}>Authors</NavLink>
                </button> */}
                <NavLink to={"/adminAllAuthors"} className={adminNavbarStyle.threeButton}>Authors</NavLink>

                <button className={adminNavbarStyle.innerDiv}>
                    <img src={categories} alt='categories' />
                    {/* <button className={adminNavbarStyle.threeButton}>Categories</button> */}
                    <NavLink to={"/adminCategories"} className={adminNavbarStyle.threeButton}>Categories</NavLink>
                </button>

            </div>


            <div className={adminNavbarStyle.addContainer}>

                <button className={adminNavbarStyle.addButton}>
                    Add Author
                </button>

                <button className={adminNavbarStyle.addButton}>
                    Add Book
                </button>

                <button className={adminNavbarStyle.addButton} id="openWindowButton" onClick={openNewWindow}>
                    Add Category
                </button>

            </div>

        </div>
    )
}

export default adminNavbar
