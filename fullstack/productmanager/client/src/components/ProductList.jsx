import React, {useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {

    const {removeFromDom, products, setProducts} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${productId}`)
            .then((res)=> {
                removeFromDom(productId)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/getAllProducts')
        .then((res)=> {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
    <div>
        <h1>All Products</h1>
        {
            products.map((product, index) => (
                <div key={index}>
                    <Link to={`/product/${product._id}`}>
                        {product.title}
                    </Link>
                        |
                    <Link to={`/product/edit/${product._id}`}>
                        Edit
                    </Link>
                        |
                    <Link onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </Link>
                </div>
            ))
        }
    </div>
    )
}

export default ProductList