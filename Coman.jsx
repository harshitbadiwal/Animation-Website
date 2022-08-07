import React from "react";
import { NavLink } from "react-router-dom";
const Coman =(props)=>{
    return<>
<section id='header' className='d-flex align-item-center mt-5'>
    <div className="contanier-fulid ">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className='row'>
              <div className='col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <h1>
                  {props.name}
                  <strong className="brand-name"> Our Site</strong>
                </h1>
                <h5 className='my-3'>
                  We are the team of talented developer making websites
                </h5>
                <div className='mt-3'>
                  <NavLink to={props.visit}><button type="button" class="btn btn-outline-dark"> {props.btn} </button></NavLink>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.img} className="img-fluid animated" alt='home img'/>
              </div>
              </div>
        </div>
        </div>
        </div>

    </section>
    </>
}
export default Coman