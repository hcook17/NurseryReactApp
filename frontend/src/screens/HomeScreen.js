import React from 'react';
import axios from 'axios';
import { useEffect, useReducer, } from 'react';
import Product from '../components/Product';
import logger from 'use-reducer-logger';

//state = current state and action will be the new state
const reducer = (state, action) => {
  //comparing each action type accordingly
  switch(action.type) {
    //what to return from ajax request
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

export default function HomeScreen() {

  const [{loading, error, products}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
     error: '',
    });
  //name of state = products
  //useState will return setProducts and update products
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/home');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      } catch(err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }
    //setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="HomeScreenMini"><p>All products</p></div>
        {
          loading ? (
          <div>Loading...</div>
          ) : error ? (
          <div>{error}</div>
          ) : (
        products.map((product) => (
          <Product key={product.id} product={product}></Product>
        )))}
    </div>
  )
}
