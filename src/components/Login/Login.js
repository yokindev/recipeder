import { signInWithGoogle } from "../../services/google";
import ImageLogo from '../../assets/images/chef-hat.png'

export const Login = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};
