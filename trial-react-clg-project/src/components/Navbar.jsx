import "./Navbar.css";
<link
  href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
  rel="stylesheet"
/>;

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Get Involved</a>
          </li>
          <li>
            <a href="#">Alumni Achievers</a>
          </li>
          <li>
            <a href="#">Photo Gallery</a>
          </li>
          <li>
            <a href="#">News Room</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">More...</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
