
import React,{useRef} from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {AiOutlineMail} from 'react-icons/ai';
import {BsFillTelephonePlusFill} from 'react-icons/bs';
import {FaRegAddressCard} from 'react-icons/fa';


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
        <div id='contact' className='row container'>
          <div className='mt-5 p-5 bg-dark card col-12 col-lg-6 '>
            <h4 className='text-center text-warning'>Contact Me</h4>
            <p className='text-center'><AiOutlineMail className='text-warning mr-2' size={40}></AiOutlineMail>{"   "}fmfahim1202@gmail.com</p>
            
            <p className='text-center'><BsFillTelephonePlusFill className='mr-2 text-warning' size={40}></BsFillTelephonePlusFill>{" "}{"      "}+8801927549653</p>
            <p className='text-center'><FaRegAddressCard className='mr-2 text-warning' size={40}></FaRegAddressCard>{"   "}Chottogram,Bangladesh</p>

          </div>

           <div className='container col-lg-6 col-12 bg-black    mt-5 '>
            
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
    <textarea name="message" className='form-control'> </textarea>
    
  </Form.Group>
  <input type="submit" value="Send" className="btn btn-warning"/>
  {/* <Button variant="dark" type="submit">
    Send
  </Button> */}

</Form>


    
</div>  
        </div>
    );
};

export default Contacts;