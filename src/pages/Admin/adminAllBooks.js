import React from 'react'
import adminAllBooksStyle from '../Admin/adminAllBooks.module.css'
import AdminNavbar from './adminNavbar'
import x from '../../assets/icons/862px-Delete-button 1.svg'
import update from '../../assets/icons/Vector (4).svg'


function adminAllBooks() {
    return (
    <div>
        <div className={adminAllBooksStyle.allBooks}>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>ISBN</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Love Story</td>
                        <td>Alex</td>
                        <td>Drama</td>
                        <td>00101315465</td>
                        <td>rating</td>
                    </tr>
                </tbody>
            </table>

            <div className={adminAllBooksStyle.buttonContainer}>
                <button className={adminAllBooksStyle.updateDelete}><img src={x} alt='delete' /></button>
                <button className={adminAllBooksStyle.updateDelete}><img src={update} alt='update' /></button>
            </div>

        </div>
        </div>
    )
}

export default adminAllBooks
