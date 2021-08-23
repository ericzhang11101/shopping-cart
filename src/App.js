import Homepage from './components/Homepage.js'
import Header from './components/Header.js'
import Shop from './components/Shop.js'
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Seals from './assets/SealArr.js'
import Checkout from './components/Checkout.js'
import uniqid from 'uniqid'

function App() {
  const [items, setItems] = useState([])
  const [numItems, setNumItems] = useState(0)
  const [seals, setSeals] = useState(Seals)
  const [filters, setFilters] = useState(getFilters())
  const [checkOutClass, setCheckOutClass] = useState('header-link') 

  function getFilters(){
    let arr =[]
    for (let i = 0; i < seals.length; i++){
      for (let j = 0; j <seals[i].tags.length; j++){
        if (!arr.includes(seals[i].tags[j])){
          arr.push(seals[i].tags[j])
        }
      }
    }
    return arr
  }


  function addItem(){
    setNumItems(numItems+1)
  }

  function removeItem(){
    setNumItems(numItems-1)
  }

  function changeCartItem(item, newAmount){
    let arr = [...items]
    for (let i = 0; i < items.length; i++){
      if (items[i].id === item.id){
        let diff = (arr[i].amount - newAmount)
        setNumItems(numItems - diff)
        arr[i].amount = newAmount;
      }
    }

    setItems(arr)
    console.log(items)
  }

  function addToCart(item){
    
    addItem()
    flashCheckout()

    let arr = [... items]
    for (let i = 0; i < items.length; i++){
      if (items[i].id === item.id){
        arr[i].amount = parseInt(arr[i].amount) + 1;
        setItems(arr)
        return
      }
    }

    arr.push({
      name: item.name,
      id: item.id,
      amount: 1,
      img: item.img,
      price: item.price,
      tags: item.tags
    })
    setItems(arr)
    
  }

  function removeFromCart(){

  }

  function flashCheckout(){
    setCheckOutClass('header-link-bright')
    setTimeout(() => {
      setCheckOutClass('header-link')
    }, 500)
  }



  return (
    <BrowserRouter>
      <div>
        <Header items={numItems} checkOutClass={checkOutClass}/>
      </div>
      <div className='content-container'>
        <Switch>
          <Route path={['/', '/home']} exact>
            <Homepage />
          </Route>
          <Route path='/shop'>
            <Shop seals={seals} addItem={addToCart} filters={filters} /> 
          </Route> 
          <Route path='/checkout'>
            <Checkout 
              cart={items}
              removeFromCart={removeFromCart}
              reduceItems={removeItem}
              changeCartItem={changeCartItem}
            />
          </Route>
        </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
