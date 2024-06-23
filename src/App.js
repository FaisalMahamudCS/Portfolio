import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ProductDetail from './ProductDetail/ProductDetail';
import AllProject from './AllProject/AllProject';
import ProjectDetails from './ProductDetails/ProjectDetails';

function App() {
  return (
    <div className="App bg-dark text-white">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/projects' element={<AllProject></AllProject>}></Route>
       <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
