import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

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

  return <>{user ? <Home recipes={recipes} /> : <Login user={user}/>}</>;
}

export default App;
