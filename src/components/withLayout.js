import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import CustomFooter from './CustomFooter';

const StyledDiv = styled.div`
    margin: 0 auto;

    @media only screen and (min-width: 64em) {
        max-width: 64rem;
    }
`;

const withLayout = (Component) => {
    return (props) => (
        <div>
            <Navbar />
            <StyledDiv>
                <Component {...props} />
            </StyledDiv>
            <CustomFooter />
        </div>
    );
};

export default withLayout;
