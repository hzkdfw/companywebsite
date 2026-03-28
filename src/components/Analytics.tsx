import { useEffect } from 'react';

// Google Analytics 组件（需要配置 GA_ID）
// 使用方法：在 index.html 中添加 Google Analytics 脚本
// 或使用此组件进行更精细的控制

interface AnalyticsProps {
  gaId?: string;  // Google Analytics ID (G-XXXXXXXXXX)
}

export default function Analytics({ gaId }: AnalyticsProps) {
  useEffect(() => {
    if (!gaId) return;

    // 加载 Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', {
        page_path: window.location.pathname,
        anonymize_ip: true,  // GDPR 合规
        cookie_flags: 'SameSite=None;Secure'
      });
    `;
    document.head.appendChild(script2);

    // 监听路由变化（SPA）
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', gaId, {
          page_path: window.location.pathname,
        });
      }
    };

    // 监听 pushState 和 replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleRouteChange();
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleRouteChange();
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [gaId]);

  return null;
}

// 类型声明
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
