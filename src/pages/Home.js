import React from 'react';
import styled from 'styled-components';
import SummaryCard from '../components/SummaryCard';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

const Container = styled.div`
    padding: 1rem;
`;

const CardSection = styled.div`
    border: none;

    @media only screen and (min-width: 48rem) {
        background-color: transparent;
        border: 10px dashed grey;
        border-radius: 10px;
        padding: 2rem 1rem;    
    }
`;

const Home = () => {
    return (
        <Container>
            <CardSection>
                <SummaryCard />
            </CardSection>
            <SectionTitle title='Projects' />
            <div>
                <ProjectCard
                    name='Easy BMI'
                    description='Easily calculate BMI!'
                    imagePath=''
                    links={[{ url: 'https://github.com', value: 'GitHub' }]}
                />
            </div>
            <SectionTitle title='Skills' />
            <SectionTitle title='Contact' />
        </Container>
    );
};

export default Home;
