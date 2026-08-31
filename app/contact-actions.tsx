'use client';

import { useState } from 'react';

export default function ContactActions({ wechatId }: { wechatId: string }) {
  const [copied, setCopied] = useState(false);
  async function copyWechatId() {
    try { await navigator.clipboard.writeText(wechatId); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); }
  }
  return <div className="contact-actions"><span className="wechat-id">微信号：<strong>{wechatId}</strong></span><button type="button" onClick={copyWechatId} className="copy-button" aria-live="polite">{copied ? '已复制' : '复制微信号'}</button></div>;
}
