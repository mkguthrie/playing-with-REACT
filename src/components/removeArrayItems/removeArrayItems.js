import React, { useState } from 'react'

function RemoveArrayItem({ title, subtitle }) {
    const [books, setBooks] = useState([
        {title: 'Book One', id: 1},
        {title: 'Book Two', id: 2},
        {title: 'Book Three', id: 3},
    ])

    const handleDeleteBookClick = (id) => {
        console.log(id)
        // callback function to access previous state
        // use when state update depends on previous state
        setBooks((prevBooks) => {
            return prevBooks.filter((book) => {
                return id !== book.id
            })
        })
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            {books.map((book, index) => (
                <React.Fragment key={book.id}>
                    <h2>{index} - {book.title}</h2>
                    <button onClick={() => handleDeleteBookClick(book.id)}>Delete Book</button>
                </React.Fragment>
            ))}
        </div>
    )
}

export default RemoveArrayItem