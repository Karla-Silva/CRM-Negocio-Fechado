import React, { useState, useEffect } from "react"
import "../styles/dashboard.css"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from "axios"
import ClientCard from "./clientcard"

const DB = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [proposal, setProposal] = useState('');
    const [result, setResult] = useState('');

    const [clientList, setClientList] = useState([]); 

    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')

    useEffect( ()=>{
        const promise = axios.get(`http://localhost:4000/getclients/${email}`, {headers: {'Authorization': `Bearer ${token}`}})
        promise.then((response) => {
            setClientList(response.data)
        }).catch((error) => {
            console.log(error);
        })
   },[clientList])

    async function createClient(event){
        event.preventDefault()
        const body ={
            email,
            clientName,
            clientEmail
        }

        const headers = {
            'Authorization': `Bearer ${token}`
        }

        try{
            await axios.post('http://localhost:4000/createclient', body, {headers: headers})
        }catch(err){
            console.log(err)
            alert('Houve um erro. Tente novamente')
        }
    }

    

    async function addProposal(event){
        event.preventDefault()

        const body ={
            proposal
        }

        const headers = {
            'Authorization': `Bearer ${token}`
        }

        try{

        }catch(err){
            console.log(err)
            alert('Houve um erro. Tente novamente')
        }

    }

    async function addResult(event){
        event.preventDefault()

        const body ={
            result
        }

        const headers = {
            'Authorization': `Bearer ${token}`
        }

        try{

        }catch(err){
            console.log(err)
            alert('Houve um erro. Tente novamente')
        }

    }

    async function deleteClient(event){
        event.preventDefault()

    }	

	return (
        <section className="column">
            <div>
                <h2>Instruções:</h2>
                <ol>
                    <li>Adicione o nome, e-mail e telefone do seu cliente.</li>
                    <li>Adicione as necessidades do seu cliente. 
                    Qual as características do problema do seu cliente?</li>
                    <li>Elabore a proposta a ser enviada para o seu cliente. 
                    Coloque o orçamento e em quantos dias o trabalho será entregue.</li>
                    <li>Adicione o feedback do seu cliente. Diga se o negócio foi fechado ou não e porquê.</li>
                 </ol>
            </div>
            <div className="todas-etapas">
                <div className="etapa">
                    <h3>Clientes</h3>
                    <Button className="btn btn-dark" onClick={handleShow}>ADICIONAR CLIENTE</Button>
					<Modal show={show} onHide={handleClose}>
        				<Modal.Header closeButton>
          					<Modal.Title>Adicionar cliente</Modal.Title>
        				</Modal.Header>
        				<Modal.Body>
                            <form id="createClient" onSubmit={createClient}>
                                <label className="form-label" htmlFor="clientName">Nome</label>
							    <input type="text" id="clientName" className="form-control" name="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} required/>
                                <label className="form-label" htmlFor="clientEmail">E-mail</label>
							    <input type="email" id="clientEmail" className="form-control" name="clientEmail" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required/>
                            </form>
                        </Modal.Body>
        				<Modal.Footer>
          					<Button className="btn btn-primary text-uppercase" onClick={handleClose}>
            					Cancelar
          					</Button>
          					<Button form="createClient" type="submit" className="btn btn-primary text-uppercase" onClick={handleClose}>
            					Salvar
          					</Button>
        				</Modal.Footer>
      				</Modal>
                    { clientList.map( (client) => (<div key={client.clientid}>{<ClientCard props={client}/>}</div>)  ) }
                </div>
                <div className="etapa">
                    <h3>Necessidades do cliente</h3>
                </div>
                <div className="etapa">
                    <h3>Proposta</h3>
                </div>
                <div className="etapa">
                    <h3>Negócio Fechado</h3>
                </div>
            </div>
        </section>
    )
}

export default DB