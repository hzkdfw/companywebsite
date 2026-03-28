import { useEffect } from 'react';

// 性能监控组件
export default function PerformanceMonitor() {
  useEffect(() => {
    // 监控页面加载性能
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (perfData) {
            const metrics = {
              // DNS 查询时间
              dns: perfData.domainLookupEnd - perfData.domainLookupStart,
              // TCP 连接时间
              tcp: perfData.connectEnd - perfData.connectStart,
              // 首字节时间 (TTFB)
              ttfb: perfData.responseStart - perfData.requestStart,
              // DOM 解析时间
              domParse: perfData.domInteractive - perfData.responseEnd,
              // 页面完全加载时间
              load: perfData.loadEventEnd - perfData.startTime,
              // DOM Ready 时间
              domReady: perfData.domContentLoadedEventEnd - perfData.startTime,
            };

            console.log('📊 性能指标:', metrics);

            // 如果需要，可以发送到分析服务
            // sendToAnalytics(metrics);
          }
        }, 0);
      });

      // 监控 First Contentful Paint (FCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('🎨 First Contentful Paint:', entry.startTime, 'ms');
          }
        }
      });

      observer.observe({ entryTypes: ['paint'] });

      // 监控 Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('🖼️ Largest Contentful Paint:', lastEntry.startTime, 'ms');
      });

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // 监控 Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('📐 Cumulative Layout Shift:', clsValue);
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        observer.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
}
