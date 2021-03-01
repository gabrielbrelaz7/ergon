import { useContext } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

export const Login = withRouter(({history}) => {
    

        const loginUser = useCallback(
            async (event) => {
    
                event.preventDefault();
    
                const {email, password} = event.target.elements;
    
                try {
                    await firebaseConfig
                        .auth()
                }       .signInWithEmailAndPassword(email.value, password.value);
    
                history.push('/');
    
            }
    
            catch (error) {
                console.log(error);
            }},
    
            [history], 
    
        );

        const {username} = useContext(AuthContext) {
            return <Redirect to="/" />
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
        });