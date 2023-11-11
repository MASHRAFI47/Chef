import React, { useState } from 'react'
import style from './cart.module.css'

const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0);
    return (
        <article>
            {cart?.map((meal) => (
                <div className="cart_box" key={meal.id}>
                    <div className="cart_img">
                        <img src={meal.image} alt="" />
                        <p>{meal.title}</p>
                    </div>
                    <div>
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div>
                        <span>{meal.price}</span>
                        <button>remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Price of Your Cart</span>
                <span>Price - {price}</span>
            </div>
        </article>
    )
}

export default Cart