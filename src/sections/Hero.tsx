import { useEffect, useRef, useState } from 'react';
import { ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  { name: '电力巡检', href: '#industries' },
  { name: '应急救援', href: '#industries' },
  { name: '工业检测', href: '#industries' },
  { name: '国防动员', href: '#industries' },
  { name: '安防监控', href: '#industries' },
  { name: '教育科研', href: '#industries' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-drone.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-white/90 text-sm">智能防务解决方案提供商</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  智能防务技术
                  <br />
                  <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    创新与应用引领者
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
                  专注于系统集成、无人机、机器狗等智能防务装备的研发与应用，
                  为电力、应急、工业等领域提供专业的智能化解决方案。
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#products')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 px-8 py-6 text-lg group"
                >
                  了解产品
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5" />
                  观看视频
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
                  <div className="text-white/60 text-sm mt-1">行业客户</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">100+</div>
                  <div className="text-white/60 text-sm mt-1">项目案例</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">24/7</div>
                  <div className="text-white/60 text-sm mt-1">技术支持</div>
                </div>
              </div>
            </div>

            {/* Right Content - Industry Cards */}
            <div className={`hidden lg:block transition-all duration-1000 delay-300 ml-32 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white text-xl font-semibold mb-4">应用领域</h3>
                  <div className="space-y-3">
                    {industries.map((industry, index) => (
                      <a
                        key={industry.name}
                        href={industry.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(industry.href);
                        }}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          currentSlide === index
                            ? 'bg-white/20 border border-white/30'
                            : 'bg-white/5 border border-transparent hover:bg-white/10'
                        }`}
                      >
                        <span className="text-white font-medium">{industry.name}</span>
                        <ChevronRight className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                          currentSlide === index ? 'translate-x-1' : ''
                        }`} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
