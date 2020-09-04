import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    font-size: 1.8rem;
    margin-top: 2rem;
`;

const SectionTitle = ({ title, id }) => <Title id={id}>{title}</Title>;

export default SectionTitle;
