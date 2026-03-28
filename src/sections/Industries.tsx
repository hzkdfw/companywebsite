import { useEffect, useRef, useState } from 'react';
import { Zap, AlertTriangle, Factory, Shield, GraduationCap, ArrowRight, Landmark } from 'lucide-react';
import { useLanguage } from '@/i18n';

const industries = [
  {
    id: 1,
    name: '电力巡检',
    nameEn: 'Power Inspection',
    description: '无人机与机器狗协同作业，实现变电站、输电线路的智能巡检，提升检测效率与安全性。',
    descriptionEn: 'UAV and robot dog collaborative operations, enabling intelligent inspection of substations and transmission lines, improving detection efficiency and safety.',
    image: '/images/industry-power.jpg',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 2,
    name: '应急救援',
    nameEn: 'Emergency Rescue',
    description: '在火灾、地震等灾害现场，机器狗可进入危险区域侦查，无人机提供空中支援与物资投送。',
    descriptionEn: 'In disaster sites such as fires and earthquakes, robot dogs can enter dangerous areas for reconnaissance, while UAVs provide air support and material delivery.',
    image: '/images/industry-rescue.jpg',
    icon: AlertTriangle,
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 3,
    name: '工业检测',
    nameEn: 'Industrial Inspection',
    description: '石油化工、制造业等场景的智能化巡检，实时监测设备状态，预防安全事故。',
    descriptionEn: 'Intelligent inspection in petrochemical, manufacturing and other scenarios, real-time monitoring of equipment status, preventing safety accidents.',
    image: '/images/industry-inspection.jpg',
    icon: Factory,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    name: '国防动员',
    nameEn: 'Defense Mobilization',
    description: '智能化装备助力国防动员体系建设，提升民兵预备役训练水平和应急应战能力。',
    descriptionEn: 'Intelligent equipment helps build defense mobilization system, improving militia reserve training levels and emergency combat capabilities.',
    image: '/images/industry-defense.jpg',
    icon: Landmark,
    color: 'from-gray-700 to-gray-900',
  },
  {
    id: 5,
    name: '安防监控',
    nameEn: 'Security Monitoring',
    description: '园区、边境、重要设施的24小时智能巡逻，AI识别异常行为，保障区域安全。',
    descriptionEn: '24-hour intelligent patrol of parks, borders, and important facilities, AI identifies abnormal behavior to ensure area safety.',
    image: '/images/product-robot-dog.jpg',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    name: '教育科研',
    nameEn: 'Education & Research',
    description: '为高校、科研机构提供机器人开发平台，支持算法验证、教学演示等应用。',
    descriptionEn: 'Provide robot development platforms for universities and research institutions, supporting algorithm verification, teaching demonstrations and other applications.',
    image: '/images/industry-education.jpg',
    icon: GraduationCap,
    color: 'from-purple-500 to-violet-500',
  },
];

export default function Industries() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gray-50"
    >
      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Factory className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">{language === 'zh' ? '解决方案' : 'Solutions'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.industries.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.industries.subtitle}
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={industry.id}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={language === 'zh' ? industry.name : industry.nameEn}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                    />
                  </div>

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-95' : 'opacity-80'
                  }`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Icon */}
                    <div className={`mb-4 transition-all duration-300 ${
                      isHovered ? 'transform -translate-y-2' : ''
                    }`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg`}>
                        {industry.id === 4 ? (
                          <div className="bg-red-500 rounded-full p-1">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        ) : (
                          <Icon className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {language === 'zh' ? industry.name : industry.nameEn}
                    </h3>

                    {/* Description - Shows on hover */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {language === 'zh' ? industry.description : industry.descriptionEn}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 text-white font-medium transition-all duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <span className="text-sm">{language === 'zh' ? '了解更多' : 'Learn More'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              {language === 'zh' ? '需要定制化解决方案？联系我们' : 'Need a custom solution? Contact Us'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
