import './Header.scss';
import Image from './Image';

function Header() {
  return (
    <header className='App-header'>
      <Image imgSrc={'./alessia.png'} altText={'logo'} width={'150'}></Image>
    </header>
  );
}

export default Header;
