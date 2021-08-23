import React, {useEffect} from 'react'
import CartItem from './CartItem';

export default function Checkout(props) {
    const {cart, removeFromCart, reduceItems, changeCartItem} = props
    let totalCost = 0;


    return (
        <div className="checkout-main">
            <div className="checkout-header">
                <h2>Shop Seals</h2>
            </div>

            <div className='checkout-grid'>
                <div className='checkout-items'>
                    {cart.map((item) => {
                        if (item.amount > 0){
                            totalCost += item.amount * item.price
                            return (<CartItem 
                                        item={item} 
                                        changeCartItem={changeCartItem}
                                    />)
                        }
                    })}
                </div>
                <div className="cart-bottom">
                    <h1 className='total-cost'>Total Cost: ${totalCost}.00</h1>
                    <div 
                        className='pay-btn'
                        onClick={() =>{
                            alert('Total Cost: $' + totalCost)
                        }}
                    >Pay Now</div>
                </div>
            </div>
        </div>
    )
}
