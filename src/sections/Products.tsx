import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Cpu, Plane, Bot, Network, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: '智能机器狗',
    subtitle: 'KD-Robot X1',
    description: '四足仿生机器人，具备全地形适应能力，搭载AI视觉系统，适用于巡检、侦查、救援等场景。',
    features: ['全地形适应', 'AI视觉识别', '4小时续航', 'IP67防护'],
    image: '/images/product-robot-dog.jpg',
    icon: Bot,
  },
  {
    id: 2,
    name: '工业无人机',
    subtitle: 'KD-Drone Pro',
    description: '六旋翼工业级无人机，高清变焦相机，支持红外热成像，满足电力巡检、测绘等需求。',
    features: ['4K高清摄像', '红外热成像', '30分钟续航', '5公里图传'],
    image: '/images/product-drone.jpg',
    icon: Plane,
  },
  {
    id: 3,
    name: '核生化智能防护',
    subtitle: 'KD-NBC System',
    description: '核生化防护监测控制系统，融合空中无人机、地面机器狗、固定防护设备，形成立体防护网络，实现对辐射、化学、生物有害物质的实时监测、预警与数据采集分析。',
    features: ['立体防护', '实时监测', '智能预警', '污染洗消'],
    image: '/images/product-3d-defense.jpg',
    icon: Shield,
  },
  {
    id: 4,
    name: '系统集成方案',
    subtitle: 'KD-System',
    description: '提供端到端的智能防务系统集成服务，包括硬件部署、软件开发、数据分析等全套解决方案。',
    features: ['定制化开发', '云端管理', '数据分析', '7×24运维'],
    image: '/images/product-system-integration.jpg',
    icon: Network,
  },
];

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">核心产品</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              产品中心
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              自主研发的高性能智能装备，为各行业提供专业的防务解决方案
            </p>
          </div>

          {/* Product Navigation */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeProduct === index
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {product.name}
                </button>
              );
            })}
          </div>

          {/* Product Display */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`${activeProduct === index ? 'block' : 'hidden'}`}
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Image */}
                  <div className="relative group img-zoom-container">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 glow-blue">
                      <div className="text-sm text-gray-500">产品型号</div>
                      <div className="text-xl font-bold text-blue-600">{product.subtitle}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {product.name}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="feature-item p-4 bg-gray-50 rounded-xl hover:bg-blue-50"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="w-3 h-3 bg-blue-600 rounded-full" />
                          </div>
                          <span className="font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 group"
                      >
                        了解详情
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        获取报价
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Indicators */}
          <div className={`flex justify-center gap-2 mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeProduct === index
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
