import '../assets/orders.css'
import { useState } from "react";
const Orders = ()=>{
    console.log(JSON.parse(localStorage.getItem('cart')));
    const [shopCart,setshopCart] = useState(JSON.parse(localStorage.getItem('cart')))

return(
    <div>
        {Object.keys(shopCart).map(key => (
        <div className='orders' key={key}>
            <div className='small-card'>
                <img src={`./food/${shopCart[key]['img']}.jpg`}></img>
                <p style={{ color: 'black' }}>{key.toUpperCase()}</p>
                <p style={{ color: 'black' }}>{shopCart[key]['price']}</p>
                <p style={{ color: 'black' }}>{shopCart[key]['quantity']}</p>
            </div>
        </div>
        ))}
    </div>
)
}

export default Orders;