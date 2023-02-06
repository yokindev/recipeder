import { signInWithGoogle } from "../services/google";

export const Login = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};
