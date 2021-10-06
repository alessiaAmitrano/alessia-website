import { Link } from 'react-router-dom';
import { ROUTES } from '../shared/enums';

function RouteError() {
return <div>
  <h1> Oops, the page you are looking for doesn't exist</h1>
  <Link to={ROUTES.HOME}>Back to Home</Link>
</div>
}

export default RouteError;
