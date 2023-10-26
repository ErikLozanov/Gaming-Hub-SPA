import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <>
        <header className="header-area header-sticky">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          {/* ***** Logo Start ***** */}
          <Link to="/" className="logo">
            <img src="/assets/images/logo.png" alt="" style={{ width: 158 }} />
          </Link>
          {/* ***** Logo End ***** */}
          {/* ***** Menu Start ***** */}
          <ul className="nav">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="#">Add Game</Link>
            </li>
            <li>
              <Link to="/contacts">Contact Us</Link>
            </li>
            <li>
              <Link to="/users/login">Sign In</Link>
            </li>
            <li>
              <Link to="/users/login">Logout</Link>
            </li>
          </ul>
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </div>
  </div>
</header>
        </>
    );
};