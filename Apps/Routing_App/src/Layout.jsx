import React from "react";
import { Nav,NavbarBrand } from "react-bootstrap";
import { Link,Outlet } from "react-router-dom";
function Layout()
{
    return (
        <>
          <Nav className="nav navbar p-4 bg-info">
          <NavbarBrand className="ms-5 text-dark">Ecommearce Web</NavbarBrand>
          {/* navbar */}
          <ul className="nav-link">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About</Link></li>
            <li><Link to='/our-product'>Products</Link></li>
            <li><Link to=''>Offers</Link></li>
            <li><Link to=''>Gallery</Link></li>
            <li><Link to=''>Contact Us</Link></li>
          </ul>
          </Nav>

          <Outlet />

        </>
    )
}
export default Layout