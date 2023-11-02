import React from 'react'
import AdminNavbar from '../pages/Admin/AdminNavbar/adminNavbar';

import { Outlet } from "react-router-dom";

function Test() {
    return (
        <div>
            <AdminNavbar/>
            <Outlet />
        </div>
    )
}

export default Test