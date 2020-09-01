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
    padding: 0 1em;
    border-bottom: 1px solid black;

    @media only screen and (min-width: 48em) {
        font-size: 1rem;
    }
`;

const Body = styled.div`
    padding: 1em;
    display: flex;
`;

const Portrait = styled.div`
    height: 20em;
    width: 14em;
    border-radius: 10px;
    align-self: center;
    background-color: skyblue;

    @media only screen and (min-width: 48em) {
        height: 30em;
        width: 23em;
    }
`;

const SummaryCard = () => {
    return (
        <Card>
            <Header>
                <h1>Software Engineer</h1>
                <h1>{'</>'}</h1>
            </Header>
            <Body>
                <Portrait />
            </Body>
        </Card>
    );
};

export default SummaryCard;
