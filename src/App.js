import React from "react";

// we have to import pages component in order to work in route
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AllAuthors from "./components/AllAuthors/AllAuthors";
import AllBooks from "./components/AllBooks/AllBooks";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Hom />}> */}
        <Route path="/AllBooks" element={<AllBooks />}></Route>
        <Route path="/AllAuthors" element={<AllAuthors />}></Route>
        {/* <Route path="/AuthorDetails/:id" element={<AuthorDetails />}></Route> */}
        {/* <Route path="/BookDetails/:id" element={<BookDetails />}></Route> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
