import { useState } from 'react';
import '../assets/cart.css'
const Cart = ({cart})=>{
const [shopCart,setshopCart] = useState(cart)

return(
    <div>
        <h1 className='head'>Cart</h1>
        {
            shopCart? (
                Object.keys(shopCart).map(key => (
                    <div key={key}>
                        <div className='small-card'>
                            {key}
                            {/* <img src={`/food/${shopCart[key]['img']}.jpg`}></img> */}
                            <p style={{color:'whitesmoke'}}>{shopCart[key]['price']}</p>
                            <p style={{color:'whitesmoke'}}>{shopCart[key]['quantity']}</p>
                        </div>
                    </div>
                ))
            ) : (<h1 style={{color:'whitesmoke'}}>Cart is Empty</h1>)
        }
        

    </div>
)
}

export default Cart;