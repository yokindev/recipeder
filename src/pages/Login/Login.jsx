import ImageLogo from "../../assets/images/chef-hat.png";
import { signInWithGoogle } from "../../services/google";
import { LoginContainer, LoginImage, LoginButton } from "./Login.styles";

export const Login = ({setUser}) => {
  return (
    <LoginContainer>
      <LoginImage src={ImageLogo} alt="Logo" />
      <LoginButton onClick={() => signInWithGoogle(setUser)}>Sign in with google</LoginButton>
    </LoginContainer>
  );
};
