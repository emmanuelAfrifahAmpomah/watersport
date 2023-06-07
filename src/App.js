import { Background, Container, SplashLogo, ParaWater } from './components/styledComponents/Container.styled';
import './App.css';
import splash from './ProjectFiles/Splash.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Container>
        <Background>
      <SplashLogo src={splash} alt='MPEG' />
          <p>Dive into Adventure with Us!</p>
          <SearchBar />
        </Background>
        </Container>
        <ParaWater className='py-3'>WaterSports</ParaWater>
    </div>
  );
}

export default App;
