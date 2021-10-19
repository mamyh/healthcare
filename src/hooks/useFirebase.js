import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializingApp from "../firebase/firebase.init";

initializingApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider).then((result) => setUser(result.user)).catch((error) => setError(error.message));
    }

    const logOut = () => {
        signOut(auth).then(() => setUser({})).catch((error) => setError(error.message));
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, user => {
            if (user) {
                var user = auth.currentUser;
                setUser(user);
            } else {

            }
        })
        return unSubscriber();
    }, []);
    return {
        user, error, signInWithGoogle, logOut
    }
}

export default useFirebase;