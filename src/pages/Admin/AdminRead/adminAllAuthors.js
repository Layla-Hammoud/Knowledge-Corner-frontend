import React from 'react'
import adminAllBooksStyle from './adminAllBooks.module.css'
import x from '../../../assets/icons/862px-Delete-button 1.svg'
import update from '../../../assets/icons/Vector (4).svg'


function adminAllAuthors() {
    return (
        <div className={adminAllBooksStyle.allBooks}>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birth Date</th>
                        <th>Location</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Buzz</td>
                        <td>example@gmail.com</td>
                        <td>15/20/1999</td>
                        <td>Australia</td>
                        <td>rating</td>
                    </tr>
                </tbody>
            </table>

            <div className={adminAllBooksStyle.buttonContainer}>
                <button className={adminAllBooksStyle.updateDelete}><img src={x} alt='delete' /></button>
                <button className={adminAllBooksStyle.updateDelete}><img src={update} alt='update' /></button>
            </div>

        </div>
    )
}

export default adminAllAuthors