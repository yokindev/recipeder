import ImageLogo from "../../assets/images/chef-hat.png";
import GoogleButton from "react-google-button";
import { LoginContainer, LoginImage } from "./Login.styles";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({ prompt: "select_account" });

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginContainer>
      <LoginImage src={ImageLogo} alt="Logo" />
      <GoogleButton
        type="light"
        onClick={() => {
          signInWithGoogle();
        }}
      />
    </LoginContainer>
  );
};
