import React, {useEffect} from 'react';
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'

const Commission = () => {
      useEffect(() => {
        document.title = "محاسبه کمیسیون";
      }, []);
    return (
        <div>
            <Header/>
            <h1>commission page</h1>
            <Footer/>
        </div>
    );
};

export default Commission;