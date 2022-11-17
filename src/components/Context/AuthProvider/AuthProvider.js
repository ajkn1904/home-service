import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';


//Auth context

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {          //Auth provider
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // for creating user
    const userSighup = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for sign in with email & password

    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for sign in with provider

    const signInWithProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // for sign out

    const userSignOut = () => {
        localStorage.removeItem('hmSrvcToken')
        return signOut(auth);
    }

    // for update profile info

    const updateProfileDetails = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    //useEffect to keep keep tracking a specific user for the site
    
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])


    const authInfo = { user, userSighup, userSignIn, signInWithProvider, userSignOut, loading, updateProfileDetails } 


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;