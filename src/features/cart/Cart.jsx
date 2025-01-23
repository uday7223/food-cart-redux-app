import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from './cartSlice';

const Cart = () => {
    const items = useSelector((state) => {
        console.log('Cart state:', state.cart);
        return state.cart?.items || [];
    });

    
        const dispatch = useDispatch();

    const total = items.reduce((sum, item) => sum + item.price * item.quantity,0);

    return (
        <div className="container mt-3 cart-con me-2">
           <div className="col-md-12">
            <div className="cart-header d-flex justify-content-between border-bottom mb-2 pb-2">
            <h2 className='mt-2'>Cart</h2>
            <button className='btn btn-danger mt-2'
            onClick={()=>dispatch(clearCart())}
            >CLEAR CART</button>
            </div>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name} (${item.price}) x {item.quantity}
                        <div>
                            <button
                                className="btn btn-sm btn-warning me-2"
                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                // disabled={item.quantity === 1}
                            >
                                -
                            </button>
                            <button
                                className="btn btn-sm btn-primary me-2"
                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                // disabled={item.quantity === 1}
                            >
                                +
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
