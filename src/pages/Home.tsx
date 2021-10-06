import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/enums';

function Home() {
  return (
    <section className='App-home'>
      <h1 className='App-home__h1'>Hi, I am Alessia</h1>
      <h2 className='App-home__h2'>
        I am a Senior Front-End Web Developer by day and a miniature and scale
        model artist in my spare time.
      </h2>
      <p> What do you want to know more about?</p>
      <Link to={ROUTES.WEB_DEV}>FE Web Dev</Link>
      <Link to={ROUTES.MINI_PAINTING}>Painting</Link>
    </section>
  );
}

export default Home;
