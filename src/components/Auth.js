import {auth, provider} from '../firebase-config.js';
import {signInWithPopup} from 'firebase/auth';

export const Auth = () => {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
    };

    return (
        <div className="auth">
            <p>
                Sign In with Google
            </p>
            <button onClick={signInWithGoogle}>
                Sign In with Google
            </button>
        </div>
    )
    
}