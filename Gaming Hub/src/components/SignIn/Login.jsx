import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register,login,logout } from "../../services/authService";

export default function Login() {
  
  const [values, setValues] = useState({email: '', password: '', repeatPassword: ''});
  
  const changeHandler = (event) => {
    setValues(state => ({...state, [event.target.name]: event.target.value}));
  }

  const onRegisterSubmit = async (event) => {
    event.preventDefault();

    console.log(values);

    try {
      const result = await register(values);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

    return(
    <div className="sign-page">
        <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Sign In</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
  <input type="checkbox" id="chk" aria-hidden="true" />
  <div className="signup">
    <form onSubmit={onRegisterSubmit}>
      <label htmlFor="chk" aria-hidden="true">
        Sign up
      </label>
      <input type="text" name="email" value={values.email} placeholder="Email" onChange={changeHandler} required />
      <input type="password" name="password" value={values.password} placeholder="Password" onChange={changeHandler} required />
      <input type="password" name="repeatPassword" value={values.repeatPassword} placeholder="Repeat Password" onChange={changeHandler} required />
      <button>Sign up</button>
    </form>
  </div>
  <div className="login">
    <form>
      <label htmlFor="chk" aria-hidden="true">
        Login
      </label>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="pswd" placeholder="Password" required />
      <button>Login</button>
    </form>
  </div>
</div>

      </div>
    );
}