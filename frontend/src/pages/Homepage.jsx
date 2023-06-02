import React, { Fragment } from 'react'
import Navigation from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Homegrid from '../homegrid/Homegrid'

export default function Homepage() {
  return (  
 <Fragment>
<Navigation/>
 
 <Header/>
 <Homegrid/>
 <Footer/>
 </Fragment>

)
  
}
