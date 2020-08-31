import React from 'react';
import Header from './Header';
import Footer from './Footer';

const withLayout = (Component) => {
    return (props) => (
        <div>
            <Header />
            <Component {...props} />
            <Footer />
        </div>
    );
};

export default withLayout;
