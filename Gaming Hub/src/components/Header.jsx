import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export default function Header() {

    const {isAuthenticated} = useAuthContext();

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
            {isAuthenticated &&
            <>
            <li>
              <Link to="/games/create-game">Add Game</Link>
            </li>
            </>
            }
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            {isAuthenticated &&
            <li>
              <Link to="/users/my-profile/">My Profile</Link>
            </li>
            }
            {!isAuthenticated &&
            <li>
              <Link to="/users/login">Sign In</Link>
            </li>
            }
            {isAuthenticated &&
            <li>
              <Link to="/users/logout">Logout</Link>
            </li>
            }
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