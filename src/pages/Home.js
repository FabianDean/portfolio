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
        border-bottom: 0.75rem dashed grey;
        padding: 0 0 2rem 0;    
    }
`;

const ProjectSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const SkillsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`;

const ContactSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const Home = () => {
    const links = {
        easyBMI: [{ url: 'https://github.com/FabianDean/easy_bmi', value: 'GitHub' }],
        recime: [{ url: 'https://github.com/FabianDean/recime_flutter', value: 'GitHub' }],
    };

    return (
        <Container>
            <CardSection>
                <SummaryCard />
            </CardSection>
            <SectionTitle title='Projects' />
            <ProjectSection id='projects'>
                <ProjectCard
                    name='Easy BMI'
                    description='Easily calculate BMI!'
                    links={links.easyBMI}
                />
                <ProjectCard
                    name='ReciMe'
                    description='Find the perfect recipe!'
                    links={links.recime}
                />
                <ProjectCard
                    name='Media Tracker'
                    description='Find the perfect recipe!'
                    links={links.recime}
                />
            </ProjectSection>
            <SkillsSection id='skills'>
                <SectionTitle title='Skills' />
            </SkillsSection>
            <ContactSection id='contact'>
                <SectionTitle title='Contact' />
            </ContactSection>
        </Container >
    );
};

export default Home;
