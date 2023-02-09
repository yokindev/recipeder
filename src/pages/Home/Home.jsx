import { getAuth } from "firebase/auth";
import { HomeContainer } from "./Home.styles";

export const Home = ({ user, recipes }) => {
  const { result } = recipes;

  if (result) {
    const auth = getAuth();
    const { hits } = result;
    console.log(hits);

    return (
      <HomeContainer>
        <h1>Hello, {user.displayName}</h1>
        <img
          src={user.photoURL}
          alt="profile-pic"
          referrerPolicy="no-referrer"
        />
        <button onClick={() => auth.signOut()}>Sign out</button>
      </HomeContainer>
    );
  }
};
