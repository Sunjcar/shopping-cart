import React from 'react'
import styled from 'styled-components'
import Computer from '../Images/Computer.jpg'

function Home() {
    return (
        <Wrapper>
            <section>
                <p>
                    The best online store in the world!
                </p>
                <h1>
                    A few clicks is all it takes!
                </h1>
                <button>
                    Shop Now
                </button>
            </section>
                <img className='home-img' src={Computer} alt='Computer Aesthetic' />
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding: 4rem;
gap:5rem;
flex-wrap:wrap;
height:90vh;
background: #9E9EE9;
background: -webkit-radial-gradient(bottom right, #9E9EE9, #FFFFFF);
background: -moz-radial-gradient(bottom right, #9E9EE9, #FFFFFF);
background: radial-gradient(to top left, #9E9EE9, #FFFFFF);`
