import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInWithGoogle = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
