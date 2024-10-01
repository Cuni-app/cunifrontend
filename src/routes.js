import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Simulacros from './pages/Simulacros';
import LoginPage from './pages/LoginPage';
import CuyPage from './pages/CuyPage';
import RankingPage from './pages/RankingPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
    { path : "/", element : <LandingPage /> },
    { path : "/login", element : <LoginPage /> },
    { path : "/simulacros", element : <Simulacros /> },
    { path : "/cuy", element : <CuyPage /> },
    { path : "/ranking", element : <RankingPage /> },
    { path : "/profile", element : <ProfilePage /> }
])

export default router