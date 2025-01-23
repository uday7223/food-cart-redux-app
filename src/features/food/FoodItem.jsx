import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import pizza from "../../assets/pizza.jpg"

const FoodItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="col-md-3 col-sm-5 col-xl-4 footItem-con">
            <div className="card mb-3">
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Restaurant: {item.restaurant}</p>
                    <p className="card-text">Location: {item.place}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => dispatch(addToCart(item))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
