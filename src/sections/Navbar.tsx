import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.industries, href: '#industries' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.news, href: '#news' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 ml-10"
          >
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img 
                src="/images/logo/杭州凯盾防务1.png" 
                alt="凯盾防务" 
                className="w-14 h-14 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.style.display = 'none';
                  
                  // Fallback to text logo
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-lg">凯</span></div>';
                  }
                }}
              />
            </div>
            <div className={`hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <div className="font-bold text-lg leading-tight">{t.hero.title}</div>
              <div className="text-xs opacity-80">KAIDUN DEFENSE</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="tel:13905819537"
              className={`hidden md:flex items-center gap-2 text-sm font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.phone}</span>
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:flex bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
            >
              {t.nav.order}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="py-4 px-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 px-4">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
            >
              {t.nav.order}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
