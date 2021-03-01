import { useCallback } from "react";
import { withRouter } from "react-router";
import { firebaseConfig } from "../auth/config";
import { props } from "../auth/PrivateRoute";

export const Register = withRouter(({history}) => {


    const registerUser = useCallback(
        async (event) => {

            event.preventDefault();

            const {email, password} = event.target.elements;

            try {
                await firebaseConfig
                    .auth()
            }       .createUserWithEmailAndPassword(email.value, password.value);

            history.push('/');

        }

        catch (error) {
            console.log(error);
        }},

        [history], 

    );

    
    return (
        <div>

        <div>Register</div>

            <form onSubmit={registerUser}>

                <label>Email</label>
                <input type="email" name="email" />

                <label>Username</label>
                <input type="text" name="username" />

                <label>Password</label>
                <input type="password" name="password" />

                <button type="submit">Register Now!</button>



            </form>

        </div>
    );
    });