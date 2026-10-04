<div align="center">

# Toolso.AI

**An open-source AI tools directory to help you discover the best AI tools**

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql)](https://www.postgresql.org/)

[English](#english) | [中文](#中文)

<br/>

**Discover, explore, and share the best AI tools.**

</div>

---

<a name="english"></a>

## Overview

Toolso.AI is an open-source AI tools directory designed to help users discover the best AI tools across various categories. Built with Next.js 16, React 19, and TypeScript, it features a modern, responsive interface with powerful search and filtering capabilities, multilingual support, and a comprehensive admin panel for tool management.

### Key Features

| Feature | Description | Benefits |
|---------|-------------|----------|
| **AI Tools Directory** | Categorized AI tools listing | Easy discovery and exploration |
| **Search & Filter** | Powerful search with category filters | Find the right tool quickly |
| **Admin Panel** | Tool & user management | Manage content with ease |
| **Favorites** | Save tools to your personal collection | Sign in and build your toolbox |
| **Newsletter** | Footer subscription backed by Resend | Grow your audience |
| **Blog System** | MDX-powered multilingual blog | SEO-optimized AI insights |
| **i18n** | next-intl internationalization | English & Chinese out of the box |
| **Authentication** | Better Auth + Google OAuth | User accounts and submissions |
| **Theming** | Light/Dark mode | Comfortable browsing experience |

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+
- PostgreSQL database

### Installation

```bash
# Clone the repository
git clone https://github.com/coolchange-ai/toolso-ai-open.git
cd toolso-ai-open

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Push database schema
pnpm db:push

# (Optional) Seed 51 AI tools, 10 categories and 30 tags
pnpm seed:tools

# (Optional) Create an admin account
pnpm admin:setup

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Environment Configuration

Create `.env.local` with your configuration:

```env
# Required
DATABASE_URL="postgresql://user:password@host/db?sslmode=require"
BETTER_AUTH_SECRET="your-secret-key-at-least-32-characters"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Email (Required for auth features)
RESEND_API_KEY="re_your_api_key"
RESEND_FROM_EMAIL="Your App <noreply@yourdomain.com>"

# Optional: Google OAuth
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"
```

See [.env.example](.env.example) for all available options.

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── (auth)/            # Authentication pages
│   │   ├── (marketing)/       # Public pages (home, blog, tools)
│   │   ├── (protected)/       # User dashboard, profile
│   │   └── (admin)/           # Admin panel
│   └── api/                   # API routes
├── components/                # Reusable UI components
├── features/                  # Feature modules
│   ├── auth/                  # Authentication logic
│   ├── admin/                 # Admin components
│   ├── tools/                 # AI tools directory
│   └── navigation/            # Navigation components
├── lib/                       # Core utilities
│   ├── auth.ts               # Better Auth config
│   ├── db/                   # Database schema & connection
│   └── email.ts              # Email utilities
└── emails/                   # React Email templates

messages/                     # i18n translation files
public/                       # Static assets
scripts/                      # Build & admin scripts
```

## Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS + Framer Motion
- **Components**: Custom components + Radix UI
- **Forms**: React Hook Form + Zod validation
- **Themes**: next-themes (dark/light mode)

### Backend
- **Authentication**: Better Auth
- **Database**: PostgreSQL + Drizzle ORM
- **Email**: Resend
- **Storage**: Cloudflare R2 / AWS S3

### Developer Experience
- **Language**: TypeScript (strict mode)
- **Linting**: ESLint
- **Package Manager**: pnpm

## Available Scripts

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint (flat config)
pnpm typecheck        # Run TypeScript type check
pnpm i18n:check       # Verify translation key consistency

# Database
pnpm db:generate      # Generate Drizzle migrations
pnpm db:migrate       # Run migrations
pnpm db:push          # Push schema to database
pnpm db:studio        # Open Drizzle Studio
pnpm seed:tools       # Seed AI tools data

# Admin
pnpm admin:setup      # Create admin account

# Content
pnpm generate:blog-manifest  # Generate blog manifest
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Docker

```bash
# Start PostgreSQL + app
docker compose up -d --build

# Initialize database (run from host)
DATABASE_URL=postgresql://toolso:toolso@localhost:5432/toolso pnpm db:push
DATABASE_URL=postgresql://toolso:toolso@localhost:5432/toolso pnpm seed:tools
DATABASE_URL=postgresql://toolso:toolso@localhost:5432/toolso pnpm admin:setup
```

### Other Platforms

The template works with any platform supporting Node.js:
- Railway
- Render
- Self-hosted

### Deployment Checklist

- [ ] Set up PostgreSQL database (Supabase, Neon, or Vercel Postgres)
- [ ] Configure Resend for email
- [ ] Update `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL` with production domain
- [ ] Run `pnpm db:push` to initialize database
- [ ] Create admin account with `pnpm admin:setup`

## Internationalization

The template supports multiple languages via `next-intl`:

- **Supported**: English (`en`), Chinese (`zh`)
- **Route Format**: English is the default locale without prefix (`/...`), Chinese uses `/zh/...` (`localePrefix: 'as-needed'`)
- **Translation Files**: `messages/en.json`, `messages/zh.json`
- **Consistency Check**: `pnpm i18n:check`

### Adding a New Language

1. Copy `messages/en.json` to `messages/{locale}.json`
2. Translate the content
3. Update `i18n.config.ts`

> Note: UI copy is fully translatable via JSON files, but tool/category/tag **data** is stored as bilingual columns (`nameEn`/`nameZh`) in the database. Adding a third content language requires extending the schema and queries.

## Roadmap

- [ ] User tool submission with review workflow
- [ ] Tool ratings & comments
- [ ] Automated tool data import pipeline

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

---

<a name="中文"></a>

## 项目概览

Toolso.AI 是一个开源的 AI 工具导航站，旨在帮助用户发现各类优秀的 AI 工具。基于 Next.js 16、React 19 和 TypeScript 构建，拥有现代化的响应式界面、强大的搜索和筛选功能、多语言支持，以及完善的后台管理系统。

### 核心特性

| 特性 | 描述 | 优势 |
|------|------|------|
| **AI 工具目录** | 分类展示 AI 工具 | 轻松发现和探索 |
| **搜索与筛选** | 强大的搜索和分类筛选 | 快速找到合适的工具 |
| **管理后台** | 工具和用户管理 | 轻松管理内容 |
| **收藏功能** | 登录用户可收藏工具 | 打造个人工具箱 |
| **Newsletter** | 页脚订阅（基于 Resend） | 沉淀你的用户 |
| **博客系统** | MDX 驱动的多语言博客 | SEO 优化的 AI 资讯 |
| **国际化** | next-intl 国际化 | 中英文开箱即用 |
| **身份认证** | Better Auth + Google OAuth | 用户账户和提交功能 |
| **主题切换** | 深色/浅色模式 | 舒适的浏览体验 |

## 快速开始

### 前置要求

- Node.js 18+
- pnpm 8+
- PostgreSQL 数据库

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/coolchange-ai/toolso-ai-open.git
cd toolso-ai-open

# 安装依赖
pnpm install

# 设置环境变量
cp .env.example .env.local

# 推送数据库结构
pnpm db:push

# （可选）导入 51 个 AI 工具、10 个分类、30 个标签种子数据
pnpm seed:tools

# （可选）创建管理员账户
pnpm admin:setup

# 启动开发服务器
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 环境变量配置

创建 `.env.local` 并配置：

```env
# 必需配置
DATABASE_URL="postgresql://user:password@host/db?sslmode=require"
BETTER_AUTH_SECRET="至少32字符的密钥"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# 邮件（认证功能必需）
RESEND_API_KEY="re_your_api_key"
RESEND_FROM_EMAIL="Your App <noreply@yourdomain.com>"

# 可选：Google OAuth
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"
```

完整配置请参考 [.env.example](.env.example)。

## 项目结构

```
src/
├── app/
│   ├── [locale]/              # 国际化路由
│   │   ├── (auth)/            # 认证页面
│   │   ├── (marketing)/       # 公开页面（首页、博客、工具）
│   │   ├── (protected)/       # 用户仪表板、个人资料
│   │   └── (admin)/           # 管理后台
│   └── api/                   # API 路由
├── components/                # 可复用 UI 组件
├── features/                  # 功能模块
│   ├── auth/                  # 认证逻辑
│   ├── admin/                 # 管理后台组件
│   ├── tools/                 # AI 工具目录
│   └── navigation/            # 导航组件
├── lib/                       # 核心工具库
│   ├── auth.ts               # Better Auth 配置
│   ├── db/                   # 数据库 Schema 和连接
│   └── email.ts              # 邮件工具
└── emails/                   # React Email 模板

messages/                     # 国际化翻译文件
public/                       # 静态资源
scripts/                      # 构建和管理脚本
```

## 技术栈

### 前端
- **框架**: Next.js 16 (App Router)
- **UI 库**: React 19
- **样式**: Tailwind CSS + Framer Motion
- **组件**: 自定义组件 + Radix UI
- **表单**: React Hook Form + Zod 验证
- **主题**: next-themes (深色/浅色模式)

### 后端
- **身份认证**: Better Auth
- **数据库**: PostgreSQL + Drizzle ORM
- **邮件**: Resend
- **存储**: Cloudflare R2 / AWS S3

### 开发体验
- **语言**: TypeScript (严格模式)
- **代码检查**: ESLint
- **包管理器**: pnpm

## 可用脚本

```bash
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm start            # 启动生产服务器
pnpm lint             # 运行 ESLint（flat config）
pnpm typecheck        # TypeScript 类型检查
pnpm i18n:check       # 校验翻译键一致性

# 数据库
pnpm db:generate      # 生成 Drizzle 迁移
pnpm db:migrate       # 运行迁移
pnpm db:push          # 推送 schema 到数据库
pnpm db:studio        # 打开 Drizzle Studio
pnpm seed:tools       # 导入工具种子数据

# 管理员
pnpm admin:setup      # 创建管理员账户

# 内容
pnpm generate:blog-manifest  # 生成博客清单
```

## 部署指南

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 添加环境变量
4. 部署

### Docker

```bash
# 启动 PostgreSQL + 应用
docker compose up -d --build

# 初始化数据库（在宿主机执行）
DATABASE_URL=postgresql://toolso:toolso@localhost:5432/toolso pnpm db:push
DATABASE_URL=postgresql://toolso:toolso@localhost:5432/toolso pnpm seed:tools
DATABASE_URL=postgresql://toolso:toolso@localhost:5432/toolso pnpm admin:setup
```

### 其他平台

模板支持任何支持 Node.js 的平台：
- Railway
- Render
- 自托管

### 部署清单

- [ ] 设置 PostgreSQL 数据库（Supabase、Neon 或 Vercel Postgres）
- [ ] 配置 Resend 邮件服务
- [ ] 更新 `BETTER_AUTH_URL` 和 `NEXT_PUBLIC_APP_URL` 为生产域名
- [ ] 运行 `pnpm db:push` 初始化数据库
- [ ] 使用 `pnpm admin:setup` 创建管理员账户

## 国际化

模板通过 `next-intl` 支持多语言：

- **已支持**: 英文 (`en`)、中文 (`zh`)
- **路由格式**: 英文为默认语言不带前缀（`/...`），中文为 `/zh/...`（`localePrefix: 'as-needed'`）
- **翻译文件**: `messages/en.json`、`messages/zh.json`
- **一致性检查**: `pnpm i18n:check`

### 添加新语言

1. 复制 `messages/en.json` 到 `messages/{语言代码}.json`
2. 翻译内容
3. 更新 `i18n.config.ts`

> 注意：UI 文案可完全通过 JSON 文件翻译，但工具/分类/标签的**数据**在数据库中以双语列（`nameEn`/`nameZh`）存储。新增第三种内容语言需要扩展 schema 和查询。

## Roadmap

- [ ] 用户工具提交与审核工作流
- [ ] 工具评分与评论
- [ ] 自动化工具数据采集管线

## 贡献指南

欢迎贡献！请随时提交 Pull Request。

1. Fork 仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 开源协议

本项目基于 Apache License 2.0 开源 - 详情请查看 [LICENSE](LICENSE) 文件。

---

<div align="center">

## Related Projects

| Project | Description | Link |
|---------|-------------|------|
| **Toolso.AI** | AI Tools Directory | [https://toolso.ai](https://toolso.ai) |
| **CoolChange.AI** | AI Development Studio | [https://coolchange.ai](https://coolchange.ai) |
| **chatPPT.app** | AI Presentation Generator | [https://chatppt.app](https://chatppt.app) |
| **AIHealthGuide** | AI Health Assistant | [https://aihealthguide.app](https://aihealthguide.app) |

<br/>

---

<br/>

**Built with love by [CoolChange.AI](https://coolchange.ai)**

<br/>

If you find this project helpful, please consider giving it a star!

</div>
