import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Cart = ({ cart, handleAddProduct, handleRemoveProduct }) => {

    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div>
            <CartWrap>
                <h1>Cart</h1>

                {cart.length === 0 &&
                    <div className='cart-empty'> Cart is empty </div>
                }
            </CartWrap>
            <div>
                {cart.map((item) => (
                    <Card>
                        <div key={item.id} className='cart'>
                            <Wrap>
                                <img
                                    className='cart-items'
                                    src={item.image}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                            </Wrap>
                            <Quantity>
                                <button className='product-button' onClick={() => handleRemoveProduct(item)}>
                                    <AiOutlineMinus />
                                </button>
                                <p>{item.quantity}</p>
                                <button className='product-button' onClick={() => handleAddProduct(item)}>
                                    <AiOutlinePlus />
                                </button>
                            </Quantity>
                            <p>${item.price * item.quantity}</p>
                        </div>
                    </Card>
                ))}
                <h3 className='total-price'>Total: ${totalPrice}</h3>
            </div>
        </div>
    )
}

export default Cart

const Card = styled.div`
display:flex;
gap:1rem;
justify-content: space-between;
align-items:center;`

const Wrap = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:30rem;
`

const CartWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:1rem;
`
const Quantity = styled.div`
display:flex;
gap:1rem;
width:6vw;
justify-content:center;
`