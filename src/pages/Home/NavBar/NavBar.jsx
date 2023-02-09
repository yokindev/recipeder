import { getAuth } from "firebase/auth";

export const NavBar = ({user}) => {
  const auth = getAuth();

  return (
    <>
      <h1>{user.displayName}</h1>
      <img src={user.photoURL} alt="profile-pic" referrerPolicy="no-referrer" />
      <button onClick={() => auth.signOut()}>Sign out</button>
    </>
  );
};
