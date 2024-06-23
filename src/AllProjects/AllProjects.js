import React from 'react';
import { Carousel } from 'react-bootstrap';

const AllProjects = (props) => {
    const {_id,name,image,image1,image2,description,live,client,server}=props.AllProject;
    return (
    


        <div>
           <div className="row">
                <div className="col-12 col-md-6">
                    <div className='card bg-dark'>
                    
                 <Carousel>
      <Carousel.Item>
      <img
                                    className="img-fluid"
                                    src={image}
                                    alt=""
                                />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
                                    className="img-fluid"
                                    src={image1}
                                    alt=""
                                />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
                                    className="img-fluid"
                                    src={image2}
                                    alt=""
                                />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

                               </div>

                </div>
                <div className="col-12 col-md-6 mt-5">
                    <div className="card project-info bg-dark">
                        <h5>{name}</h5>
                    <p className='bg-dark'>{description}</p>

                    {_id == 1 ? (
                            <div>
                                <li>All the users must be logged in to purchase products. Unauthorized users cannot
purchase products and it will be verified by Google Firebase</li>
                             <li> Authorized users can pay using the stripe payment gateway. They can see the
payment status and transaction id on their order page</li>
<li>Admin can control all the products, orders, and user roles and it will be verified by
JWT. He can change the shipping information of a product</li>
                                <div className="technology-tag">
                                    <button>React.js</button>
                                    <button>Node.js</button>
                                    <button>Express.js</button>
                                    <button>MongoDB</button>
                                    <button>TailwindCSS</button>
                                    <button>Daisy UI</button>
                                    <button>Stripe</button>
                                    <button>JWT</button>
                                    <button>React Toastify</button>
                                    <button>Firebase</button>
                                </div>
                                <div className="mt-3 technology-tag">
                                <a href="https://computer-manufacturer.web.app/" target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-edge-legacy"></i>
                                    </a>
                                    <a href="https://github.com/FaisalMahamudCS/computer-assembler-manufacturer-client" target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                    
                                    <a href="https://github.com/FaisalMahamudCS/computer-assembler-server" target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        ) : _id == 2 ? (
                            <div>
                                <li>The tennis inventory management system is a product stock management
system. Here users can restock products and track delivered items.</li>
<li>An authorized user can manage the product. They can add products and delete
the product. But an unauthorized person cannot manipulate data
</li>
<li>Only authorized users can see my item page, manage items , and add new items
and unauthorized users cannot manipulate it</li>

                                <div className="technology-tag">
                                    <button>React.js</button>
                                    <button>Node.js</button>
                                    <button>Express.js</button>
                                    <button>MongoDB</button>
                                    <button>JWT</button>
                                    <button>Bootstrap</button>
                                    <button>Firebase</button>
                                </div>
                                <div className="mt-3 technology-tag">
                                <a href="https://sports-gear-inventory.web.app/" target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-edge-legacy"></i>
                                    </a>
                                    <a href="https://github.com/FaisalMahamudCS/tennis-inventory-client"  target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://github.com/FaisalMahamudCS/tennis-inventory-server" target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                  
                                    
                                </div>
                            </div>
                        ) :  _id == 3 ? (
                            <div>
                                <li>The personal photography site has a service feature where users can checkout
the service</li>

<li> It has a register section where a new user can register and authorized users can
log in. They will be authenticated by the Google Firebase authentication System</li>
<li>It has a checkout page that private routes where unauthorized users cannot take
service. he has to log in. After login user can checkout</li>
                                <div className="technology-tag">
                                    <button>React.js</button>
                                    
                                
                                    <button>Bootstrap</button>
                                    <button>Firebase</button>
                                    <button>React Icon</button>
                                    
                                </div>
                                
                                

                            
                                <div className="mt-3 technology-tag">
                                <a href="https://fir-auth-photo.web.app/" target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-edge-legacy"></i>
                                    </a>
                                    <a href="https://github.com/FaisalMahamudCS/Faisal-photography" target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                  
                                    <a href={server} target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        ): _id == 4 ? (
                            <div>
                                <li>It is a laptop review website which has review about laptop.</li>
                                <li>It is a single page application which has dyamic route.it change page without reloading</li>
                               <li>In home page it contain the detail about laptop.it has 3 review of users</li>
                               <li>It has review page which contains customer review about the laptop</li>
                               <li>It has dashboard page. and responsive for mobile</li>
                                <div className="technology-tag">
                                    <button>React.js</button>
                                    
                                
                                    <button>Bootstrap</button>
                                   <button>React Router Dom</button>
                                    
                                </div>
                                
                                

                            
                                <div className="mt-3 technology-tag">
                                <a href=" https://laptops-world.netlify.app/" target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-edge-legacy"></i>
                                    </a>
                                    <a href="https://github.com/FaisalMahamudCS/laptop-world" target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                  
                                   
                                </div>
                            </div>
                        ): _id == 5 ? (
                            <div>
                                <li>The site has dynamic cart.user can add to cart.</li>
                                <li>
when they click on choose one it will automatically choose product to cart.</li>
<li>they can remove the product from cart</li>
<li> it is responsive for mobile</li>
                                <div className="technology-tag">
                                <button>React.js</button>
                                    
                                
                                    <button>Bootstrap</button>
                                   <button>CSS</button>
                                    
                                </div>
                                
                                

                            
                                <div className="mt-3 technology-tag">
                                <a href="https://fir-auth-photo.web.app/" target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-edge-legacy"></i>
                                    </a>
                                    <a href="https://github.com/FaisalMahamudCS/Faisal-photography" target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                  
                                    <a href={server} target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>    
                       ):'' 
                        }
                 
                    </div>
                </div>
            </div>
       



</div>
     
    );
};

export default AllProjects;