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

    :focus {
        box-shadow: none !important;
    }

    @media only screen and (min-width: 48rem) {
        display: none;
    }
`;

const Title = styled(Button)`
    font-size: 1.6rem;
    font-weight: bold;
`;

const StyledAnchor = styled(Anchor)`
    :focus {
        box-shadow: none !important;
    }
`;

const StyledBox = styled(Box)`
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.97);
    height: 3.5rem;
`;

const AppBar = (props) => (
    <StyledBox
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
                <StyledAnchor label='Projects' href='#projects' color='black' hoverIndicator />
                <StyledAnchor label='Skills' href='#skills' color='black' hoverIndicator />
                <StyledAnchor label='Contact' href='#contact' color='black' hoverIndicator />
            </StyledNav>
            <StyledMenu
                dropAlign={{ right: 'right', top: 'top' }}
                icon={<Apps />}
                items={[
                    { label: 'Projects', href: '#projects' },
                    { label: 'Skills', href: '#skills' },
                    { label: 'Contact', href: '#contact' },
                ]}
            />
        </AppBar>
    );
};

export default Navbar;
