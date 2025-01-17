import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';

const Cart = () => {
    const items = useSelector((state) => {
        console.log('Cart state:', state.cart);
        return state.cart?.items || [];
    });
        const dispatch = useDispatch();

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container mt-4">
           <div className="col-md-6">
           <h2>Cart</h2>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name} (${item.price}) x {item.quantity}
                        <div>
                            <button
                                className="btn btn-sm btn-warning me-2"
                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                disabled={item.quantity === 1}
                            >
                                -
                            </button>
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className="mt-3">Total: ${total.toFixed(2)}</h3>
           </div>
        </div>
    );
};

export default Cart;
