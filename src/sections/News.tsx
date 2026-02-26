import { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: '凯盾防务完成数千万元A轮融资，加速智能机器狗研发',
    summary: '本轮融资由知名投资机构领投，资金将用于产品研发、市场拓展和团队建设。',
    date: '2024-01-15',
    category: '公司新闻',
    image: '/images/product-robot-dog.jpg',
  },
  {
    id: 2,
    title: '凯盾防务与国网浙江电力签署战略合作协议',
    summary: '双方将在电力智能巡检领域展开深度合作，共同推动电力行业数字化转型。',
    date: '2024-01-10',
    category: '战略合作',
    image: '/images/industry-power.jpg',
  },
  {
    id: 3,
    title: '凯盾防务亮相2024世界机器人大会，发布新一代机器狗',
    summary: '新款机器狗在续航能力、负载能力和智能化水平方面均有显著提升。',
    date: '2024-01-05',
    category: '产品发布',
    image: '/images/industry-education.jpg',
  },
];

export default function News() {
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
      id="news"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gray-50"
    >
      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                <Newspaper className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm font-medium">新闻资讯</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                最新动态
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              查看全部
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <article
                key={news.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-blue-600">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                    {news.summary}
                  </p>

                  {/* Read More */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    阅读更多
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
