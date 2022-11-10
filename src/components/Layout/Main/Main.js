import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import SubNav from '../../SubNav/SubNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <SubNav></SubNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;