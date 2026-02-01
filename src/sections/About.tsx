import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Users, TrendingUp, Building2 } from 'lucide-react';

const stats = [
  { value: '2024', label: '成立年份', icon: Building2 },
  { value: '50+', label: '技术专利', icon: Award },
  { value: '100+', label: '合作客户', icon: Users },
  { value: '30+', label: '技术团队', icon: TrendingUp },
];

const values = [
  {
    title: '企业愿景',
    description: '成为中国领先的智能防务解决方案提供商，用科技创新守护国家安全与社会稳定。',
    icon: Eye,
  },
  {
    title: '企业使命',
    description: '以客户需求为导向，提供高性能、高可靠性的智能防务装备与系统解决方案。',
    icon: Target,
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">关于我们</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              杭州凯盾防务科技有限公司
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              专注于智能防务装备研发与系统集成服务，致力于为客户提供高性能、高可靠性的解决方案
            </p>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Company Intro & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Company Introduction */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  公司简介
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    杭州凯盾防务科技有限公司成立于2024年，是一家专注于智能防务装备研发、生产与销售的高新技术企业。公司总部位于杭州市余杭区五常大道181号华立总部大楼东910室，拥有先进的研发中心和完善的生产基地。
                  </p>
                  <p>
                    公司主要产品包括智能机器狗、工业无人机、防务系统集成等，广泛应用于电力巡检、应急救援、工业检测、安防监控等领域。我们拥有一支由博士、硕士组成的核心技术团队，在机器人控制、机器视觉、人工智能等领域具有深厚的技术积累。
                  </p>
                  <p>
                    秉承"科技创新、质量为本、客户至上"的经营理念，凯盾防务已为国内100多家企事业单位提供优质的产品与服务，赢得了客户的广泛认可与信赖。
                  </p>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-white/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Core Values */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  核心价值观
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['创新驱动', '品质至上', '诚信合作', '持续改进'].map((value, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="font-medium text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
