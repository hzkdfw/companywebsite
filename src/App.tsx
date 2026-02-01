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
        <Products />
        <Industries />
        <About />
        <News />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
