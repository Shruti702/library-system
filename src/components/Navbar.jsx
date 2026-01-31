import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Online Library</div>
      <div className="nav-links">
        {/* Link to the Home Page (Landing Page).*/}
        <Link to="/">Home</Link>
        {/* Link to the Browse Books Page.*/}
        <Link to="/browse">Browse Books</Link>
        {/* Link to the Add Book Page (Form).*/}
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;