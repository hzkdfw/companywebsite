import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEOHead({
  title = '杭州凯盾防务科技有限公司',
  description = '专注于智能防务装备与系统解决方案，提供机器人、无人机、核生化防护等高科技产品与服务。',
  keywords = '凯盾防务,智能防务,机器人,无人机,核生化防护,杭州防务科技',
  image = '/images/logo/杭州凯盾防务1.png',
  url = 'https://keeshield.com',
}: SEOHeadProps) {
  useEffect(() => {
    // 更新页面标题
    document.title = title;

    // 更新 meta 标签
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateOGMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 基础 Meta 标签
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', '杭州凯盾防务科技有限公司');
    updateMeta('robots', 'index, follow');

    // Open Graph 标签
    updateOGMeta('og:title', title);
    updateOGMeta('og:description', description);
    updateOGMeta('og:image', image);
    updateOGMeta('og:url', url);
    updateOGMeta('og:type', 'website');
    updateOGMeta('og:site_name', '凯盾防务');

    // Twitter Card 标签
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // 结构化数据 (JSON-LD)
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '杭州凯盾防务科技有限公司',
      url: url,
      logo: image,
      description: description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: '杭州',
        addressRegion: '浙江省',
        addressCountry: 'CN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['Chinese', 'English'],
      },
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url]);

  return null;
}
