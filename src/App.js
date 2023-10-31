import React from "react";
import NavBar from "./components/NavBar/NavBar";
// we have to import pages component in order to work in route
import { Route, Routes } from "react-router-dom";
import AllAuthors from "./components/AllAuthors/AllAuthors";
import AllBooks from "./components/AllBooks/AllBooks";
import Footer from "./components/Footer/Footer";
//import SingleBook from "./pages/SingleBook/SingleBook";
//import SingleAuther from "./pages/SingleAuther/SingleAuther";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Hom />}>*/}
          <Route path="/AllBooks" element={<AllBooks />}></Route> 
        <Route path="/AllAuthors" element={<AllAuthors />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
