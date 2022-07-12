import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/enums';
import styled from 'styled-components';
import { device } from '../shared/constants';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import DarkModeSwitch from '../components/DarkModeSwitch';

const StyledSection = styled.section`
position: relative;

display: grid;
@media ${device.laptop} {
  height: 100vh;
  grid-template-rows: 20% 60% 20%;
  grid-template-columns: 15% 50% 20% 15%;
}
`;

const HomeContentWrapper = styled.div`
  /* padding-top: 10%; */
  max-width: 600px;
  text-align: center;
  grid-area: 2/2/3/3;

  @media ${device.laptop} {
    max-width: 500px;
    text-align: left;
  }
`;

const HomeH1 = styled.h1`
  font-size: 50px;
  letter-spacing: -1px;
  line-height: 55px;
  margin-bottom: 20px;
`;

const HomeH2 = styled.h2`
  font-size: 0.9rem;
  line-height: 22px;
`;

const HomeLinkWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 30px;
  justify-content: center;
  align-items: flex-start;

  @media ${device.tablet} {
    justify-content: left;
  }
`;

function Home() {

  return (
    <StyledSection>
      <DarkModeSwitch/>
      <HomeContentWrapper>
        <Avatar
          alt='Alessia Amitrano'
          src='https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'
          sx={{ width: 180, height: 180 }}
        />
        <HomeH1>Hi, I am Alessia</HomeH1>
        <HomeH2>
          I am a Senior Front-End Web Developer by day and a miniature and scale
          model artist by night.
          <br />
          What do you want to know more about?
        </HomeH2>
        <HomeLinkWrapper>
          <Button variant='contained' size='large'>
            <Link to={`${ROUTES.WEB_DEV}${ROUTES.EXPERIENCE}`}>FE Web Dev</Link>
          </Button>
          <Button variant='contained' size='large'>
            <Link to={ROUTES.MINI_PAINTING}>Painting</Link>
          </Button>
        </HomeLinkWrapper>
      </HomeContentWrapper>
    </StyledSection>
  );
}

export default Home;
