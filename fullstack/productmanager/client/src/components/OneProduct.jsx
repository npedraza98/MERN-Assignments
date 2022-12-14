import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OneProduct = (props) => {

    const [oneProduct, setOneProduct] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then( (res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err)=> {
              console.log(err)
            });
    }, [id]);
  return (
    <div>
        <p>{oneProduct.title}</p>
        <p>${oneProduct.price}</p>
        <p>{oneProduct.description}</p>
    </div>
  )
}

export default OneProduct;