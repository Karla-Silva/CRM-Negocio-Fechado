import React, {useState} from "react";
import "../styles/dashboard.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const clientCard = ({props}) => {

    const token = localStorage.getItem('token');

    const [necessities, setNecessities] = useState('');

    async function addNecessities(event){
        event.preventDefault()

        const body ={
            necessities
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
                    <form id="addNecessities" onSubmit={addNecessities}>
                        <label className="form-label" htmlFor="necessities">Necessidades do cliente</label>
						<input type="text" id="necessities" className="form-control" name="necessities" value={necessities} onChange={(e) => setNecessities(e.target.value)} required/>
                    </form>
                </Modal.Body>
        		<Modal.Footer>
          			<Button className="btn btn-primary text-uppercase" onClick={handleClose}>
            			Cancelar
          			</Button>
          			<Button form="addNecessities" type="submit" className="btn btn-primary text-uppercase" onClick={handleClose}>
            			Salvar
          			</Button>
        		</Modal.Footer>
      		</Modal>
        </div>
    )
}

export default clientCard;