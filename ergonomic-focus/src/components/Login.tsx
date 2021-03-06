import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router";
import { authConfig } from "../auth/config";
import { AuthContext } from "../Contexts/AuthContext";
    

    export const Login = ({ history }:any) => {
      
        const loginUser = useCallback(
          async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
      
            try {
              await authConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
              history.push('/');
            } catch (error) {
              console.log(error);
              alert('Something went wrong. Did you put your email and password?');
            }
          },
          [history],
        );
        const { user } = useContext(AuthContext);
        if (user) {
          return <Redirect to="/" />;
        }
    
        
        return (
    <div>
    
        <div>Login</div>
    
        <form onSubmit={loginUser}>
            <label>Email</label>
            <input type="email" name="email"/>
    
            <label>Password</label>
            <input type="password" name="password"/>
    
            <button type="submit">Sign In</button>
        </form>
    
    </div>
        );
        };

        export default withRouter(Login)