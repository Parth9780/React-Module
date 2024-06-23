import React from 'react'
import { Nav, NavbarBrand} from 'react-bootstrap'

function Header(){
    return(
        <>
            <Nav className='nav navbar navbar-expand-md bg-dark p-2'>
                <NavbarBrand className='text-white'>My App</NavbarBrand>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Applications</a></li>
                    <li><a href="">Contact us</a></li>

                </ul>
            </Nav>
        </>
    )
}
export default Header