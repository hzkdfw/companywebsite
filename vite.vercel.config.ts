import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vercel部署专用配置
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 为Vercel设置相对路径基础
  base: './', // 关键：使用相对路径而不是绝对路径
  build: {
    outDir: 'dist',
    sourcemap: false, // 生产环境关闭source map以提高性能
    cssCodeSplit: false, // 不拆分CSS以减少请求
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/@radix-ui') || id.includes('node_modules/lucide-react')) {
            return 'ui-vendor';
          }
          if (id.includes('node_modules/zod') || id.includes('node_modules/sonner')) {
            return 'utils-vendor';
          }
        }
      }
    }
  },
  server: {
    host: true,
    port: parseInt(process.env.PORT || '3000'),
  },
});