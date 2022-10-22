import styled from 'styled-components';
import { string, func } from 'prop-types';

export const Button = ({ onUpdate , children }) => {
    return (
        <ButtonStyle onClick={onUpdate}>{children}</ButtonStyle>
    )
};

Button.propTypes = {
    children: string,
    onUpdate: func
}

const ButtonStyle = styled.button`
    font-family: 'New Tegomin', serif;
    font-size: 1.5em;
    background-color: #DC882D;
    color: #fff;
    padding: 10px 20px;
    box-shadow: #333 3px 3px;
    cursor: pointer;
    border: none;
    border-radius: 0;

    &:hover {
        background-color: #a40000;
    }
`;