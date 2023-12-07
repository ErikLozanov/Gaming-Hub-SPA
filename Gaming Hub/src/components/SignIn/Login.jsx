import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

import useForm from "../../hooks/useForm";
import { useEffect, useRef } from "react";

export default function Login() {
    const emailRef = useRef();
    const { onLoginSubmit, loginError, setLoginError } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm(
        {
            email: "",
            password: "",
        },
        onLoginSubmit
    );

    useEffect(() => {
        emailRef.current.focus()
    },[])

    setTimeout(()=> {
        setLoginError('');
      }, 10000)

    return (
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
                    <form onSubmit={onSubmit}>
                        <label htmlFor="chk" aria-hidden="true">
                            Sign in
                        </label>
                        <input
                            ref={emailRef}
                            type="text"
                            name="email"
                            value={values.email}
                            placeholder="Email"
                            onChange={changeHandler}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            placeholder="Password"
                            onChange={changeHandler}
                            required
                        />
                        <button>Sign in</button>
                    {loginError ? <p style={{color:"red", marginLeft: '80px'}}>{loginError}</p> : null}
                    </form>
                    
                    <p className="register-redirect">Don't have an account? <Link to='/users/register'>Click Here</Link> to register.</p>
                </div>
            </div>
        </div>
    );
}

{
    /* <div className="signup">
<form onSubmit={onSubmit}>
    <label htmlFor="chk" aria-hidden="true">
        Sign up
    </label>
    <input
        type="text"
        name="email"
        value={values.email}
        placeholder="Email"
        onChange={changeHandler}
        required
    />
    <input
        type="password"
        name="password"
        value={values.password}
        placeholder="Password"
        onChange={changeHandler}
        required
    />
    <input
        type="password"
        name="repeatPassword"
        value={values.repeatPassword}
        placeholder="Repeat Password"
        onChange={changeHandler}
        required
    />
    <button>Sign up</button>
</form>
</div> */
}
