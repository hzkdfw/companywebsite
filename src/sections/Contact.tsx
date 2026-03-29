import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useLanguage } from '@/i18n';

const contactInfo = [
  {
    icon: Phone,
    title: '咨询电话',
    titleEn: 'Hotline',
    content: '13905819537',
    subContent: '工作日 9:00-18:00',
    subContentEn: 'Weekdays 9:00-18:00',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    titleEn: 'Email',
    content: 'wangyanlai@hotmail.com',
    subContent: '商务合作咨询',
    subContentEn: 'Business Cooperation',
  },
  {
    icon: MapPin,
    title: '公司地址',
    titleEn: 'Address',
    content: '杭州市余杭区五常大道181号',
    contentEn: 'Room 910, East Building, Huali Headquarters, 181 Wuchang Avenue, Yuhang District, Hangzhou',
    subContent: '华立总部大楼东910室',
    subContentEn: '',
  },
  {
    icon: Clock,
    title: '工作时间',
    titleEn: 'Working Hours',
    content: '周一至周五',
    contentEn: 'Monday to Friday',
    subContent: '9:00 - 18:00',
    subContentEn: '9:00 - 18:00',
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'zh' ? '提交成功！我们会尽快与您联系。' : 'Submitted successfully! We will contact you soon.');
    setFormData({ name: '', company: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">{t.contact.title}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === 'zh' ? '获取专业解决方案' : 'Get Professional Solutions'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{language === 'zh' ? item.title : item.titleEn}</div>
                        <div className="font-semibold text-gray-900">{language === 'zh' && item.content !== contactInfo[2].content ? item.content : (language === 'zh' ? contactInfo[2].content : contactInfo[2].contentEn)}</div>
                        <div className="text-sm text-gray-500 mt-1">{language === 'zh' ? item.subContent : (item.subContentEn || item.subContent)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    title="公司地址地图"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src="https://apis.map.qq.com/ws/staticmap/v2/?center=30.289547,120.034789&zoom=15&size=600*300&maptype=roadmap&markers=size:large|color:red|label:K|30.289547,120.034789&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                  <a 
                    href="https://uri.amap.com/marker?position=120.034789,30.289547&name=华立总部大楼&coordinate=gaode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-white/90 hover:bg-white px-3 py-1.5 rounded-lg text-sm font-medium text-blue-600 shadow-sm transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-4 h-4" />
                    {language === 'zh' ? '导航' : 'Navigate'}
                  </a>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-b-2xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{language === 'zh' ? '杭州市余杭区五常大道181号' : '181 Wuchang Avenue, Yuhang District, Hangzhou'}</p>
                    <p className="text-sm text-gray-500">{language === 'zh' ? '华立总部大楼东910室' : 'Room 910, East Building, Huali Headquarters'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'zh' ? '在线咨询' : 'Online Inquiry'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.name} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={language === 'zh' ? '请输入姓名' : 'Enter your name'}
                        required
                        className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.company}
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={language === 'zh' ? '请输入公司名称' : 'Enter company name'}
                        className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.phone} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={language === 'zh' ? '请输入联系电话' : 'Enter phone number'}
                        required
                        className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.email}
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={language === 'zh' ? '请输入邮箱地址' : 'Enter email address'}
                        className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.message} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={language === 'zh' ? '请详细描述您的需求...' : 'Please describe your needs in detail...'}
                      required
                      rows={5}
                      className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t.contact.submit}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    {language === 'zh' 
                      ? '提交即表示您同意我们的隐私政策，我们将保护您的个人信息安全'
                      : 'By submitting, you agree to our privacy policy. We will protect your personal information.'}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
