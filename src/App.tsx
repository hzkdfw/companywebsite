import { Toaster } from '@/components/ui/sonner';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Industries from './sections/Industries';
import About from './sections/About';
import News from './sections/News';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* Section Divider */}
        <div className="section-divider" />
        <Products />
        {/* Section Divider */}
        <div className="section-divider" />
        <Industries />
        {/* Section Divider */}
        <div className="section-divider" />
        <About />
        {/* Section Divider */}
        <div className="section-divider" />
        <News />
        {/* Section Divider */}
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
