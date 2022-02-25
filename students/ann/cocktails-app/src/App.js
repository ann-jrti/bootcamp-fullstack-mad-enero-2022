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
import { AgeRestrictionProvider } from './context/restriction';


function App() {
  return (
    <React.Fragment>
      <AgeRestrictionProvider>


        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/accept-conditions" element={<AcceptConditions></AcceptConditions>}></Route>
            <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>}></Route>
            <Route path="/cocktails" element={<ProtectedRoutes><Cocktails /></ProtectedRoutes>}></Route>
            <Route path="/drinks" element={<ProtectedRoutes><Drinks /></ProtectedRoutes>}></Route>
            <Route path="/info" element={<ProtectedRoutes><Info /></ProtectedRoutes>}></Route>
            <Route path="/details" element={<ProtectedRoutes><Details /></ProtectedRoutes>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AgeRestrictionProvider>
      {/* <NumberProvider>
          <Home></Home>
        </NumberProvider> */}

    </React.Fragment>


  );
}

export default App;
