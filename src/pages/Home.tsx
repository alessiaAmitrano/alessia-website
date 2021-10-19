import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/enums';
import './Home.scss';
import dev from '../lottie/dev.json';
import { LottieAnimation } from 'react-lottie-tools';


function Home() {

  return (
    <section className='Home'>
      <div className='Home-hello'>
        <h1 className='Home-h1'>Hi, I am Alessia</h1>
        <h2 className='Home-h2'>
          I am a Senior Front-End Web Developer by day and a miniature and scale
          model artist in my spare time.
          <br />
          What do you want to know more about?
        </h2>
      </div>
      <Link to={ROUTES.WEB_DEV}>FE Web Dev</Link>
      <Link to={ROUTES.MINI_PAINTING}>Painting</Link>
      <LottieAnimation
        animation={dev}
        style={{ width: '600px', height: '600px' }}
      />
    </section>
  );
}

export default Home;
