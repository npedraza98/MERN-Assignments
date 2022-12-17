import React, {useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const AuthorForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createAuthor', {
            firstName,
            lastName
        })
        .then((res) => {
            console.log(res)
            navigate('/')
            
        })
        .catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        });
    }

  return (
    <div>
        <Link to='/'>Home</Link>
        <p>Add a new author:</p>
        <form onSubmit={submitHandler}>
            
                <p>
                    <label className='form-label'>First Name:</label>
                    <input className='form-control' type='text' onChange={(e) => setFirstName(e.target.value)}/>
                    {errors.firstName ? <p>{errors.firstName.message}</p> : null}
                </p>
                <p>
                    <label className='form-label'>Last Name:</label>
                    <input className='form-control' type='text' onChange={(e) => setLastName(e.target.value)}/>
                    {errors.lastName ? <p>{errors.lastName.message}</p> : null}
                </p>
                <input type='submit' className='submit-input' value='Add Author' />
        </form>
    </div>
  )
}

export default AuthorForm