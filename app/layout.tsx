import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL } from './site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '518AILab｜连接 AI 人才、企业需求与创新项目',
  description: '518AILab 是以杭州 AI 生态为起点的创新连接网络，通过内容、活动、案例与共创，连接 AI 人才、企业需求与创新项目。',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'zh_CN', siteName: '518AILab', title: '518AILab｜连接 AI 人才、企业需求与创新项目', description: '以杭州 AI 生态为起点的创新连接网络。' },
  twitter: { card: 'summary', title: '518AILab｜连接 AI 人才、企业需求与创新项目', description: '以杭州 AI 生态为起点的创新连接网络。' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
