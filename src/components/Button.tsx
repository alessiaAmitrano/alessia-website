import { ReactNode } from 'react';
import styled from 'styled-components';
import { device } from '../shared/constants';

interface ButtonProps {
  children: ReactNode;
}

const StyledButton = styled.div`
  background-color: #0d1117;
  padding: 10px 20px;
  border: 1px solid white;
  min-width: 170px;
  text-align: center;
  transition: background-color 0.2s ease;

  a {
    color: white;
    font-size: 1.5em;
    text-decoration: none;
  }

  &:nth-of-type(2) {
    margin-top: 20px;
  }

  @media ${device.tablet} {
    &:nth-of-type(2) {
      margin: 0 0 0 20px;
    }
  }

  &:hover {
    background-color: white;
    font-weight: bold;
    transition: background-color 0.2s ease;

    a {
      color: #0d1117;
    }
  }
`;

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
