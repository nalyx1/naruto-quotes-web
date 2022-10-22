import styled from "styled-components";
import { string } from 'prop-types';

export const Speaker = ({ children }) => {
    return (
        <SpeakerStyle>- {children}</SpeakerStyle>
    )
};

Speaker.propTypes = {
    children: string
}

const SpeakerStyle = styled.p`
    display: flex;
    font-size: 2em;
    margin: 0;
    margin-bottom: 50px;
    text-align: right;
`;