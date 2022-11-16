import React,{ useState } from "react"
import { useNavigate } from 'react-router-dom'
import logo from "../assets/favicon.png"
import "../styles/register.css"
 
const Register = () => {
    const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [plan, setPlan] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
				plan
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate.push('/dashboard')
		}

		console.log(data)
	}

	return (
		<section className=" justify-content-center align-items-center d-flex">
        	<div className=" px-md-5 text-center text-lg-start">
				<div className="container">
					<div className="row gx-lg-5 align-items-center">
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
			
					<div className="col-lg-6 mb-5 mb-lg-0">
						<div className="card">
							<div className="card-body py-5 px-5">
								<form onSubmit={registerUser} >
									<div className="row">
										<div className="form-outline mb-4">
											<label className="form-label" htmlFor="form3Example1">Nome</label>
											<input type="text" id="form3Example1" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
										</div>
									</div>
									<div className="form-outline mb-4">
										<label className="form-label" htmlFor="form3Example2">Email</label>
										<input type="email" id="form3Example2" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
									</div>
									<div className="form-outline mb-4">
										<label className="form-label" htmlFor="form3Example3">Senha</label>
										<input type="password" id="form3Example3" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
									</div>
									<label className="form-label" htmlFor="select-plan">Plano</label>
									<select class="form-select" aria-label="Default select example" id="select-plan">
  										<option value="1" onChange={(e) => setPlan(e.target.value)}>Free</option>
  										<option value="2" onChange={(e) => setPlan(e.target.value)}>Plus</option>
  										<option value="3" onChange={(e) => setPlan(e.target.value)}>Premium</option>
									</select>
									<br/>
									<div className="row mb-4">
										<div className="d-flex justify-content-start">
											<p>Já tem uma conta? <a href="/login">Clique aqui</a></p>
										</div>
									</div>
									<input type="submit" className="btn btn-primary btn-block text-uppercase mb-4" value="Cadastrar" id="signup"/>
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

export default Register
