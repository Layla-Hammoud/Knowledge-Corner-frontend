import React from 'react'
import addCategoryStyle from './addCategory.module.css'

function addCategory() {
    return (
        <div className={addCategoryStyle.addCategoryComponent}>
            <h1>Add</h1>

            <form>
                <label for="categoryName">Category's name</label>
                <input type="text" id="categoryName" name="Name" placeholder='Enter Category name' required />

                <button className={addCategoryStyle.cancelButton}>Cancel</button>
                <button className={addCategoryStyle.addButton}>Add</button>
            </form>

        </div>
    )
}

export default addCategory
