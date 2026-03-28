#!/bin/bash

# Vercel部署脚本
# 用于确保使用正确的配置构建项目

echo "开始为Vercel构建项目..."

# 使用Vercel专用配置进行构建
npm run build -- --config vite.vercel.config.ts

echo "构建完成！"
echo "现在可以将代码推送到GitHub，Vercel将自动部署。"