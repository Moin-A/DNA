import React, { Component } from 'react';
import styled ,{ThemeProvider,injectGlobal}from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/styles/Header'

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1370px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};


const StyledPage = styled.div`
background: white;
color: black;
`


const MyButton =styled.button `
background: red;
font-size:100px;

`
const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2px;
background: black;
`

injectGlobal`
html{
    box-sizing:border-box;
    font-size:10px;
}
*,*:before,*:after {
    box-sizing:inherit;
}

body {
   
    font-size: 1.7rem;
}
a {
    text-decoration: none;
    color: ${theme.black}
}
`

export class Moin extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
            <StyledPage>
             <Meta />   
            <Header />
            <MyButton><p>Hello</p></MyButton>
            <Inner>{this.props.children}</Inner>
            </StyledPage>
            </ThemeProvider>
            
         
           
        );
    }
}

export default Moin;
