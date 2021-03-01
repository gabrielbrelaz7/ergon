import { firebaseConfig } from "../auth/config";



export const navMenu = () => {
    return (
        <div>
            <div>
                Dashboard
            </div>
            <div>
                Timer Focus
            </div>
            <div>
                <button onClick={firebaseConfig.authDomain().signOut()}>Login/Logout</button>
            </div>
        </div>
    );
};