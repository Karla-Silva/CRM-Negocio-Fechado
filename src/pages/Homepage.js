import React, {Fragment} from 'react'
import Navigationbar from '../components/navigationbar'
import Header from '../components/header'
import Services from '../components/services'
import Plans from '../components/plans'
import Footer from '../components/footer'
import '../assets/favicon.png'

const Homepage = () => {
    return(
        <Fragment>
            <Navigationbar/>
            <Header/>
            <Services/>
            <Plans/>
            <Footer/>
        </Fragment>
    )
}

export default Homepage;