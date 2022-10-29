import React from "react"
import Navigationbar from '../components/navigationbar'
import Footer from '../components/footer'
import PlansTypes from "../components/planspage"

const PlansPage = () => {
    return (
        <div>
            <Navigationbar/>
            <PlansTypes/>
            <Footer/>
        </div>
    )
}

export default PlansPage