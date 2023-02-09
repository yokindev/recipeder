import { signInWithGoogle } from "../../services/google";
import ImageLogo from '../../assets/images/chef-hat.png'
import { LoginContainer, LoginImage, LoginButton } from "./Login.styles";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginImage src={ImageLogo} alt='Logo'/>
      <LoginButton onClick={signInWithGoogle}>Sign in with google</LoginButton>
    </LoginContainer>
  );
};
