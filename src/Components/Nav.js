import React from 'react'
import styled from 'styled-components'

function Nav() {
    return (
        <Wrapper>
            <h1>Components</h1>
            <List>
                <li>Shop</li>
            </List>
            <List>
                <li>Check Out</li>
            </List>
        </Wrapper>
    )
}

export default Nav

const Wrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
min-height:10vh;
background-color:#313131;
color:white;`

const List = styled.div`
display:flex;
width: 5rem;
justify-content: space-around;
align-items:center;
list-style: none;
cursor: pointer;
&:hover{
    transform: translateY(-2px);
    box-shadow: 0 2px 3px 0 hsl(0 0% 0% / 0.1);; 
};`