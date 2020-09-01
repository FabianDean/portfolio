import React from 'react';
import SummaryCard from '../components/SummaryCard';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';

const Container = styled.div`
    padding: 1rem;
`;

const Home = () => {
    return (
        <Container>
            <SummaryCard />
            <SectionTitle title='Projects' />
            <SectionTitle title='Skills' />
            <SectionTitle title='Contact' />
        </Container>
    );
};

export default Home;
