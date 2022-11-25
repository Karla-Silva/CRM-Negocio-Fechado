import React from "react"
import logo from "../assets/favicon.png"
import "../styles/register.css"
import axios from "axios";

const DelUser = () => {

    async function delUser(event){
        event.preventDefault()

        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')

        console.log(token)

        try{
            await axios.delete('http://localhost:4000/delete', {
                 data: {email: email}, headers: {Authorization: `Bearer ${token}`} 
                })
            window.location.href = '/'
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            alert('Conta deletada com sucesso.')
        }catch(err){
            console.log(err)
			alert('Não foi possível deletar o usuário')
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
                        <form>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example4">Deletar usuário</label>
                            <p>Deseja realmente deletar sua conta? Esta ação não é reversível.</p>
                        </div>
                        <br/>
                            <input onClick={delUser} className="btn btn-primary btn-block text-uppercase mb-4" defaultValue="Deletar" />
                            <a href="dashboard">
                            <input href="dashboard" className="btn btn-primary btn-block text-uppercase mb-4" defaultValue="Cancelar" />
                            </a>
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

export default DelUser;