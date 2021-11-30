import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/enums';
import styled, { keyframes } from 'styled-components';
import { device } from '../shared/constants';


const gifFloatMobile= keyframes`
  0% {top: 50px}
  50% {top: 52px}
  100% {top: 50px}
`;

const gifFloat = keyframes`
  0% {top: 50px}
  50% {top: 55px}
  100% {top: 50px}
`;

const FloatingImage = styled.img`
  position: absolute;
  top: -20px;
  right: 5%;
  width: 50%;
  animation: ${gifFloatMobile} 1.5s infinite;

    @media ${device.laptop} {
      animation: ${gifFloat} 1.5s infinite;
    }
  `;

const HomeTextWrapper = styled.div`
  padding-top: 20%;
  max-width: 600px;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
`;

const HomeH1 = styled.h1`
  font-size: 72px;
  margin-bottom: 30px;
`;

const HomeH2 = styled.h2`
  font-size: 1em;
`;

const HomeLinkWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 30px;
`;

const StyledLink = styled(Link)`
  font-size: 1.5em;
  color: white;
  text-decoration: none;
  background-color: #0d1117;
  padding: 10px 20px;
  border: 1px solid white;
  min-width: 170px;
  text-align: center;

  &:nth-of-type(2) {
    margin-left: 20px;
  }

  &:hover {
    color: #0d1117;
    background-color: white;
    font-weight: bold;
    transition: background .2s ease;
  }
`;

function Home() {

  return (
    <section>
      <FloatingImage src='./me_1.gif' alt='me'/>
      <HomeTextWrapper>
        <HomeH1>Hi, I am Alessia</HomeH1>
        <HomeH2>
          I am a Senior Front-End Web Developer by day and a miniature and scale
          model artist in my spare time.
          <br />
          What do you want to know more about?
        </HomeH2>
      </HomeTextWrapper>
    <HomeLinkWrapper>
      <StyledLink to={ROUTES.WEB_DEV}>FE Web Dev</StyledLink>
      <StyledLink to={ROUTES.MINI_PAINTING}>Painting</StyledLink>
    </HomeLinkWrapper>
    </section>
  );
}

export default Home;
