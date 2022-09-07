import React from 'react'
import axios from 'axios'

export default function BookList() {

    const getBooks = () => {
        axios.get('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/booksonthetable')
            //Promisse que trata o sucesso da requisição
            .then(response => console.log(response))
            //Promsse que trata o erro da requisição
            .catch(error => console.log(error))


        axios.get('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books').then(response => console.log(response)).catch(error => console.log(error))
    }

    getBooks()

    return (
        
        <div>BookList</div>
    )
}
