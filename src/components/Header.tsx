import Image from './Image';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: rgb(22, 27, 34);
  padding: 10px 30px;
  text-align: left;
  width: 100%;
`;

function Header() {
  return (
    <StyledHeader>
      <Image imgSrc={'./aa-logo.png'} altText={'logo'} width={'50'}></Image>
    </StyledHeader>
  );
}

export default Header;
