# Vercel 部署说明

## 部署配置

本项目已配置为可在 Vercel 上一键部署。

### 配置文件

- `vercel.json` - 包含 SPA 路由重写规则
- `vite.vercel.config.ts` - 专为 Vercel 优化的构建配置

### 构建命令

Vercel 将自动使用以下命令构建项目：

```bash
npm run build:vercel
```

或

```bash
npx vite build --config vite.vercel.config.ts
```

### 关键配置

1. **基础路径**: 使用相对路径 (`base: './'`) 确保在 Vercel 上正确加载资源
2. **路由重写**: `vercel.json` 中的重写规则确保 SPA 路由正常工作
3. **代码分割**: 构建时启用代码分割以优化加载性能

### 部署步骤

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 仪表板中导入项目
3. 确认以下设置：
   - Framework preset: 自动检测
   - Build command: `npm run build:vercel`
   - Output directory: `dist`
4. 点击 Deploy

### 故障排除

如果部署后页面无法正常加载：

1. 检查 Vercel 构建日志中的错误信息
2. 确认 `vercel.json` 中的重写规则是否正确
3. 确认构建后资源路径是否为相对路径
4. 检查是否有 JavaScript 错误阻止页面渲染

### 本地测试

您可以在本地测试 Vercel 构建：

```bash
npm run build:vercel
npm run preview
```

这将模拟 Vercel 的部署环境。