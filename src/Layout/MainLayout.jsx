import React from 'react';
import Header from '../Pages/Share/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;