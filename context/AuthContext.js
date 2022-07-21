import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})

    function signUp(name, email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            displayName: name,
            email: email,
            password: password
        })
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email).then(() => {
            toast.success('Password reset link has been sent, Please check you spam', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                darkMode: true,
            });
        }).catch(err => {
            toast.error(err.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                darkMode: true,
            });
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])


    return <AuthContext.Provider value={{ signUp, user, logIn, logOut, forgotPassword }}  > {children} </AuthContext.Provider>;
}


export function UserAuth() {
    return useContext(AuthContext);
}