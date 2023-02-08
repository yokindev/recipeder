import { getAuth } from "firebase/auth";

export const Home = ({ user, recipes }) => {
  const auth = getAuth();

  const { result } = recipes;
  console.log(result);

  if (result) {
    const { hits } = result;
    console.log(hits);

    return (
      <div>
        <h1>Hello, {user.displayName}</h1>
        <img
          src={user.photoURL}
          alt="profile-pic"
          referrerPolicy="no-referrer"
        />
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
  }
};
