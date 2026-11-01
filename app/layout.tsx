import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL } from './site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '518AILab｜体系化 AI 课程、活动与可信同行网络',
  description: '518AILab 提供 FDE、AIGC、Claude Code、Codex、企业 Agent 等体系化 AI 学习内容，以及活动交流、成员连接与实践协作。',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'zh_CN', siteName: '518AILab', title: '518AILab｜体系化 AI 课程、活动与可信同行网络', description: '从会生成到能交付：FDE、AIGC、Claude Code、Codex、企业 Agent 等体系化学习与实践连接。' },
  twitter: { card: 'summary', title: '518AILab｜体系化 AI 课程、活动与可信同行网络', description: '从会生成到能交付的 AI 学习与实践连接。' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
