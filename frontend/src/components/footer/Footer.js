import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'#04d3f7'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:   <FaInstagram size={28} />  <FaTwitter size={28} />    <FaYoutube size={28} /></span>
        </div>

       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
           

            

           

           
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color:'black' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://EmpowerEducation.com/'>
          EmpowerEducation.com
        </a>
      </div>
    </MDBFooter>
  );
}