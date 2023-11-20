import { Link } from 'react-router-dom';
import style from './images/styles.module.css';

export default function ErrorPage () {
    return (
        <>
        <div className={style.wrapError}>
  <div className="d-flex align-items-center h-100">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 text-center text-white">
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <h5 className="">Oops! Page not found</h5>
          <p className="mb-4">
            we are sorry, but the page you requested was not found
          </p>
          <Link className="btn btn-dark" to="/" title="home url">
            Go home
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    );
};