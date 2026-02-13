import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Emergency from './pages/Emergency';
import About from './pages/About';
import Admin from './pages/Admin';
import Government from './pages/Government';
import Business from './pages/Business';
import Health from './pages/Health';
import Education from './pages/Education';
import Restaurants from './pages/Restaurants';
import Markets from './pages/Markets';
import Tourism from './pages/Tourism';
import PlaceholderPage from './components/PlaceholderPage';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* Main Navigation */}
            <Route path="government" element={<Government />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="emergency" element={<Emergency />} />
            <Route path="about" element={<About />} />
            <Route path="admin" element={<Admin />} />

            {/* Categories */}
            <Route path="business" element={<Business />} />
            <Route path="health" element={<Health />} />
            <Route path="education" element={<Education />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="markets" element={<Markets />} />
            <Route path="tourism" element={<Tourism />} />

            {/* Actions */}
            <Route path="login" element={<PlaceholderPage title="Sign In" />} />
            <Route path="add-business" element={<Business />} />
            <Route path="browser" element={<PlaceholderPage title="Browse All" />} />
            <Route path="services" element={<PlaceholderPage title="Find Services" />} />
            <Route path="privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="terms" element={<PlaceholderPage title="Terms of Service" />} />
            <Route path="cookies" element={<PlaceholderPage title="Cookie Settings" />} />

            <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
