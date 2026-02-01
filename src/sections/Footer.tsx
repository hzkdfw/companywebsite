import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  products: [
    { name: '智能机器狗', href: '#products' },
    { name: '工业无人机', href: '#products' },
    { name: '系统集成', href: '#products' },
    { name: '定制开发', href: '#contact' },
  ],
  industries: [
    { name: '电力巡检', href: '#industries' },
    { name: '应急救援', href: '#industries' },
    { name: '工业检测', href: '#industries' },
    { name: '安防监控', href: '#industries' },
  ],
  company: [
    { name: '关于我们', href: '#about' },
    { name: '新闻资讯', href: '#news' },
    { name: '加入我们', href: '#contact' },
    { name: '联系方式', href: '#contact' },
  ],
  support: [
    { name: '产品手册', href: '#' },
    { name: '技术文档', href: '#' },
    { name: '售后服务', href: '#contact' },
    { name: '常见问题', href: '#' },
  ],
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="w-full section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                  <img 
                    src="/images/logo/杭州凯盾防务1.png" 
                    alt="凯盾防务" 
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.style.display = 'none';
                      
                      // Fallback to text logo
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center"><span class="text-white font-bold text-xl">凯</span></div>';
                      }
                    }}
                  />
                </div>
                <div>
                  <div className="font-bold text-xl">凯盾防务</div>
                  <div className="text-gray-400 text-sm">KAIDUN DEFENSE</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                专注于智能防务装备研发与系统集成服务，为电力、应急、工业等领域提供专业的智能化解决方案。
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>13905819537</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>wangyanlai@hotmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>杭州市余杭区五常大道181号</span>
                  <br />
                  <span>华立总部大楼东910室</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-lg mb-4">产品中心</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-semibold text-lg mb-4">行业应用</h4>
              <ul className="space-y-3">
                {footerLinks.industries.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">关于我们</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-4">服务支持</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="w-full section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © 2024 杭州凯盾防务科技有限公司 版权所有
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">使用条款</a>
              <a href="#" className="hover:text-white transition-colors">网站地图</a>
              <span>浙ICP备XXXXXXXX号</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
