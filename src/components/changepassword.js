import React, { useState } from "react"
import logo from "../assets/favicon.png"
import "../styles/register.css"
import axios from "axios";

const NewPassword = () => {

	const [password, setPassword] = useState('')

    async function changePassword(event){
        event.preventDefault()

        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')

        const body ={
            email,
            password
        }
        console.log(body)

        try{
            await axios.put('http://localhost:4000/changepassword', body, {headers: {Authorization: `Bearer ${token}`}})
            window.location.href = '/dashboard'
            alert('Senha alterada com sucesso.')
        }catch(err){
            console.log(err)
			alert('Você precisa estar logado para trocar a senha')
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
                        <form onSubmit={changePassword}>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example4">Nova senha</label>
                            <input type="password" id="password-login" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <br/>
                            <input type="submit" className="btn btn-primary btn-block text-uppercase mb-4" value="Trocar senha" />
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

export default NewPassword