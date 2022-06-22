import React from 'react';
import Rating from './Rating';
import { Link } from "react-router-dom";
import { Store } from '../Store';
import { useContext } from 'react';
import axios from 'axios';

export default function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/home/products/${item.id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  }; 
  return (
    <div key={product.id} className="card">
      <Link to={`/products/${product.categorySlug}/${product.slug}`} >
      <div>
        <img className= "medium" src={product.image} alt={product.name} />
      </div>
      <div className="card-body">
        <div>
          <h2>{product.name}</h2>
        </div>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">${product.price}</div>
      </div>
      </Link>
    </div>

  );
}