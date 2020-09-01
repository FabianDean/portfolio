import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0 5px 20px grey;
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
`;

const Header = styled.div`
    display: flex;
    font-size: 0.8rem;
    justify-content: space-between;
    padding: 0 1rem;
    border-bottom: 1px solid black;

    @media only screen and (min-width: 48rem) {
        font-size: 1rem;
    }
`;

const Container = styled.div(({ noPadding, column, justifyContent }) => `
    padding: ${noPadding ? '' : '1rem'};
    display: flex;
    flex-direction: ${column ? 'column' : 'row'};
    justify-content: ${justifyContent || ''};
`);

const Portrait = styled.div`
    height: 20rem;
    width: 14rem;
    border-radius: 10px;
    align-self: center;
    background-color: skyblue;

    @media only screen and (min-width: 48rem) {
        height: 22rem;
        width: 16rem;
    }
`;

const FieldName = styled.span`
    font-size: 1rem;
    margin-right: 1rem;
`;

const FieldContent = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
`;

const SummaryCard = () => {
    const nameSection = (
        <Container noPadding column>
            <Container noPadding>
                <FieldName>FN</FieldName>
                <FieldContent>Fabian Dean</FieldContent>
            </Container>
            <Container noPadding>
                <FieldName>LN</FieldName>
                <FieldContent>Flores</FieldContent>
            </Container>
        </Container>
    );

    const focusSection = (
        <Container noPadding column>
            <Container noPadding>
                <FieldName>Focus</FieldName>
                <FieldContent>{'Web & Mobile App Development'}</FieldContent>
            </Container>
        </Container>
    );

    const educationSection = (
        <Container noPadding column>
            <Container noPadding>
                <FieldName>Degree</FieldName>
                <FieldContent>Bachelor of Science</FieldContent>
            </Container>
            <Container noPadding>
                <FieldName>Major</FieldName>
                <FieldContent>Computer Science</FieldContent>
            </Container>
            <Container noPadding>
                <FieldName>School</FieldName>
                <FieldContent>California Polytechnic State University, Pomona</FieldContent>
            </Container>
        </Container>
    );

    return (
        <Card>
            <Header>
                <h1>Software Engineer</h1>
                <h1>{'</>'}</h1>
            </Header>
            <Container>
                <Portrait />
                <Container column justifyContent='space-between'>
                    {nameSection}
                    {focusSection}
                    {educationSection}
                </Container>
            </Container>
        </Card>
    );
};

export default SummaryCard;
