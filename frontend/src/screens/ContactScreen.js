
import Container from 'react-bootstrap/esm/Container';
import Form from '../components/Form';


export default function ContactScreen() {
    return (
        <Container>
                   <h1 className="contactheader">Contact</h1>
                   <p className="contactdescription">Our experts are available to answer your questions. 
                   Simply fill out the form below </p>
                   <Form/>
        </Container>
    )
}
