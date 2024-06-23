import React from "react";
import Header from './Components/Customer/Header';
import Navbar from './Components/Customer/Navbar';
import Content from './Components/Customer/Content';
import Footer from "./Components/Customer/Header";
function Layout()
{
    return (
        <>
        <Header />
        <Navbar />
        <Content />
        <Footer />

        </>
    )
}
export default Layout