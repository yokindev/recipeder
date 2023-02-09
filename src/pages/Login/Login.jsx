import ImageLogo from "../../assets/images/chef-hat.png";
import { signInWithGoogle } from "../../services/google";
import { LoginContainer, LoginImage, LoginButton } from "./Login.styles";

export const Login = ({ user }) => {
  return (
    <LoginContainer>
      <LoginImage src={ImageLogo} alt="Logo" />
      <LoginButton onClick={signInWithGoogle}>Sign in with google</LoginButton>
    </LoginContainer>
  );
};
