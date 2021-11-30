import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/enums';
import Image from '../components/Image';
import styled, { keyframes } from 'styled-components';

const gifFloat = keyframes`
  0% {top: 50px}
  50% {top: 55px}
  100% {top: 50px}
`;

const FloatingImage = styled(Image)`
  position: absolute;
  top: 50px;
  right: 150px;
  width: 40%;
  animation: ${gifFloat} 1.5s infinite;
`;

const HomeTextWrapper = styled.div`
  padding-top: 600px;
  max-width: 600px;
`;

const HomeH1 = styled.h1`
  font-size: 72px;
  margin-bottom: 30px;
`;
const HomeH2 = styled.h2`
  font-size: 1em;
`;

function Home() {

  return (
    <section>
      <HomeTextWrapper>
        <HomeH1>Hi, I am Alessia</HomeH1>
        <HomeH2>
          I am a Senior Front-End Web Developer by day and a miniature and scale
          model artist in my spare time.
          <br />
          What do you want to know more about?
        </HomeH2>
      </HomeTextWrapper>
      <Link to={ROUTES.WEB_DEV}>FE Web Dev</Link>
      <Link to={ROUTES.MINI_PAINTING}>Painting</Link>
      <FloatingImage imgSrc={'./me-big.png'} altText={'me'}/>
    </section>
  );
}

export default Home;
