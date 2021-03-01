import { useCallback } from "react";
import { withRouter } from "react-router";
import { authConfig } from "../auth/config";



export const Register = ({ history }: any) => {
       
      
        const registerUser = useCallback(
          async (event) => {
            event.preventDefault();
      
            const { email, password } = event.target.elements;
            try {
              await authConfig
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
              history.push('/');
            } catch (error) {
              console.log(error);
              alert('Something went wrong. Is the email and password field filled?');
            }
          },
          [history],
        );

    
    return (
<div>

    <div>Register</div>

    <form onSubmit={registerUser}>
        <label>Email</label>
        <input type="email" name="email"/>

        <label>Username</label>
        <input type="text" name="username"/>

        <label>Password</label>
        <input type="password" name="password"/>

        <button type="submit">Register Now!</button>
    </form>

</div>
    );
    };

    export default withRouter(Register);