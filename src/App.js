/** @format */

import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {/* Le Router doit envelopper l'ensemble de l'application */}
      <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />{' '}
          {/* Route pour le composant About */}
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/error" element={<NotFound />} />{' '}
          {/* Route pour la page 404 */}
          <Route path="*" element={<NotFound />} />{' '}
          {/* Route pour la page 404 */}
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
