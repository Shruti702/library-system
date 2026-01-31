import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      {/*Display invalid URL*/}
      <p>No page found for: <code>{location.pathname}</code></p>
      {/*Link to Home*/}
      <Link to="/" className="home-link">Go to Home Page</Link>
    </div>
  );
};

export default NotFound;