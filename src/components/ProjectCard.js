import React from 'react';
import { Button } from 'grommet';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid black;
    width: 100%;

    @media only screen and (min-width: 48rem) {
        max-width: 50%;
    }
`;

/**
 * @param {name} String Project name
 * @param {description} String Project description
 * @param {imagePath} String Path to image
 * @param {links} array Array of Objects i.e. [ { url: String, value: String } ]
 */
const ProjectCard = ({ name, description, imagePath, links }) => {
    return (
        <Card>
            <img src={imagePath} alt={`${name} project`} />
            <h1>{name}</h1>
            <p>{description}</p>
            <div style={{ display: 'flex' }}>
                {
                    links.map((item) => {
                        return (
                            <Button href={item.url} target='_blank'>{item.value}</Button>
                        );
                    })
                }
            </div>
        </Card>
    );
};

export default ProjectCard;
