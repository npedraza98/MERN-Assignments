import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const AuthorList = () => {

    const [allAuthors, setAllAuthors] = useState([]);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${authorId}`)
        .then((res)=> {
            console.log("author deleted");
            console.log(res);
            const filteredAuthors = allAuthors.filter((author) => {
                return author._id !== authorId;
            });
            setAllAuthors(filteredAuthors)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/api/getAllAuthors')
        .then((res)=> {
            console.log(res.data)
            setAllAuthors(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[])
  return (
    <div className='container'>
        <Link to='/createAuthor'>Add an author</Link>
        <p>We have qoutes by:</p>
        <table className='table'>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Acions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    allAuthors.map((author, index)=> {
                        return(
                            <tr key={author._id}>
                                <td>{author.firstName} {author.lastName}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => deleteAuthor(author._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    </div>
  )
}

export default AuthorList