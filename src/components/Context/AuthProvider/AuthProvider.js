import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = {displayName: 'Anika'}


    const userSighup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithProvider = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const userSignOut = () => {
        return signOut(auth);
    }


    const authInfo = { user, userSighup, userSignIn, signInWithProvider, userSignOut } 


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;