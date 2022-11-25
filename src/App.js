import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PlansPage from './pages/PlansPage'
import ChangePassword from './pages/ChangePassword'
import DeleteUser from './pages/DeleteUser'

const RoutesApp = () => {
	let routes = useRoutes([
		{path:"/", element:<Homepage/>},
		{path:"/login", element:<Login/>},
		{path:"/register", element:<Register/>},
		{path:"/dashboard", element:<Dashboard/>}, 
		{path:"/plans", element:<PlansPage/>},
		{path:"/changepassword", element:<ChangePassword/>},
		{path:"/deleteuser", element:<DeleteUser/>}
	])
	return routes
}

const App = () => {
	return (
		<Router>
			<RoutesApp />
		</Router>
	)
}

export default App
