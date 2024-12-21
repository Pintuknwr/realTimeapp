import React from 'react';
import {Link,useNavigate} from 'react-router-dom'

const Navbar =()=>{
    const navigate =useNavigate();
    const userstring =localStorage.getItem('user')
    const user=userstring?JSON.parse(userstring):null;

    const handleLogout =()=>{
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link className='navbar-brand' to="/">CoolabTool</Link>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className='navbar-nav me-auto'>
        <li className='nav-item'>
            <Link className='nav-link' to='/dashboard'>Dashboard</Link>

        </li>
      </ul>
      {user ?(
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <button className='btn btn-link
                nav-link' onClick={handleLogout}>{user.username} Logout</button>
            </li>
        </ul>
      ):(
        <ul className='navbar-nav'>
            <li className='nav-item'>
            <Link className='nav-link' to="/login">login</Link>
               
            </li>
            <li className='nav-item'>
            <Link className='nav-link' to="/register">Register</Link>
               
            </li>
            
        </ul>

      )}
    </div>
  </div>
</nav>

    )

}
export default Navbar;


