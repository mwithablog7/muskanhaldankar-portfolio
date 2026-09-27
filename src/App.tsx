import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { CaseStudy } from './pages/CaseStudy';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Base path for GitHub Pages (the repository name). Works in dev too.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export function App() {
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
