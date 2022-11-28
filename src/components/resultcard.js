import React, {useState} from "react";
import "../styles/dashboard.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const resultCard = ({props}) => {
    const token = localStorage.getItem('token');

    const {clientid} = props;

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    async function deleteClient(event){
        event.preventDefault()

        const headers = {'Authorization': `Bearer ${token}`}

        try{
            await axios.delete(`http://localhost:4000/deleteclient/${clientid}`, {headers: headers});
            handleClose();
        }catch(err){
            console.log(err)
            alert('Houve um erro. Tente novamente')
        }
    }

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
                    <p>Resultado: {props.result}</p>
                </Modal.Body>
        		<Modal.Footer>
          			<Button className="btn btn-primary text-uppercase" onClick={handleClose}>
            			Cancelar
          			</Button>
          			<Button className="btn btn-primary text-uppercase" onClick={deleteClient}>
            			Excluir
          			</Button>
        		</Modal.Footer>
      		</Modal>
        </div>
    )
}

export default resultCard;