import { NavBar } from "./NavBar/NavBar";

export const Home = ({ user, recipes }) => {
  const { result } = recipes;

  if (result) {
    const { hits } = result;
    console.log(hits);

    return <NavBar user={user} />;
  }
};
