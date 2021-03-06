import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import WebDevMain from './pages/WebDevMain';
import PaintingMain from './pages/PaintingMain';
import { ROUTES } from './shared/enums';
import RouteError from './pages/RouteError';
import { device } from './shared/constants';

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  height: 100%;
  position: relative;

  @media ${device.laptop} {
    max-width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Router basename={ROUTES.HOME}>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route path={ROUTES.WEB_DEV}>
            <WebDevMain />
          </Route>
          <Route path={ROUTES.MINI_PAINTING}>
            <PaintingMain />
          </Route>
          <Route path='*'>
            <RouteError />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
