import React from 'react'
import NavigationbarLogout from '../components/navigationbarlogout'
import Footer from '../components/footer'
import NewPassword from '../components/changepassword'

const ChangePassword = () => {
    return (
        <div>
            <NavigationbarLogout/>
			<NewPassword/>
			<Footer/>
        </div>
    )
}

export default ChangePassword