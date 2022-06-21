
import axios from 'axios';
import Product from '../components/Product';
import { useEffect, useReducer,  } from 'react';
import {  Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            //showing only the products in the category
            return { ...state, products: action.payload, loading: false };
        case 'FETCH FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}


export default function CategoryScreen() {
        const params = useParams()
        const { category } = params

        const [{ loading, error, products }, dispatch] = useReducer(reducer, {
            products: [],
            loading: true,
            error: '',
        });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/home/products/${category}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })

            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }

        };
        fetchData();
    }, []);
    return (
        <Container fluid className="itemDescription">
            <Row className="traversal" >Home / {category} </Row>
            <Row className="list">
                <h2 className="category">PRODUCT CATEGORIES</h2>
                <Col className="items"><Link to={`/products/Annual-Flowers`}>Annual Flowers</Link></Col>
                <Col className="items"><Link to={`/products/Garden-Plants-&-Flowers`}>Garden Plants & Flowers</Link></Col>
                <Col className="items"><Link to={`/products/Garden-Supplies-&-Plant-Care`}>Garden Supplies & Plant Care</Link></Col>
            </Row>
        <p> {category}</p>
        {
          loading ? (
          <div>Loading...</div>
          ) : error ? (
          <div>{error}</div>
          ) : (
        products.map((products) => (
          <Product key={products._id} product={products}></Product>
        )))}
        </Container>
    );
}