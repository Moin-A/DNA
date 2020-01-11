import React, { Component } from 'react';
import Link from 'next/link'
import NavStyles from '../components/styles/NavStyles'



const Nav =() => (
     <NavStyles>

        <Link href="/Sell">
                <a>Sell!</a>
        </Link>
        <Link href="/">
                <a>Home!</a>
        </Link>
       
    
     </NavStyles>
           
)


export default Nav;
