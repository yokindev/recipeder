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
 console.log(user);
  return <>{user ? <Home /> : <Login setUser={setUser}/>}</>;
}

export default App;
