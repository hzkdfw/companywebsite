import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// 生产部署配置 (用于 Vercel)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Vercel 会自动设置环境变量，不需要指定 base
  // 构建输出到 dist 目录
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // 服务器配置
  server: {
    host: true,
    port: parseInt(process.env.PORT || '3000'),
  },
});