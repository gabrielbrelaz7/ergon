import { useEffect, useState } from "react";
import { firebaseConfig } from "../auth/config";

// interface User {

// }


interface AuthContextData {
    username: string;
}


interface AuthProviderProps{
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children } : AuthProviderProps) {

    const [username, setUserAuth] = useState({} as AuthContextData);
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {

        firebaseConfig.authDomain().onAuthStateChanged((user) => {
            setUserAuth(user);
            setWaiting(false)
        });

    }, []);

    if (waiting) {
        return <div>Loading</div>
    }

    return(

        <AuthContext.Provider 
            value={{
                username
                
                }}>
        
                {children}
        
        </AuthContext.Provider>
        
        );

}