import axios from "axios";
import { useContext, useEffect, useReducer, } from 'react';
import { useParams } from "react-router-dom";
import { Store } from '../Store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            //showing only one product so products changes to product
            return { ...state, product: action.payload, loading: false };
        case 'FETCH FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}


export default function ProductScreen() {
    const params = useParams()
    const { category, slug, categorySlug } = params

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        //show only one product
        product: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/home/products/${category}/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, [slug]);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;

    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        //request looks like the home/products/category/slug
        const { data } = await axios.get(``);
        if (data.countInStock < quantity) {
            window.alert('Product out of Stock.  Check back on Wednesday.');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity },
        });

    };

    return loading ? (
        <div>Loading...</div>
    ) : error ? (
        <div>{error}</div>
    ) : (
        <Container fluid className="itemDescription">
            <Row className="traversal" >Home / {product.category}</Row>
            <Row className="list">
                <h2 className="category">PRODUCT CATEGORIES</h2>
                <Col className="items">Annual Flowers</Col>
                <Col className="items">Garden Plants & Flowers</Col>
                <Col className="items">Garden Supplies & Plant Care</Col>
            </Row>
            <Row className="pic">
                <img className="items" src={product.image} alt={product.name} />
            </Row>
            <Row className="listTwo">
                <h1 className='name'>{product.name}</h1>
                <div className="description">{product.description}</div>
                <div className="productPrice">${product.price}</div>
                <h3>Pick-up from Ypsilanti Store</h3>
                <li>
                    <h3>
                        <Button onClick={addToCartHandler}>Add to Cart</Button>
                    </h3>
                </li>

            </Row>
        </Container>
    );
}

