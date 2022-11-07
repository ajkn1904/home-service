import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">HOME</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/signin">SIGN IN</Link>
            <Link to="/register">REGISTER</Link>
        </div>
    );
};

export default Header;