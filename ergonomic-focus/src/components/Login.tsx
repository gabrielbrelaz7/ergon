import React, { useCallback, useContext, useState } from "react";
import { Redirect, withRouter } from "react-router";
import { authConfig } from "../auth/config";
import { AuthContext } from "../Contexts/AuthContext";
import "../styles/components/login.css";
import { Loading } from "./Loading";

type LoginProps = {
  history: {
    push: (pathname: string) => void;
  };
};

export const Login = ({ history }: LoginProps) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginUser = useCallback(
    async (event) => {
      event.preventDefault();
      setError("");
      const { email, password } = event.target.elements;
      setIsLoading(true);
      try {
        await authConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [history]
  );
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to="/" />;
  }

  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <div className="container-login">
      <div className="login-card">
        <div className="container-login-title">
          <span className="login-title">Login</span>
        </div>
        <form className="container-form" onSubmit={loginUser}>
          <div className="container-inputs">
            <label>Email</label>
            <input type="email" name="email" />

            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button className="submit-login" type="submit">
            Sign In
            {isLoading && (
              <Loading
                width={20}
                height={20}
                containerSize={{ width: 20, height: 30 }}
              />
            )}
          </button>
          {!!error && <span className="error-message">{error}</span>}
        </form>
        <div className="container-register">
          <span className="register-btn" onClick={handleRegister}>
            Register Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
