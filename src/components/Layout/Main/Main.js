import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SubNav from '../../SubNav/SubNav';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    const [theme, setTheme] =useState('night');
    const darkMode = localStorage.getItem('data-theme');

    return (
        <div data-theme={`${darkMode}`}>
            <Header theme={theme} setTheme={setTheme}></Header>
            <SubNav></SubNav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Main;