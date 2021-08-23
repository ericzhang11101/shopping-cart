import React from 'react'

export default function LargeBtn(props) {
    const {onPress, name} = props
    return (
        <div className="btn btn-large" onClick={onPress}>
            {name}
        </div>
    )
}
