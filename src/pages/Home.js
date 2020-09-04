import React from 'react';
import styled from 'styled-components';
import * as simpleIcons from '@styled-icons/simple-icons'
import { Mail } from 'grommet-icons';
import SummaryCard from '../components/SummaryCard';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import Emoji from '../components/Emoji';

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
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    @media only screen and (min-width: 48rem) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SkillsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-items: center;

    @media only screen and (min-width: 48rem) {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
`;

const ContactSection = styled.div`
    display: flex;
    justify-content: space-around;
`;

const skillIconStyle = {
    height: '4rem',
    color: '#484848',
};

const contactIconStyle = {
    height: '4rem',
    color: 'black',
};

const Home = () => {
    const projects = {
        easyBMI: {
            name: <span>Easy BMI <Emoji symbol='⚖️' label='scale' /></span>,
            description: 'A simple and straightforward way to calculate body-mass-index (BMI)! Avoid searching and visiting random sites for a BMI calculator and download the Easy BMI tool today! Easy BMI can help you: calculate BMI using imperial (lbs & in) or metric (kg & cm) units, print a growth chart for BMI-for-Age calculations, and store the last 10 results locally for quick and secure access.',
            links: [
                { url: 'https://easy-bmi.fabiandean.dev', value: 'Live' },
                { url: 'https://github.com/FabianDean/easy_bmi', value: 'GitHub' },
            ],
        },
        recime: {
            name: <span>ReciMe <Emoji symbol='👨‍🍳' label='chef' /></span>,
            description: "A \"what's in your fridge\" mobile app to make finding the perfect recipe a whole lot easier. ReciMe keeps the focus on the recipes. Not only can you search for recipes directly, but by providing a list of ingredients you have on hand, too! Like recipes to keep track of your favorites. We'll save them in your profile for you, so you'll always have a way come back to them.",
            links: [
                { url: 'https://recime.fabiandean.dev', value: 'Live' },
                { url: 'https://github.com/FabianDean/recime-flutter', value: 'GitHub' },
            ],
        },
        mediaTracker: {
            name: <span>Media Tracker <Emoji symbol='📽️' label='film projector' /></span>,
            description: 'An application that helps keep track of the shows and movies you watch, while also making it social! Participate in a forum for each title and see what others have to say. Your input helps others discover your favorite shows and movies by giving them the confidence to start watching.',
            links: [
                { url: 'http://themediatracker.com', value: 'Live' },
                { url: 'https://github.com/PentaTech-Inc/Media-Tracker', value: 'GitHub' },
            ],
        },
        more: {
            name: <span>More on GitHub <Emoji symbol='🗄️' label='filing cabinet' /></span>,
            description: 'Some other projects include the two servers used to help power features on both Easy BMI and ReciMe as well as the source code of this site you\'re on right now. Feel free to look at what I\'ve made and to see what I\'m currently working on.',
            links: [
                { url: 'https://github.com', value: 'GitHub' },
            ],
        },
    };

    return (
        <Container>
            <CardSection>
                <SummaryCard />
            </CardSection>
            <SectionTitle id='projects' title={<span><Emoji label='stars' symbol='✨' />Projects</span>} />
            <ProjectSection>
                {
                    Object.keys(projects).map((key) => (
                        <ProjectCard
                            name={projects[key].name}
                            description={projects[key].description}
                            links={projects[key].links}
                        />
                    ))
                }
            </ProjectSection>
            <SectionTitle id='skills' title={<span><Emoji label='hammer and wrench' symbol='🛠️' />Skills</span>} />
            <SkillsSection>
                <simpleIcons.ReactLogo style={skillIconStyle} />
                <simpleIcons.NodeDotJs style={skillIconStyle} />
                <simpleIcons.Mongodb style={skillIconStyle} />
                <simpleIcons.Javascript style={skillIconStyle} />
                <simpleIcons.Html5 style={skillIconStyle} />
                <simpleIcons.Css3 style={skillIconStyle} />
                <simpleIcons.Flutter style={skillIconStyle} />
                <simpleIcons.Dart style={skillIconStyle} />
                <simpleIcons.Java style={skillIconStyle} />
                <simpleIcons.Git style={skillIconStyle} />
                <simpleIcons.Googlecloud style={skillIconStyle} />
                <simpleIcons.Amazonaws style={skillIconStyle} />
            </SkillsSection>
            <SectionTitle id='contact' title={<span><Emoji label='telephone' symbol='☎️' />Contact</span>} />
            <ContactSection>
                <a href='mailto:fabian@fabiandean.dev' rel='noopener noreferrer' target='_blank' ><Mail size='4rem' color='black' /></a>
                <a href='https://linkedin.com/in/FabianDean' rel='noopener noreferrer' target='_blank'><simpleIcons.Linkedin style={contactIconStyle} /></a>
                <a href='https://twitter.com/FabianDean_dev' rel='noopener noreferrer' target='_blank'><simpleIcons.Twitter style={contactIconStyle} /></a>
                <a href='https://github.com/FabianDean' rel='noopener noreferrer' target='_blank'><simpleIcons.Github style={contactIconStyle} /></a>
            </ContactSection>
        </Container >
    );
};

export default Home;
