import "./App.css";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AllProject from "./AllProject/AllProject";
import ProjectDetails from "./ProductDetails/ProjectDetails";

function App() {
  return (
    <div className="App bg-dark text-white">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/projects" element={<AllProject></AllProject>}></Route>
        <Route
          path="/project/:id"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
