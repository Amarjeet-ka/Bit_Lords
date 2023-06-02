import React, { Fragment } from 'react'
import Navigation from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Homegrid from '../homegrid/Homegrid'

export default function Homepage() {
  return (  
 <Fragment>
<Navigation/>
 
 <Header/>
 <Homegrid/>
 </Fragment>

)
  
}
