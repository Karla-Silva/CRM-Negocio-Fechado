import React from 'react'
import NavigationbarLogout from '../components/navigationbarlogout'
import Footer from '../components/footer'
import DelUser from '../components/deleteuser'

const DeleteUser = () => {
    return (
        <div>
            <NavigationbarLogout/>
			<DelUser/>
			<Footer/>
        </div>
    )
}

export default DeleteUser;