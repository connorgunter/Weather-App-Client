import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};
export default Header;
