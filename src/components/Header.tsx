import './Header.scss';
import Image from './Image';

function Header() {
  return (
    <header className='App-header'>
      <Image imgSrc={'./aa-logo.png'} altText={'logo'} width={'50'}></Image>
    </header>
  );
}

export default Header;
