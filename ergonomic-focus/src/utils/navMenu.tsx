import { authConfig } from "../auth/config";

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
                <button onClick={authConfig.auth().signOut}>Logout</button>
            </div>
        </div>
    );
};