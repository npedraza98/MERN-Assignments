import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Navigate, useNavigate, useParams} from 'react-router-dom';

const UpdateProduct = (props) => {

    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, {
            title,
            price,
            description
        })
        .then((res)=> {
            console.log(res);
            navigate('/');
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    return (
    <div>
        <h1>Update Product</h1>
        <form onSubmit={updateProduct}>
            <p>
                <label className='form-label'>Title</label>
                <input className='form-control' type="text" name='title' value={title} onChange = {(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label className='form-label'>Price</label>
                <input className='form-control' type="number" name='price' value={price} onChange = {(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label className='form-label'>Description</label>
                <input className='form-control' type="text" name='description' value={description} onChange = {(e) => setDescription(e.target.value)}/>
            </p>
            <input type="submit" className='submit-input' value='Update'/>
        </form>
    </div>
    )
}

export default UpdateProduct