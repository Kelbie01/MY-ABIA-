import Layout from './components/Layout';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Emergency from './pages/Emergency';
import PlaceholderPage from './components/PlaceholderPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* Main Navigation */}
            <Route path="government" element={<PlaceholderPage title="Government" />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="emergency" element={<Emergency />} />
            <Route path="about" element={<PlaceholderPage title="About Us" />} />
            <Route path="admin" element={<PlaceholderPage title="Admin Dashboard" />} />

            {/* Categories */}
            <Route path="business" element={<PlaceholderPage title="Business Directory" />} />
            <Route path="health" element={<PlaceholderPage title="Health Services" />} />
            <Route path="education" element={<PlaceholderPage title="Education" />} />
            <Route path="restaurants" element={<PlaceholderPage title="Restaurants & Food" />} />
            <Route path="markets" element={<PlaceholderPage title="Markets" />} />
            <Route path="tourism" element={<PlaceholderPage title="Tourism & Attractions" />} />

            {/* Actions */}
            <Route path="login" element={<PlaceholderPage title="Sign In" />} />
            <Route path="add-business" element={<PlaceholderPage title="Add Business" />} />
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
