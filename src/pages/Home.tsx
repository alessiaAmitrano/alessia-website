import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/enums';
import Image from '../components/Image';
import './Home.scss';
// import typer from '../lottie/typer.json';
// import LottieWrapper from '../components/LottieWrapper';


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
      {/* <LottieWrapper
        className="Home-lottie-type"
        animation={typer}
        frames={[0, 400]}
        justPlayInView={true}
        loop={true}
        style={{ width: '650px', height: '650px' }}
      /> */}
      <Image className={'Home-img'} imgSrc={'./me-big.png'} altText={'me'}/>
    </section>
  );
}

export default Home;
