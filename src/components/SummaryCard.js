import React from 'react';
import * as simpleIcons from '@styled-icons/simple-icons';
import styled from 'styled-components';

const Container = styled.div(({ noPadding, column, justifyContent, alignItems }) => `
    padding: ${noPadding ? '' : '1rem'};
    display: flex;
    flex-direction: ${column ? 'column' : 'row'};
    justify-content: ${justifyContent || ''};
    align-items: ${alignItems || ''};
`);

const Card = styled.div`
    display: block;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
    margin: 0 auto;

    @media only screen and (min-width: 24rem) {
        flex-direction: column;
        max-width: 52rem;
    }
`;

const Header = styled.div`
    display: flex;
    font-size: 0.8rem;
    justify-content: space-between;
    padding: 0 1rem;
    border-bottom: 1px solid grey;

    @media only screen and (min-width: 48rem) {
        font-size: 1rem;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media only screen and (min-width: 48rem) {
        flex-direction: row;
    }
`;

const Portrait = styled.img`
    height: 40vh;
    width: 100%;
    max-width: 30rem;
    border-radius: 10px;
    align-self: center;
    background-color: whitesmoke;
    object-fit: cover;
    object-position: 70% 60%; 

    @media only screen and (min-width: 48rem) {
        height: 22rem;
        width: 16rem;
        object-position: 70% 0; 
    }
`;

const FieldName = styled.span`
    font-size: 0.8rem;
    margin-right: 1rem;
`;

const FieldContent = styled.span`
    font-size: 1.2rem;
    font-weight: bold;

    @media only screen and (min-width: 38rem) {
        font-size: 1.4rem;
    }
`;

const IconsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    column-gap: 1rem;
    width: 14rem;

    @media only screen and (min-width: 24rem) {
        max-width: 30rem;
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

const SummaryCard = () => {
    const fieldNameSection = (
        <Container alignItems='flex-end' noPadding column>
            <FieldName>FN</FieldName>
            <FieldName>LN</FieldName>
            <Spacer />
            <FieldName>Focus</FieldName>
            <Spacer />
            <FieldName>Degree</FieldName>
            <FieldName>Major</FieldName>
            <FieldName>School</FieldName>
        </Container>
    );

    const fieldContentSection = (
        <Container noPadding column>
            <FieldContent>Fabian Dean</FieldContent>
            <FieldContent>Flores</FieldContent>
            <Spacer />
            <FieldContent>Web & Mobile Apps</FieldContent>
            <Spacer />
            <FieldContent>Bachelor of Science</FieldContent>
            <FieldContent>Computer Science</FieldContent>
            <FieldContent>Cal Poly Pomona</FieldContent>
        </Container>
    );

    const iconStyle = {
        height: '2.5rem',
        color: 'black',
    }

    const socialsSection = (
        <IconsList>
            <a href='https://linkedin.com/in/FabianDean' rel='noopener noreferrer' target='_blank'><simpleIcons.Linkedin style={iconStyle} /></a>
            <a href='https://github.com/FabianDean' rel='noopener noreferrer' target='_blank'><simpleIcons.Github style={iconStyle} /></a>
            <a href='https://twitter.com/FabianDean_dev' rel='noopener noreferrer' target='_blank'><simpleIcons.Twitter style={iconStyle} /></a>
        </IconsList>
    );

    return (
        <Card>
            <Header>
                <h1>Software Engineer</h1>
                <h1>{'</>'}</h1>
            </Header>
            <Body>
                <Container noPadding column>
                    <Portrait src='portrait.jpg' />
                </Container>
                <Container justifyContent='space-around'>
                    {fieldNameSection}
                    {fieldContentSection}
                    <Spacer />
                </Container>
                <Spacer />
                <Container noPadding justifyContent='space-evenly'>
                    {socialsSection}
                </Container>
            </Body>
        </Card>
    );
};

export default SummaryCard;
