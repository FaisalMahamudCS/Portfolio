import React from 'react';
import {DiJavascript1} from 'react-icons/di'
const Blog = () => {
    return (
        <div className='container mt-2 mb-2'>
            <h2 className='text-center m-2 text-warning'>Blogs</h2>
            <div className="row">
                <div className="col-12  col-lg-4">

<div className="card h-100  text-center bg-black">
<img src="https://i.ibb.co/6FtQCMK/1012822-code-development-logo-mongodb-programming-icon.png" alt="" className='' srcset="" />

<h3>Blog On MongoDB</h3>
<h5 className='text-muted'>By Faisal Mahamud</h5>
<p>When we will use Node JS when we will use MongoDB</p>
<a href="https://sports-gear-inventory.web.app/blog" className='btn btn-warning text-decoration-none'>Read More</a>
</div>

                </div>
                <div className="col-12  col-lg-4">

<div className="card h-100 text-center bg-black">
    <img src="https://i.ibb.co/FWHxSrp/1012818-code-development-logo-nodejs-icon.png" alt="" srcset="" />

<h3>Blog On Node JS</h3>
<h5 className='text-muted'>By Faisal Mahamud</h5>
<p>When we will use Javascript when we will use Node</p>
<a href="https://sports-gear-inventory.web.app/blog" className='btn btn-warning text-decoration-none'>Read More</a>
</div>

                </div>
                <div className="col-12  col-lg-4">

<div className="card h-100 text-center bg-black">
<img src="https://i.ibb.co/cJGszs2/1174949-js-react-js-logo-react-react-native-icon-3.png" alt="" srcset="" />

<h3>Blog On JS</h3>
<h5 className='text-muted'>By Faisal Mahamud</h5>
<p>How can we improve performance of react app?</p>
<a href="https://computer-manufacturer.web.app/blog" className='btn btn-warning text-decoration-none'>Read More</a>
</div>

                </div>
            </div>
        </div>
    );
};

export default Blog;