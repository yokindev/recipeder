import { useEffect, useState } from "react";
import { Login } from "./componets/Login";
import { getAuth } from "firebase/auth";
import { Home } from "./componets/Home";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  console.log(user);

  return <div>{user ? <Home user={user} /> : <Login />}</div>;
}

export default App;
