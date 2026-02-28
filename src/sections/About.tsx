import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, Users, TrendingUp, Building2, FileText, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/i18n';

const stats = [
  { value: '2024', label: '成立年份', labelEn: 'Established', icon: Building2 },
  { value: '50+', label: '技术专利', labelEn: 'Tech Patents', icon: Award },
  { value: '100+', label: '合作客户', labelEn: 'Clients', icon: Users },
  { value: '30+', label: '技术团队', labelEn: 'Team Members', icon: TrendingUp },
];

const values = [
  {
    title: '企业愿景',
    titleEn: 'Vision',
    description: '成为中国领先的智能防务解决方案提供商，用科技创新守护国家安全与社会稳定。',
    descriptionEn: 'To become a leading provider of intelligent defense solutions in China, using technological innovation to protect national security and social stability.',
    icon: Eye,
  },
  {
    title: '企业使命',
    titleEn: 'Mission',
    description: '以客户需求为导向，提供高性能、高可靠性的智能防务装备与系统解决方案。',
    descriptionEn: 'Customer-oriented, providing high-performance and highly reliable intelligent defense equipment and system solutions.',
    icon: Target,
  },
];

const patents = [
  { title: '机器人运动智能调节系统', titleEn: 'Robot Motion Intelligent Adjustment System', type: '软件著作权', typeEn: 'Software Copyright' },
  { title: '核生化防护监测控制系统', titleEn: 'NBC Protection Monitoring & Control System', type: '软件著作权', typeEn: 'Software Copyright' },
  { title: '核生化防护监测预警管理平台', titleEn: 'NBC Protection Monitoring & Warning Platform', type: '软件著作权', typeEn: 'Software Copyright' },
  { title: '核生化数据在线分析系统', titleEn: 'NBC Data Online Analysis System', type: '软件著作权', typeEn: 'Software Copyright' },
  { title: '核生化数据智能采集系统', titleEn: 'NBC Data Intelligent Collection System', type: '软件著作权', typeEn: 'Software Copyright' },
  { title: '无人机多任务点路径智能规划系统', titleEn: 'UAV Multi-Task Path Planning System', type: '软件著作权', typeEn: 'Software Copyright' },
  { title: '无人机机械臂自动化作业系统', titleEn: 'UAV Robotic Arm Automation System', type: '软件著作权', typeEn: 'Software Copyright' },
  { title: '无人机数据收集与分析系统', titleEn: 'UAV Data Collection & Analysis System', type: '软件著作权', typeEn: 'Software Copyright' },
  { title: '智能机器人协同作业平台', titleEn: 'Intelligent Robot Collaboration Platform', type: '软件著作权', typeEn: 'Software Copyright' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

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
              <span className="text-blue-600 text-sm font-medium">{language === 'zh' ? '关于我们' : 'About Us'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === 'zh' ? '杭州凯盾防务科技有限公司' : 'Hangzhou Kaidun Defense Technology Co., Ltd.'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'zh' 
                ? '专注于智能防务装备研发与系统集成服务，致力于为客户提供高性能、高可靠性的解决方案'
                : 'Specializing in intelligent defense equipment R&D and system integration services, committed to providing customers with high-performance and high-reliability solutions'}
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
                  <div className="text-gray-500 text-sm">{language === 'zh' ? stat.label : stat.labelEn}</div>
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
                  {language === 'zh' ? '公司简介' : 'Company Profile'}
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {language === 'zh'
                      ? '杭州凯盾防务科技有限公司成立于2024年，是一家专注于智能防务装备研发、生产与销售的高新技术企业。公司总部位于杭州市余杭区五常大道181号华立总部大楼东910室，拥有先进的研发中心和完善的生产基地。'
                      : 'Hangzhou Kaidun Defense Technology Co., Ltd. was established in 2024, a high-tech enterprise specializing in R&D, production and sales of intelligent defense equipment. The company headquarters is located in Room 910, East Building, Huali Headquarters, 181 Wuchang Avenue, Yuhang District, Hangzhou, with advanced R&D center and complete production base.'}
                  </p>
                  <p>
                    {language === 'zh'
                      ? '公司主要产品包括智能机器狗、工业无人机、防务系统集成等，广泛应用于电力巡检、应急救援、工业检测、安防监控等领域。我们拥有一支由博士、硕士组成的核心技术团队，在机器人控制、机器视觉、人工智能等领域具有深厚的技术积累。'
                      : 'Main products include intelligent robot dogs, industrial UAVs, defense system integration, widely used in power inspection, emergency rescue, industrial inspection, security monitoring and other fields. We have a core technical team of PhD and Masters with deep technical accumulation in robot control, machine vision, AI and other fields.'}
                  </p>
                  <p>
                    {language === 'zh'
                      ? '秉承"科技创新、质量为本、客户至上"的经营理念，凯盾防务已为国内100多家企事业单位提供优质的产品与服务，赢得了客户的广泛认可与信赖。'
                      : 'Adhering to the business philosophy of "technological innovation, quality first, customer first", Kaidun Defense has provided quality products and services to more than 100 domestic enterprises and institutions, winning widespread recognition and trust from customers.'}
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
                        <h3 className="text-xl font-bold mb-3">{language === 'zh' ? item.title : item.titleEn}</h3>
                        <p className="text-white/90 leading-relaxed">
                          {language === 'zh' ? item.description : item.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Core Values */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'zh' ? '核心价值观' : 'Core Values'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {language === 'zh' 
                    ? (['创新驱动', '品质至上', '诚信合作', '持续改进'] as const).map((value, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="font-medium text-gray-700">{value}</span>
                        </div>
                      ))
                    : (['Innovation', 'Quality First', 'Integrity', 'Continuous Improvement'] as const).map((value, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="font-medium text-gray-700">{value}</span>
                        </div>
                      ))
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className={`mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {language === 'zh' ? '资质证书' : 'Certifications'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' ? '公司已获得多项行业资质认证与专利证书' : 'The company has obtained multiple industry certifications and patents'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Radiation Safety License */}
              <div className="group bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-200 hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {language === 'zh' ? '辐射安全许可证' : 'Radiation Safety License'}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {language === 'zh' ? '依法取得辐射安全许可资质，确保业务合规运营' : 'Obtained radiation safety license in accordance with law, ensuring compliant business operations'}
                    </p>
                    <a
                      href="/辐射安全许可证正本签章.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm group-hover:gap-3 transition-all"
                    >
                      {language === 'zh' ? '查看证书' : 'View Certificate'}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Patents */}
              {patents.map((patent, index) => (
                <div key={index} className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 card-hover">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${index % 3 === 0 ? 'from-blue-500 to-cyan-500' : index % 3 === 1 ? 'from-violet-500 to-purple-500' : 'from-emerald-500 to-teal-500'} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{language === 'zh' ? patent.title : patent.titleEn}</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {language === 'zh' ? patent.type : patent.typeEn}
                      </p>
                      <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
                        {language === 'zh' ? '查看证书' : 'View Certificate'}
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
