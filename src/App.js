import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/*" element={<Home />} />
    </Routes>
  );
}

export default App;
