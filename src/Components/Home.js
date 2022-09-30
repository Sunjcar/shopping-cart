import React from 'react'
import styled from 'styled-components'
import computer from '/home/rc/repos/shopping-cart/src/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg'

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
            <Img>
                <img src={computer} alt='something beautiful' />
            </Img>
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

const Img = styled.div`
display: flex;
width: 350px;
height: 350px;
border-radius: 16px;`
