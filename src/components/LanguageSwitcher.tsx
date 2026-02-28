import { Globe } from 'lucide-react';
import { useLanguage } from '@/i18n';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
        language === 'zh'
          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
      }`}
      title={language === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'zh' ? 'EN' : '中'}</span>
    </button>
  );
}
