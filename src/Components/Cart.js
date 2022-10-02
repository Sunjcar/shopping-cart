import React from 'react'
import styled from 'styled-components'

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Cart Items</h1>
            {cart.length === 0 &&
                <div className='cart-empty'> Cart is empty </div>
            }
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
                            <p>{item.quantity}</p>
                            <p>${item.price}</p>
                        </div>
                    </Card>
                ))}
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