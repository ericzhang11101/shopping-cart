import React from 'react'
import LargeBtn from './LargeBtn'

export default function ShopItem(props) {
    const {item, addItem} = props
    let tagString = ""

    for (let i = 0; i < item.tags.length; i++){
        tagString = tagString + item.tags[i]
        if (i !== item.tags.length -1 ) tagString = tagString + ', '
    }
    return (
        <div className="shop-item" key={item.name+'-shop-card'}>
            <h1>{item.name}</h1>
            <div className="img-container">
                <img className='shop-img' src={item.img} alt={item.name+" image"}></img>
            </div>
            
            <div className='info-container'>
                <h2>Price: ${item.price}.00</h2>
                <div className='tag-container'>
                   Tags: {tagString}
                 </div>
                <div onClick={() => {
                    addItem(item)
                }} className='buy-btn btn'>
                    Add to Cart
                </div>
            </div>
        </div>
    )
}
