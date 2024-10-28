import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link className="nav" to="/">Home</Link>
        <Link className="nav" to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
