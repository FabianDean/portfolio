import React from 'react';
import Navbar from './Navbar';
import CustomFooter from './CustomFooter';

const withLayout = (Component) => {
    return (props) => (
        <div>
            <Navbar />
            <Component {...props} />
            <CustomFooter />
        </div>
    );
};

export default withLayout;
