import React, {useState} from "react";
import "../styles/dashboard.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const proposalCard = ({props}) => {
    const token = localStorage.getItem('token');

    const [result, setResult] = useState('');
    const {clientid} = props;

    async function addResult(event){
        event.preventDefault()

        const body ={
            result,
            clientid
        }

        const headers = {'Authorization': `Bearer ${token}`}

        try{
            await axios.put('http://localhost:4000/addresult', body, {headers: headers})
        }catch(err){
            console.log(err)
            alert('Houve um erro. Tente novamente')
        }
    }

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    
    return(
        <div>
            <Button className="cards" onClick={handleShow}>{props.clientName}</Button>
            <Modal show={show} onHide={handleClose}>
        		<Modal.Header closeButton>
          			<Modal.Title>Adicionar necessidades do cliente</Modal.Title>
        		</Modal.Header>
        		<Modal.Body>
                    <p>Nome: {props.clientName}</p>
                    <p>E-mail: {props.clientEmail}</p>
                    <p>Necessidades do cliente: {props.necessities}</p>
                    <p>Proposta: {props.proposal}</p>
                    <form id="addResult" onSubmit={addResult}>
                        <label className="form-label" htmlFor="result">Resultado: </label>
						<input type="text" id="result" className="form-control" name="result" value={result} onChange={(e) => setResult(e.target.value)} required/>
                    </form>
                </Modal.Body>
        		<Modal.Footer>
          			<Button className="btn btn-primary text-uppercase" onClick={handleClose}>
            			Cancelar
          			</Button>
          			<Button form="addResult" type="submit" className="btn btn-primary text-uppercase" onClick={handleClose}>
            			Salvar
          			</Button>
        		</Modal.Footer>
      		</Modal>
        </div>
    )
}

export default proposalCard;