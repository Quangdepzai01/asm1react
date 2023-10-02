import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Detail from "./pages/detail/Deatail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //trang home */}
        <Route path="/" element={<Home/>} />

        {/* trang search */}
        <Route path="/search" element={<Search />} />
        {/* trang deatil */}
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
