import { useEffect, useRef } from 'react';

interface AMapProps {
  address: string;
  className?: string;
}

// 高德地图组件
export default function AMap({ address, className = '' }: AMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 加载高德地图 API
    const script = document.createElement('script');
    script.src = 'https://webapi.amap.com/maps?v=2.0&key=your_amap_key';
    script.async = true;
    
    // 由于没有 API Key，使用静态地图图片作为替代
    // 实际使用时需要申请高德地图 API Key
    
    return () => {
      // 清理
    };
  }, [address]);

  // 使用高德地图静态图片 API（无需 API Key）
  const mapImageUrl = `https://restapi.amap.com/v3/staticmap?location=120.034789,30.289547&zoom=15&size=600*300&markers=mid,,A:120.034789,30.289547`;

  return (
    <div className={`relative ${className}`}>
      {/* 静态地图图片 */}
      <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="公司地址地图"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=120.030,30.285,120.040,30.295&layer=mapnik&marker=30.289547,120.034789`}
          allowFullScreen
        />
      </div>
      
      {/* 地址信息覆盖层 */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">杭州凯盾防务科技有限公司</h4>
            <p className="text-sm text-gray-600 mt-1">杭州市余杭区五常大道181号</p>
            <p className="text-sm text-gray-600">华立总部大楼东910室</p>
            <a 
              href="https://uri.amap.com/navigation?to=120.034789,30.289547,华立总部大楼&mode=car" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 text-sm mt-2 hover:text-blue-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              导航到这里
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
