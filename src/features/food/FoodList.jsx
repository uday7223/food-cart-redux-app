import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodItems } from './foodSlice';
import FoodItem from './FoodItem';

const FoodList = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.food || { items: [], status: 'idle' });

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchFoodItems());
        }
    }, [status, dispatch]);

    console.log('Redux items:', items); // Inspect data passed from Redux state


    if (status === 'loading') {
        return <p>Loading food items...</p>;
    }

    if (status === 'failed') {
        return <p>Failed to load food items. Please try again later.</p>;
    }

    return (
        <div className="container mt-4">
            <h2>Available Food</h2>
            <div className="row">
                {items.length > 0 ? (
                    items.map((item) => (
                        <FoodItem key={item.id} item={item} />
                    ))
                ) : (
                    <p>No items available.</p>
                )}
            </div>
        </div>
    );
};

export default FoodList;
