
import React,{useRef} from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contacts.css'
const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5vqr959', 'template_y9lzrae', form.current, '-WBBPB6Jo4hich6Q8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
           <div className='container col-lg-6 col-sm-12 bg-card  mx-auto  mt-5 '>
            
            <Form ref={form} onSubmit={sendEmail} className='p-5 '>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  placeholder="Enter email" name="user_mail" required/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" name="user_name" required/>
  </Form.Group>
 
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <textarea name="message" className='form-control' cols="30" rows="8"> </textarea>
    
  </Form.Group>
  <input type="submit" value="Send" className="btn btn-success"/>
  {/* <Button variant="dark" type="submit">
    Send
  </Button> */}

</Form>


    
</div>  
        </div>
    );
};

export default Contacts;