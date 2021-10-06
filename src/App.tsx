import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebDevMain from './pages/WebDevMain';
import PaintingMain from './pages/PaintingMain';
import { ROUTES } from './shared/enums';
import RouteError from './pages/RouteError';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route path={ROUTES.WEB_DEV}>
            <WebDevMain/>
          </Route>
          <Route path={ROUTES.MINI_PAINTING}>
            <PaintingMain/>
          </Route>
          <Route path='*'>
            <RouteError/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
