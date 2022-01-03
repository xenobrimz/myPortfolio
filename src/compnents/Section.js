import { render } from "@testing-library/react";
import React from "react";
import styled from 'styled-components';

const Section = styled.div`
    height: ${props => props.height || '100vh'};
`;

export default Section;