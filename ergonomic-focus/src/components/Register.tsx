import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import { authConfig } from "../auth/config";
import "../styles/components/login.css";
import { Loading } from "./Loading";

type RegisterProps = {
  history: {
    push: (pathname: string) => void;
    goBack: () => void;
  };
};

export const Register = ({ history }: RegisterProps) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const registerUser = useCallback(
    async (event) => {
      event.preventDefault();
      setError("");
      const { email, password } = event.target.elements;
      setIsLoading(true);
      try {
        await authConfig
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [history]
  );

  const handleLogin = () => history.goBack();

  return (
    <div className="container-login">
      <div className="login-card">
        <div className="container-login-title">
          <span className="login-title">Login</span>
        </div>

        <form className="container-form" onSubmit={registerUser}>
          <div className="container-inputs">
            <label>Email</label>
            <input type="email" name="email" />

            {/* <label>Username</label>
            <input type="text" name="username" /> */}

            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button className="submit-login" type="submit">
            Register
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
          <span className="register-btn" onClick={handleLogin}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
