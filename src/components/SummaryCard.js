import React from 'react';
import { Linkedin, Github, Twitter } from 'grommet-icons';
import styled from 'styled-components';

const Container = styled.div(({ noPadding, column, justifyContent, alignItems }) => `
    padding: ${noPadding ? '' : '1rem'};
    display: flex;
    flex-direction: ${column ? 'column' : 'row'};
    justify-content: ${justifyContent || ''};
    align-items: ${alignItems || ''};
`);

const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 5px 20px grey;
    margin: 0 auto;
    overflow: hidden;

    @media only screen and (min-width: 24rem) {
        flex-direction: column;
    }
`;

const Header = styled.div`
    display: flex;
    font-size: 0.8rem;
    justify-content: space-between;
    padding: 0 1rem;
    border-bottom: 1px solid grey;
    width: 100%;

    @media only screen and (min-width: 24rem) {
        font-size: 1rem;
        width: inherit;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media only screen and (min-width: 38rem) {
        flex-direction: row;
    }
`;

const Portrait = styled.div`
    height: 20rem;
    width: 100%;
    border-radius: 10px;
    align-self: center;
    background-color: skyblue;

    @media only screen and (min-width: 46rem) {
        height: 22rem;
        width: 16rem;
    }
    
    @media only screen and (min-width: 38rem) {
        height: 16rem;
        width: 14rem;
    }
`;

const FieldName = styled.span`
    font-size: 0.8rem;
    margin-right: 1rem;
`;

const FieldContent = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
`;

const IconsList = styled.div`
    display: flex;
    justify-content: space-around;
    width: 10rem;

    @media only screen and (min-width: 24rem) {
        max-width: 16rem;
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

    const socialsSection = (
        <IconsList>
            <Linkedin />
            <Github />
            <Twitter />
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
                    <Portrait />
                </Container>
                <Container justifyContent='space-around'>
                    {fieldNameSection}
                    {fieldContentSection}
                    <Spacer />
                </Container>
                <Spacer />
                <Container noPadding justifyContent='center'>
                    {socialsSection}
                </Container>
            </Body>
        </Card >
    );
};

export default SummaryCard;
