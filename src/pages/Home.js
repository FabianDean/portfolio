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
    const projects = {
        easyBMI: {
            name: 'Easy BMI',
            description: 'A simple and straightforward way to calculate body-mass-index (BMI)! Avoid searching and visiting random sites for a BMI calculator and download the Easy BMI tool today! Easy BMI can help you: calculate BMI using imperial (lbs & in) or metric (kg & cm) units, print a growth chart for BMI-for-Age calculations, and store the last 10 results locally for quick and secure access',
            links: [
                { url: 'https://easy-bmi.fabiandean.dev', value: 'Live' },
                { url: 'https://github.com/FabianDean/easy_bmi', value: 'GitHub' },
            ],
        },
        recime: {
            name: 'ReciMe',
            description: "A \"what's in your fridge\" mobile app to make finding the perfect recipe a whole lot easier. ReciMe keeps the focus on the recipes. Not only can you search for recipes directly, but by providing a list of ingredients you have on hand, too! Like recipes to keep track of your favorites. We'll save them in your profile for you, so you'll always have a way come back to them.",
            links: [
                { url: 'https://recime.fabiandean.dev', value: 'Live' },
                { url: 'https://github.com/FabianDean/recime-flutter', value: 'GitHub' },
            ],
        },
        mediaTracker: {
            name: 'Media Tracker',
            description: 'An application that helps keep track of the shows and movies you watch, while also making it social! Participate in a forum for each title and contribute to its rating. Your input helps others discover your favorite shows and movies by giving them the confidence to start watching.',
            links: [
                { url: 'http://themediatracker.com', value: 'Live' },
                { url: 'https://github.com/PentaTech-Inc/Media-Tracker', value: 'GitHub' },
            ],
        },
    };

    return (
        <Container>
            <CardSection>
                <SummaryCard />
            </CardSection>
            <SectionTitle title='Projects' />
            <ProjectSection id='projects'>
                <ProjectCard
                    name={projects.easyBMI.name}
                    description={projects.easyBMI.description}
                    links={projects.easyBMI.links}
                />
                <ProjectCard
                    name={projects.recime.name}
                    description={projects.recime.description}
                    links={projects.recime.links}
                />
                <ProjectCard
                    name={projects.mediaTracker.name}
                    description={projects.mediaTracker.description}
                    links={projects.mediaTracker.links}
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
