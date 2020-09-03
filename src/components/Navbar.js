import React from 'react';
import { Box, Nav, Anchor, Menu, Button } from 'grommet';
import { Apps } from 'grommet-icons';
import styled from 'styled-components';
import Emoji from './Emoji';

const StyledNav = styled(Nav)`
    display: none;
    
    @media only screen and (min-width: 48rem) {
        display: flex;
    }
`;

const StyledMenu = styled(Menu)`
    display: flex;

    @media only screen and (min-width: 48rem) {
        display: none;
    }
`;

const Title = styled(Button)`
    font-size: 1.6rem;
    font-weight: bold;
`;

const AppBar = (props) => (
    <Box
        style={{ position: 'sticky', height: '3.5rem' }}
        tag='header'
        direction='row'
        align='center'
        justify='between'
        pad={{ left: 'medium', right: 'small' }}
        {...props}
    />
);

const Navbar = () => {
    const title = (
        <span>
            Fabian Dean&nbsp;
            <Emoji symbol='👋' label='waving hand' />
        </span>
    );

    return (
        <AppBar>
            <Title label={title} plain hoverIndicator />
            <StyledNav direction='row' >
                <Anchor label='Projects' href='#projects' color='black' hoverIndicator focusIndicator={false} />
                <Anchor label='Skills' href='#skills' color='black' hoverIndicator focusIndicator={false} />
                <Anchor label='Contact' href='#contact' color='black' hoverIndicator focusIndicator={false} />
            </StyledNav>
            <StyledMenu
                label={<Apps />}
                icon={false}
                margin='0px 5px 0px 0px'
                items={[
                    { label: 'Projects' },
                    { label: 'Skills' },
                    { label: 'Contact' },
                ]}
            />
        </AppBar>
    );
};

export default Navbar;
