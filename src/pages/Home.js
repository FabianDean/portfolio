import React from 'react';
import styled from 'styled-components';
import SummaryCard from '../components/SummaryCard';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

const Container = styled.div`
    padding: 1rem;
`;

const Home = () => {
    return (
        <Container>
            <SummaryCard />
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
