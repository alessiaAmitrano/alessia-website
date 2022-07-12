import Image from './Image';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface HeaderProps {
children?: ReactNode;
}

const StyledHeader = styled.header`
  background-color: rgb(22, 27, 34);
  padding: 10px 30px;
  text-align: left;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const FlexContainer = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
`;

const StyledNav = styled.nav`
  margin-left: 40px;
  display: inline-block;
  height: fit-content;

  a,
  a:visited {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Header({children}: HeaderProps) {
  return (
    <StyledHeader>
      <FlexContainer>
        <Image
          imgSrc={'/alessia-website/logo_pixelated.png'}
          altText={'logo'}
          width={'50'}
          ></Image>
        <StyledNav>
            {children}
        </StyledNav>
      </FlexContainer>
    </StyledHeader>
  );
}

export default Header;
