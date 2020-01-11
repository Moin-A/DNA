import React, { Component } from 'react';
import Link from 'next/link'



const Home = props => (
    <div>
        <p>
            Hey!
            <Link>
            <a href="/Sell">
                Sell!
            </a>
            </Link>
        </p>
    </div>
)

export default Home;







