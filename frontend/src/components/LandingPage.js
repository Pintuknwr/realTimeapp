import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage=()=>{
    return (
        <div className='container text-center mt-5'>
            <div className='jumbtron bg-light p-5'>
                <h1 className='display-4'>Welcome to collabTool</h1> 
                <p className='lead'>
                    CollabTool is your go-to platform for seamless-real Time collabration.
                    You can work together on documents, share thoughts and communicate
                    with your team.
                </p>
                <div className='mt-4'>
                    <Link to="/register" className='btn btn-primary btn-lg me-3'>Register</Link>
                    <Link to="/login" className='btn btn-secondary btn-lg'>Login</Link>

                </div>
            </div>
        </div>
    )
}
export default LandingPage;