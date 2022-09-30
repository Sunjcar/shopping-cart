import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration:'none'
    }
    return (
        <Wrapper>
            <h1>Components</h1>
            <Link style={navStyle} to='/'>
                <List>
                    <li>
                        Home
                    </li>
                </List>
            </Link>
            <Link style={navStyle} to='catalog'>
                <List>
                    <li>Shop</li>
                </List>
            </Link>
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