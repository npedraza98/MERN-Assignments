import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const EditAuthor = (props) => {

    const {id} = useParams();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOneAuthor/${id}`)
        .then((res)=> {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
        })
        .catch((err)=> {
            console.log(err)
        })
    },[id])

    const editAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, {
            firstName,
            lastName
        })
        .then((res)=> {
            console.log(res)
            navigate('/');
        })
        .catch((err)=> {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
  return (
    <div>
        <Link to='/'>Home</Link>
        <p>Edit this author:</p>
        <form onSubmit={editAuthor}>
            <p>
                <label className='form-label'>First Name:</label>
                <input className='form-control' type='text' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                {errors.firstName ? <p>{errors.firstName.message}</p> : null}
            </p>
            <p>
                <label className='form-label'>Last Name:</label>
                <input className='form-control' type='text' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                {errors.lastName ? <p>{errors.lastName.message}</p> : null}
            </p>
            <input type='submit' className='submit-input' value='Edit Author' />
        </form>
    </div>
  )
}

export default EditAuthor