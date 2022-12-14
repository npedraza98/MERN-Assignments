import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description , setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data)
            setProducts([...products, res.data]);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <p>
                    <label className='form-label'>Title</label>
                    <input className='form-control' type="text" onChange = {(e) => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label className='form-label'>Price</label>
                    <input className='form-control' type="number" onChange = {(e) => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label className='form-label'>Description</label>
                    <input className='form-control' type="text" onChange = {(e) => setDescription(e.target.value)}/>
                </p>
                <input type="submit" className='submit-input' value='Create'/>
            </form>
        </div>
    )
}

export default ProductForm;