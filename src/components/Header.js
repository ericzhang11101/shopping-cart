import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {
    const {items, checkOutClass} = props
    let itemString =""
    if (items){
        itemString = "("+items+")"
    }
    return (

        <div className="header-main"> 
            <h1>Seal Store</h1>
            <div>
                <div  className="btn-bar">
                    <Link to='/home' className="header-link" >Home</ Link>
                    <Link to='/shop' className="header-link" >Shopping</ Link>
                    <Link to='/checkout' className={checkOutClass}>Checkout {itemString}</ Link>
                </div>
            </div>
        </div>

    )
}
