import React, { useState } from "react"
import logo from "../assets/favicon.png"
import "../styles/register.css"
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const body = {
			email,
			password
		}
		
		try{
			const promise = await axios.post('https://crm-api-6ska.onrender.com/login', body)
			localStorage.setItem('token', promise.data)
			window.location.href = '/dashboard'
		}catch(err){
			console.log(err)
			alert('Usuário ou senha incorretos')
		}
	
	}

	return (
		<section>
			<div className="px-4 py-5 px-md-5 text-center text-md-start">
			    <div className="container">
				<div className="row gx-md-5 align-items-center">
				    <div className="col-md-6 mb-5 mb-md-0">
					<div className="nav-brand">
					    <a className="navbar-brand text-uppercase" href="/"><img src={logo} alt="logomarca da CRM Negócio Fechado"/>
									negócio fechado
					    </a>
					</div>
					<h1 className="my-4 fw-bold ls-tight">
					As melhores soluções <br/>
					<span>para sua empresa</span>
					</h1>
				    </div>

				<div className="col-md-6 mb-5 mb-md-0">
				    <div className="card">
					<div className="card-body py-5 px-md-5">
					    <form onSubmit={loginUser}>

						<div className="form-outline mb-3">
							<label className="form-label" htmlFor="form3Example3">Email</label>
							<input type="email" id="form3Example3" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@email.com"/>
						</div>
						<br></br>
						<div className="form-outline mb-4">
							<label className="form-label" htmlFor="form3Example4">Senha</label>
							<input type="password" id="password-login" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						</div>
						<br/>
						<div className="row mb-4">
						    <div className="d-flex justify-content-start">
							<p>Não tem uma conta? <a href="/register">Clique aqui</a></p>
						    </div>
						</div>
						    <input type="submit" className="btn btn-primary btn-block text-uppercase mb-4" value="Entrar" />
					    </form>
					</div>
				    </div>
				</div>
			    </div>
			</div>
		</div>
    	</section>
    )
}

export default Login