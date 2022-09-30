import React from 'react'
import styled from 'styled-components'
import Erbology from '../Images/Erbology.jpg'
import Shoes from '../Images/PumaShoes.jpg'
import Watch from '../Images/Watch.jpg'
import Tea from '../Images/Tea.jpg'
import Camera from '../Images/Camera.jpg'
import Glasses from '../Images/Sunglasses.jpg'

function Shop() {
  return (
    <Wrapper>
      <Card>
        <img src={Erbology} alt='Self-Care Product' className='catalog' />
        <p>Erbology 3 Set Self-Care Package</p>
      </Card>
      <Card>
        <img src={Shoes} alt='Puma Shoes' className='catalog' />
        <p> All Star Puma Black/White Sneakers</p>
      </Card>
      <Card>
        <img src={Watch} alt='White Watch' className='catalog' />
        <p> Slick Wrist Watch</p>
      </Card>
      <Card>
        <img src={Tea} alt='Japanese Tea' className='catalog' />
        <p> Fine Japanese Tea</p>
      </Card>
      <Card>
        <img src={Camera} alt='Camera' className='catalog' />
        <p> Black Olympus Pen Camera</p>
      </Card>
      <Card>
        <img src={Glasses} alt='Sunglasses' className='catalog'/>
        <p>Black Rayban Sunglasses</p>
      </Card>
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