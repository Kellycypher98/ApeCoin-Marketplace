import NavbarDefault from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Maincontent from "./components/Maincontent";
import { Footer } from "./components/footer";
import "./index.css";

function App() {
  return (
    <div>
      <NavbarDefault />
      <SearchBar />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
