import React from 'react';
import { Footer, Text, Anchor } from 'grommet';
import styled from 'styled-components';

const StyledText = styled(Text)`
    width: 100%;
    text-align: center;
`;

const CustomFooter = () => {
    return (
        <Footer height='50px' margin='none' pad="xsmall" >
            <StyledText>Copyright © 2020 Fabian Dean </StyledText>
        </Footer >
    );
};

export default CustomFooter;
