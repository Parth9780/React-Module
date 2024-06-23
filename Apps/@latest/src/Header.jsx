import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navbar from './Navbar';

function Header()
{
return(
    <>
        <Container fluid className='p-3 shadow'>
            <Row>
                <div className="col-md-4 p-3">
                    <span className='bi bi-telephone'>Call Us (+91)6354287550</span>
                </div>
                <div className='col-md-4 p-3'>
                    <input type="text" name='search' placeholder='Search items hear...' className='' />
                </div>
                <div className='col-md-4 p-3'>
                    <span className='bi bi-facebook fs-3'></span>
                    <span className='bi bi-twitter ps-2 fs-3'></span>
                    <span className='bi bi-instagram ps-2 fs-3'></span>
                    <span className='bi bi-whatsapp ps-2 fs-3'></span>

                </div>
            </Row>
        </Container>

        <Navbar />
    </>

)
}
export default Header