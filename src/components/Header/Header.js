import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.svg';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext)



  return (
    <div><div className="navbar bg-green-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="https://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link to="/" className='btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>HOME</Link>
            <Link to="/blog" className='btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>BLOG</Link>
            <Link to="/services" className='btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>SERVICES</Link>

            {/* conditional rendering */}

            {user?.uid ?
              <>
                <Link to="/addservice" className='mx-4 btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>ADD SERVICE</Link>
                <Link to="/myreviews" className='mx-4 btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>MY REVIEWS</Link>
                <button className="btn btn-ghost normal-case" onClick={userSignOut}>LOG OUT</button>
              </>
              :
              <>
                <button className="btn btn-ghost normal-case"><Link to="/login" className='mx-4 hover:border-b-4 border-b-green-900'>LOG IN</Link></button>
                <button className="btn btn-ghost normal-case"><Link to="/register" className='mx-4 hover:border-b-4 border-b-green-900'>REGISTER</Link></button>
              </>
            }
          </ul>
        </div>


        <>
          <img src={Logo} alt="logo" style={{ borderRadius: "5px" }} />
          <Link to="/" className="mx-2 font-bold normal-case text-xl italic">HOMEservice</Link>
        </>
        <p className='ml-[30%] w-[200px] italic'>{user?.displayName}</p>
      </div>



      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <Link to="/" className='mx-4 btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>HOME</Link>
          <Link to="/blog" className='mx-4 btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>BLOG</Link>
          <Link to="/services" className='mx-4 btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>SERVICES</Link>


          {/* conditional rendering  */}


          {user?.uid ?
            <>
              <Link to="/addservice" className='mx-4 btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>ADD SERVICE</Link>
              <Link to="/myreviews" className='mx-4 btn btn-ghost normal-case hover:border-b-4 border-b-green-900'>MY REVIEWS</Link>
              <button className="btn btn-ghost normal-case" onClick={userSignOut}>LOG OUT</button>
            </>
            :
            <>
              <button className="btn btn-ghost normal-case"><Link to="/login" className='mx-4 hover:border-b-4 border-b-green-900'>LOG IN</Link></button>
              <button className="btn btn-ghost normal-case"><Link to="/register" className='mx-4 hover:border-b-4 border-b-green-900'>REGISTER</Link></button>
            </>
          }
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;