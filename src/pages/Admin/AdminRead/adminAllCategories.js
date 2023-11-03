import React from 'react'
import adminAllBooksStyle from './adminAllBooks.module.css'
import x from '../../../assets/icons/862px-Delete-button 1.svg'
import update from '../../../assets/icons/Vector (4).svg'


function adminAllCategories() {
    return (
        <div className={adminAllBooksStyle.allBooks}>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Biography</td>
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

export default adminAllCategories