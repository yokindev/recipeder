import { useEffect, useState } from "react";
import { Login } from "./componets/Login";
import { getAuth } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  console.log(user);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
