import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Simulacros from './pages/Simulacros';
import CuyPage from './pages/CuyPage';
import RankingPage from './pages/RankingPage';
import ProfilePage from './pages/ProfilePage';
import LandNavBar from './components/LandNavbar';
import Footer from './components/Footer';

const App = () => {
    const logged = false;

    return <>
        {logged?<NavBar />:<LandNavBar/>}
        <div className='container'>
        <Routes>
            <Route path="/" element={logged?<Simulacros />:<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/simulacros" element={<Simulacros />} />
            <Route path="/cuy" element={<CuyPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        </div>
        <Footer/>
    </>
}

export default App;