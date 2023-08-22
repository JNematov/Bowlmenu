import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HoursLocation from "./pages/HoursLocation";
import Menu from "./pages/Menu";

function App() {
  const [menuList, setMenuList] = useState(null);
  const menuUrl = "https://bowlmenu.onrender.com/menu";

  const getMenu = async (menuUrl) => {
    const response = await fetch(menuUrl);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getMenu(menuUrl).then((data) => {
      setMenuList(data);
    });
  }, [menuUrl]);

  return (
    <div className="App">
      <header>
        <strong className="address-title">
          8650 Spicewood Springs Rd ste 119, Austin, TX 78759
        </strong>
      </header>
      <BrowserRouter>
        <div className="sticky">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Hours-location" element={<HoursLocation />} />
          <Route exact path="/Menu" element={<Menu menuList={menuList} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
