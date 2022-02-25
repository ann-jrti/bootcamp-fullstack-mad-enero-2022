import './style.css'
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import ageRestriction from '../../context/restriction';
import { useContext } from 'react';

function AcceptConditions() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [age, updateAge] = useContext(ageRestriction);


    // console.log(searchParams.toString());
    // console.log(searchParams.get('hola'));

    const userAcceptedConditions = (e) => {
        console.log(age);
        updateAge(true);
        console.log(age);
        navigate(searchParams.get('redirect') ?? '/');
    }

    return (
        <Container className="justify-content-center">

            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>ADULTS ONLY!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>This website contains alcoholic drinks.</p>
                    <p>You need to be +18</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button className="justify-content-center" onClick={userAcceptedConditions} variant="warning">I'm +18</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Container>

    )
}

export default AcceptConditions;