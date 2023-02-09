import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  return <>{user ? <Home /> : <Login />}</>;
}

export default App;
