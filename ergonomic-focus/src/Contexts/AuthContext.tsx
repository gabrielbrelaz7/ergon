import { createContext, ReactNode, useEffect, useState } from "react";
import { authConfig } from "../auth/config";


interface AuthContextData {
    user: any;
}


type NewType = ReactNode;

interface AuthProviderProps{
    children: NewType;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children } : AuthProviderProps) {


    const [user, setUserAuth] = useState({} as AuthContextData);
    const [waiting, setWaiting] = useState(true);


    useEffect(() => {

        authConfig.auth().onAuthStateChanged((user:any) => {
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
                user,
                }}>
        
                {children}
        
        </AuthContext.Provider>
        
        );

}