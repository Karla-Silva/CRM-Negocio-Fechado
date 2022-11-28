import React, {useState} from "react";
import "../styles/dashboard.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const necessitiesCard = ({props}) => {
    const token = localStorage.getItem('token');

    const [proposal, setProposal] = useState('');
    const {clientid} = props;

    async function addProposal(event){
        event.preventDefault();

        const body = {
            proposal,
            clientid
        }

        const headers = {'Authorization': `Bearer ${token}`}

        try{
            await axios.put('http://localhost:4000/addproposal', body, {headers: headers})
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
          			<Modal.Title>Adicionar proposta</Modal.Title>
        		</Modal.Header>
        		<Modal.Body>
                    <p>Nome: {props.clientName}</p>
                    <p>E-mail: {props.clientEmail}</p>
                    <p>Necessidades: {props.necessities}</p>
                    <form id="addProposal" onSubmit={addProposal}>
                        <label className="form-label" htmlFor="proposal">Proposta: </label>
						<input type="text" id="proposal" className="form-control" name="proposal" value={proposal} onChange={(e) => setProposal(e.target.value)} required/>
                    </form>
                </Modal.Body>
        		<Modal.Footer>
          			<Button className="btn btn-primary text-uppercase" onClick={handleClose}>
            			Cancelar
          			</Button>
          			<Button form="addProposal" type="submit" className="btn btn-primary text-uppercase" onClick={handleClose}>
            			Salvar
          			</Button>
        		</Modal.Footer>
      		</Modal>
        </div>
    )
}

export default necessitiesCard;