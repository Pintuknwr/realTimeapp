import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login =()=>{
    
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState('');
    const navigate =useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
    }
    return (
        <div className='container'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Enail-Address</label>
                    <input type='email'
                    className='form-control' id='email' value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                    required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password'
                    className='form-control' id='password' value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    required/>
                </div>
                <button type="submit" className='bt btn-primary'>Register</button>
            </form>
            {error && <p className='text-danger mt-3'>{error}</p>}
            <p>Don't have an account ? <a href='/'>Register</a></p>
        </div>
    )

};
export default Login;