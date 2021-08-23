import React from 'react'

export default function CartItem(props) {
    const { item, changeCartItem } = props
    let tags = ""

    for (let i = 0; i < item.tags.length; i++){
        tags = tags + item.tags[i]
        if (i !== item.tags.length-1){
            tags = tags + ", "
        }
    }

    return (
        <div className="item-container">
            <div className='left-item-container'>
                <div className="item-img-container">
                    <img className="item-image" src={item.img} alt={item.name+" image"}></img>
                </div>
                <div className='cart-desc'>
                    <h2>{item.name}</h2>
                    <h3>Tags: {tags}</h3>
                </div>
            </div>
            <div className='item-right-container'>
                <h2>$ {item.price}.00 x {item.amount}</h2>
                <input 
                    type='number' 
                    value={item.amount} 
                    onInput={(e) =>{
                        changeCartItem(item, e.target.value)
                    }}>
                </input>
                <h2>${item.price*item.amount}.00</h2>
                <div 
                    className='remove-item-btn'
                    onClick={() =>{
                        changeCartItem(item, 0)
                    }}
                >Remove</div>
            </div>
        </div>
    )
}
