import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ProjectDetail.css'
import { Carousel } from 'react-bootstrap';


const ProductDetail = (props) => {
  
        //  const {name,image,description}=projectDetail;
        const {_id,name,image,image1,image2,description,live,client,server}=props.AllProjects;
    const {id}=useParams();
    console.log("ID",id,name,)
    console.log(_id)
  
    //fetch data
    console.log(image1)
    console.log(image2)
   
    return (




        <div>
{
    id ==_id ?

<>
<div className="row container">
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

                    {id == 1 ? (
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
                        ) 
                        
                        : id == 2 ? (
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
                        ) :  id == 3 ? (
                            <div>
                                <li></li>
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
                        ):
                        id == 4 ? 
                        (
                            <div>
                                <li>Implemented secure login and registration functionality to ensure user data protection and easy access.</li>
<li>Enabled users to browse and enroll in various courses, providing a seamless and intuitive user experience.
</li>
<li>Integrated Stripe payment gateway allows authorized users to make secure payments for course enrollments.</li>

                                <div className="technology-tag">
                                <button>NextJS</button>
                                <button>Typescript</button>

                                    <button>React.js</button>
                                    <button>Node.js</button>
                                    <button>Express.js</button>
                                    <button>Postgresql</button>
                                    <button>JWT</button>
                                    <button>Tailwind</button>
                                    <button>Firebase</button>
                                </div>
                                <div className="mt-3 technology-tag">
                                <a href="https://skillamplify.vercel.app/" target="blank">
                                        <span>Live</span>
                                        <i class="fab fa-edge-legacy"></i>
                                    </a>
                                    <a href="https://github.com/FaisalMahamudCS/e-learning-frontend"  target="blank">
                                        <span>Client Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://github.com/FaisalMahamudCS/e-learning-backend" target="blank">
                                        <span>Server Slide</span>
                                        <i class="fab fa-github"></i>
                                    </a>
                                  
                                    
                                </div>
                            </div>
                        ) 
                        :''
                        
                        }

                 
                    </div>
                </div>
            </div>
       

</>
:""
}
        
        </div>
    );
};

export default ProductDetail;