import React from 'react'
import styled from 'styled-components'

function Shop({ productItems }) {
  return (
    <Wrapper>
      {productItems.map((productItem) => (
        <Card>
          <img
            className='catalog'
            src={productItem.image}
            alt={productItem.name}
          />
          <p>{productItem.name}</p>
          <div className='price'>
            <p>${productItem.price}</p>
            <button> Add To Cart </button>
          </div>
        </Card>
      ))}
    </Wrapper>
  )
}

export default Shop

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
gap:2rem;
padding:2rem;
flex-wrap:wrap;`

const Card = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
justify-content: center;
align-items:center;`
