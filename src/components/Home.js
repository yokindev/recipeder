import { getAuth } from "firebase/auth";

export const Home = ({ user }) => {
  const auth = getAuth();

  return (
    <div>
      <h1>Hello, {user.displayName}</h1>
      <img src={user.photoURL} alt="profile-pic" referrerPolicy="no-referrer" />
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};
