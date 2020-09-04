import React from 'react';
import { Button } from 'grommet';
import styled from 'styled-components';

const Card = styled.div`
    padding: 1rem;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
    border-radius: 10px;
    font-size: 1rem;
`;

const LinksSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;

    @media only screen and (min-width: 48rem) {
        max-width: 14rem;
    }
`;

const StyledButton = styled(Button)`
    color: white;
    background-color: black;
    border-radius: 5px;
    padding: 0.1rem 1rem;
    font-weight: bold;
    
    :focus {
        box-shadow: none !important;
    }
`;

/**
 * @param {name} React.Component (can also be a String) Project name
 * @param {description} String Project description
 * @param {links} array Array of Objects i.e. [ { url: String, value: String } ]
 */
const ProjectCard = ({ name, description, links }) => {
    return (
        <Card>
            <h2>{name}</h2>
            <p>{description}</p>
            <LinksSection>
                {
                    links.map((item) => {
                        return (
                            <StyledButton
                                href={item.url}
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                {item.value}
                            </StyledButton>
                        );
                    })
                }
            </LinksSection>
        </Card>
    );
};

export default ProjectCard;
