import React from 'react'
import Contact from '../components/Contact/Contact'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children,resumeLink}) => {
  console.log(resumeLink)
  return (
    <Container>
     <Header resumeLink={resumeLink} />
     <main>{children}</main> 
     <Footer/>
     <Contact/>
    </Container>
  )
}
