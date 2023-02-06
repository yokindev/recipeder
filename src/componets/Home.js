import { getAuth } from "firebase/auth";

export const Home = ({user}) => {
  const auth = getAuth();

  return (
    <div>
      <h1>
        Hello, <span></span>
        {user.displayName}
      </h1>
      <img src={"user.photoURL"} alt="Avatar" />
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};
