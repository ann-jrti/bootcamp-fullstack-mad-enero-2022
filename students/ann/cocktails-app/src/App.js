import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Drinks from './pages/drinks';
import Cocktails from './pages/cocktails';
import Info from './pages/info';
import Details from './pages/details';
import Header from './components/header';
import ProtectedRoutes from './routes/protected-routes';
import Footer from './components/footer';
import AcceptConditions from './pages/accept-conditions';
import Home from './pages/home';

function App() {
  return (
      <React.Fragment>
        
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/accept-conditions" element={<AcceptConditions></AcceptConditions>}></Route>
            <Route path="/" element={<ProtectedRoutes><Home/></ProtectedRoutes>}></Route>
            <Route path="/cocktails" element={<ProtectedRoutes><Cocktails /></ProtectedRoutes>}></Route>
            <Route path="/drinks" element={<ProtectedRoutes><Drinks /></ProtectedRoutes>}></Route>
            <Route path="/info" element={<Info></Info>}></Route>
            <Route path="/details" element={<Details></Details>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
        {/* <NumberProvider>
          <Home></Home>
        </NumberProvider> */}

    </React.Fragment>
      
   
  );
}

export default App;
