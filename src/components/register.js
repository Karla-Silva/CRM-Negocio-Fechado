import React,{ useState } from "react"
import logo from "../assets/favicon.png"
import "../styles/register.css"
import axios from "axios"

const Register = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [plan, setPlan] = useState('')

	function changePlan(e){
		setPlan(e.target.value)
	}

	async function registerUser(event) {
		event.preventDefault()

		const body = {
			name, 
			email,
			password,
			plan
		}
		console.log(body)
		try{
			const promise = await axios.post('http://localhost:4000/register', body)
			localStorage.setItem('token', promise.data)
			localStorage.setItem('email', email)
			window.location.href = '/dashboard'
		}catch(error){
			alert('Usuário não pode ser registrado. Confira os dados de cadastro e tente novamente.')
			console.log(error)
		}		
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
									<select value={plan} onChange={changePlan} className="form-select" aria-label="Default select example" id="select-plan">
  										<option className="option">Selecione seu plano</option>
										<option className="option" value="Free">Free</option>
  										<option className="option" value="Plus">Plus</option>
  										<option className="option" value="Premium">Premium</option>
									</select>
									<br/>
									<div className="row mb-4">
										<div className="d-flex justify-content-start">
											<p>Já tem uma conta? <a href="/login">Clique aqui</a></p>
										</div>
									</div>
									<button type="submit" className="btn btn-primary btn-block text-uppercase mb-4" value="Cadastrar" id="signup">CADASTRAR</button>
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
