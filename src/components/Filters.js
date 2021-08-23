import React from 'react'

export default function Filters(props) {
    const {filters, updateFilters} = props

    return (
        <div >
            {
                filters.map((f) =>{
                    return (
                        <div className='filter-container'>
                            <label>{f}</label>
                            <input 
                                type="checkbox" 
                                onClick={
                                    (e) =>{
                                        updateFilters(f, e.target.checked)
                                    }
                                }>

                            </input>
                        </div>
                    )
                })
            }
        </div>
    )
}
