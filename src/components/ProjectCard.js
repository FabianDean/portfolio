import React from 'react';
import { Button } from 'grommet';
import styled from 'styled-components';

const Card = styled.div`
    padding: 1rem;
    border: 0.3rem solid black;
    border-radius: 10px;
`;

const StyledButton = styled(Button)`
    color: red;
`;

/**
 * @param {name} String Project name
 * @param {description} String Project description
 * @param {links} array Array of Objects i.e. [ { url: String, value: String } ]
 */
const ProjectCard = ({ name, description, links }) => {
    return (
        <Card>
            <h1>{name}</h1>
            <p>{description}</p>
            <div style={{ display: 'flex' }}>
                {
                    links.map((item) => {
                        return (
                            <StyledButton
                                href={item.url}
                                target='_blank'
                            >
                                {item.value}
                            </StyledButton>
                        );
                    })
                }
            </div>
        </Card>
    );
};

export default ProjectCard;
