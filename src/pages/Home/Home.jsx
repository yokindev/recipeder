import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { Default } from "./Default/Default";
import { TopBar } from "./Home.styles";

export const Home = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar>
          <NavBar />
          <SearchBar />
        </TopBar>

        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/home" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
