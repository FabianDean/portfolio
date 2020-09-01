import React from 'react';
import { Footer, Text } from 'grommet';
import styled from 'styled-components';

const StyledText = styled(Text)`
    width: 100%;
    text-align: center;
`;

const CustomFooter = () => {
    return (
        <Footer height='3rem' margin='none' pad="xxsmall" >
            <StyledText>Copyright © 2020 Fabian Dean</StyledText>
        </Footer >
    );
};

export default CustomFooter;
