import Maincontent from "./components/Maincontent";
import NavbarDefault from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import "./index.css";

function App() {
  return (
    <div>
      <NavbarDefault />
      <SearchBar />
      <Maincontent />
    </div>
  );
}

export default App;
