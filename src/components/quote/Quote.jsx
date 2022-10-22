import styled from "styled-components";
import { string } from 'prop-types';

export const Quote = ({ children }) => {
    return (
        <QuoteStyle>{children}</QuoteStyle>
    )
};

Quote.propTypes = {
    children: string
}

const QuoteStyle = styled.p`
    font-size: 2em;
    margin: 0;
`;