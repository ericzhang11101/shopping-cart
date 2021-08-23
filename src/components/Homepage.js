import React from 'react'
import {useHistory } from 'react-router-dom'
import background from '../assets/seal-background.jpg'
import LargeBtn from './LargeBtn'
export default function Homepage() {
    const history = useHistory();
    const navigateTo = () => history.push('/shop');

    return (
        <div className="homepage-main" style={{ backgroundImage: `url(${background})` }}>
            <div className="homepage-block">
                    <h1>Eric's Seal Store</h1>
                    <h3>For all your seal needs!</h3>
                    <LargeBtn 
                        name={'Shop Now!'}
                        onPress={() => {navigateTo()}}
                    />
            </div>
        </div>
    )
}
