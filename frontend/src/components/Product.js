import React from 'react';
import Rating from './Rating';
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
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