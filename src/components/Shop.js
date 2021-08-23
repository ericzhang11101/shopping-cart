import React, {useState} from 'react'
import ShopItem from './ShopItem.js'
import Filters from './Filters.js'

export default function Shop(props) {
    const { seals, addItem, filters } = props
    const [selectedFilters, setSelectedFilters] = useState([])

    function updateFilters(filter, val){
        let arr = [...selectedFilters]
        if (arr.includes(filter)){
            if (val){
                return
            }
            arr.splice(arr.indexOf(filter), 1)
        }
        else if (val){
            arr.push(filter)
        }
        setSelectedFilters(arr)
        console.log(selectedFilters)
    }

    return (
        <div className="shop-main">
            <div className="shop-header">
                <h2>Shop Seals</h2>
            </div>

            <div className='shop-grid'>
                <div className="shop-sidebar">
                    <h2>Filters</h2>
                    <Filters filters={filters} updateFilters={updateFilters}/>
                </div>
                <div className="shop-display">
                    {seals.map((seal) =>{
                        if (selectedFilters.length === 0){
                            return <ShopItem item={seal} addItem={addItem} updateFilters={updateFilters}/>
                        }
                        else{
                            let show = false;
                            seal.tags.map((tag) =>{
                                if (selectedFilters.includes(tag)) show = true;
                            })
                            if (show){
                                return <ShopItem item={seal} addItem={addItem} updateFilters={updateFilters}/>
                            }
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
