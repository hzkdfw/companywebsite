import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider } from '@/i18n';
import SEOHead from './components/SEOHead';
import './App.css';

// 懒加载组件（代码分割）
const Navbar = lazy(() => import('./sections/Navbar'));
const Hero = lazy(() => import('./sections/Hero'));
const Products = lazy(() => import('./sections/Products'));
const Industries = lazy(() => import('./sections/Industries'));
const About = lazy(() => import('./sections/About'));
const News = lazy(() => import('./sections/News'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

// 加载占位组件
function SectionLoader() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <SEOHead
        title="杭州凯盾防务科技有限公司 - 智能防务装备与系统解决方案"
        description="专注于智能防务装备与系统解决方案，提供机器人、无人机、核生化防护等高科技产品与服务。"
        keywords="凯盾防务,智能防务,机器人,无人机,核生化防护,杭州防务科技"
        url="https://keeshield.com"
      />
      <div className="min-h-screen bg-white">
        <Suspense fallback={<SectionLoader />}>
          <Navbar />
        </Suspense>
        <main>
          <Suspense fallback={<SectionLoader />}>
            <Hero />
          </Suspense>
          {/* Section Divider */}
          <div className="section-divider" />
          <Suspense fallback={<SectionLoader />}>
            <Products />
          </Suspense>
          {/* Section Divider */}
          <div className="section-divider" />
          <Suspense fallback={<SectionLoader />}>
            <Industries />
          </Suspense>
          {/* Section Divider */}
          <div className="section-divider" />
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          {/* Section Divider */}
          <div className="section-divider" />
          <Suspense fallback={<SectionLoader />}>
            <News />
          </Suspense>
          {/* Section Divider */}
          <div className="section-divider" />
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
        <Toaster position="top-center" />
      </div>
    </LanguageProvider>
  );
}

export default App;
