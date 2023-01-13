import React from 'react'

function Coin({name, icon, price, symbol}) {
  return (
    <div className='coin'>
        <h1> {name}</h1>
        <img src={icon}/>
        <h4> Price: {price}</h4>
        <h4> Symbol: {symbol}</h4>
    </div>
  )
}

export default Coin