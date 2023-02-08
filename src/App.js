import { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import { getAuth } from "firebase/auth";
import { Home } from "./components/Home";
import useFetch from "./hooks/useFetch";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  const recipes = useFetch(
    `${process.env.REACT_APP_API_URL}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&random=true`
  );

  return <div>{user ? <Home user={user} recipes={recipes}/> : <Login />}</div>;
}

export default App;
