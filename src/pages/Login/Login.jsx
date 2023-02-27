import ImageLogo from "../../assets/images/chef-hat.png";
import { signInWithGoogle } from "../../services/google";
import GoogleButton from "react-google-button";
import { LoginContainer, LoginImage } from "./Login.styles";

export const Login = ({ setUser }) => {
  return (
    <LoginContainer>
      <LoginImage src={ImageLogo} alt="Logo" />
      <GoogleButton onClick={() => signInWithGoogle({ setUser })} />
    </LoginContainer>
  );
};
