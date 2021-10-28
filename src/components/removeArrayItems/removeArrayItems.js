import { useState } from 'react'

function RemoveArrayItem() {
    const [books, setBooks] = useState([
        {title: 'Book One', id: 1},
        {title: 'Book Two', id: 2},
        {title: 'Book Three', id: 3},
    ])

    const handleDeleteBookClick = (id) => {
        console.log(id)
        setBooks((prevBooks) => {
            return prevBooks.filter((book) => {
                return id !== book.id
            })
        })
    }

    return (
        <div>
            <h3>Remove Array Items Component</h3>
            <p>Updating state when dependent on previous state.</p>
            {books.map((book, index) => (
                <div key={book.id}>
                    <h2>{index} - {book.title}</h2>
                    <button onClick={() => handleDeleteBookClick(book.id)}>Delete Book</button>
                </div>
            ))}
        </div>
    )
}

export default RemoveArrayItem