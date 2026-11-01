import ContactActions from './contact-actions';
import { ASSET_BASE_PATH, SITE_URL } from './site';

export const dynamic = 'force-static';

const sourceLinks = {
  handbook: 'https://icnepuql73ya.feishu.cn/wiki/MfuEw9QSHi5LcHkvPNRcQgAgndg?from=from_copylink',
  fde: 'https://icnepuql73ya.feishu.cn/wiki/Wjyxwjtd5iBz05kR8fEcnP08nog',
};

const courseTracks = [
  { status: '已开设', title: 'FDE 实战掌握 AI 工程能力', copy: '围绕真实需求，完成从问题拆解、工作流搭建到结果验证与作品沉淀的实践。', featured: true },
  { status: '课程专题', title: 'AIGC 从会生成到能交付', copy: '从创作控制到项目交付，面向真实创作与业务场景展开练习。' },
  { status: '筹备专题', title: 'Agent · WorkBuddy', copy: '面向智能助手与工作流协作的下一阶段课程方向。' },
  { status: '筹备专题', title: '企业 Agent', copy: '聚焦企业场景中 Agent 的理解、设计与落地路径。' },
];

const courseLibrary = ['Claude Code 源码解析课', 'Claude Code 精品课', 'Claude Code 直播课', 'Codex 企业场景应用', 'AI + OPC 一人公司线下课', 'AIGC 课程与直播'];

const fdeLessons = [
  ['01', '认清 FDE：岗位边界与责任终点', '结果、生产与资产'],
  ['02', '进场第一周：看流程、数据与关键人', '观察日志、流程图与关键人地图'],
  ['03', '把模糊需求变成可解问题', 'WHY / WHAT / WITHIN 与 Project Charter'],
  ['04', '提示词与上下文实操', '理解模型生成，再迭代提示词'],
  ['05', 'Agent 协作与 RAG 问答', '目标、工具与结果驱动的协作'],
  ['06', '从业务需求到可运行的 RAG 助手', '需求管理、Codex、Git 与项目交接'],
  ['07', '从企业资料到 RAG', '资料整理、检索与可验证的回答'],
  ['08', '接入 DeepSeek 并完成 BizBot', '知识库、灰度、回滚与最小交付'],
  ['09', '项目练习：会议录音到飞书', '采用率、价值证明与信任建设'],
  ['10', 'FDE 从现场判断到持续交付', 'Skill、Connector、回顾与复用'],
];

const activityGroups = [
  { eyebrow: '分享与交流', title: '让经验流动', entries: ['AIGC 内容分享', '大咖对谈', '千问办公活动', 'AI 视频开源局', 'AI 魔法玩乐局'] },
  { eyebrow: '实作与学习', title: '把工具带进现场', entries: ['OpenClaw 线下课', 'Agent 线下讨论会', '线下安装 OpenClaw', 'Codex 线下学习会', 'Claude Code 线下分享'] },
  { eyebrow: '生态与共创', title: '在真实连接中生长', entries: ['FDE 专题线上课程', '上虞区 OPC 联创社区开业承办', '白马湖 AIGC + ACGN 活动协办'] },
];

const members = ['任孝忠', '林志庆', '徐浩铭', '尹龙云', '沐沐', '李文洁'];
const collaborations = ['OPC 政策接待讲解', '安康市领导班子拜访', 'FDE 人才合作培训签约'];

const faqItems = [
  { question: '518AILab 是什么？', answer: '518AILab 是以杭州 AI 生态为起点的创新连接网络，通过体系化课程、活动、案例与共创，连接 AI 人才、企业需求与创新项目。' },
  { question: '有哪些课程与学习内容？', answer: '已发布内容涵盖 FDE 实战、AIGC、Claude Code、Codex、企业 Agent、AI + OPC 一人公司等方向；具体开课安排以最新课程资料为准。' },
  { question: '518AILab 有哪些活动？', answer: '活动包括内容分享、工具实作、线下学习会、专题课程、生态交流与共创活动，旨在促成学习、实践与可信同行连接。' },
  { question: '如何联系 518AILab？', answer: '可扫描页面末尾的微信二维码，添加微信 vxbusi1688，或拨打电话 18530941024。' },
];

const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: '518AILab', alternateName: '518 AI Lab',
  description: '以杭州 AI 生态为起点的创新连接网络，提供体系化 AI 学习、活动交流与实践连接。',
  url: SITE_URL, logo: `${SITE_URL}images/518ailab-logo.png`, areaServed: '杭州', knowsAbout: ['人工智能', 'FDE', 'AIGC', 'Claude Code', 'Codex', '企业 Agent', 'AI 实践'],
};
const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', name: '518AILab', url: SITE_URL, inLanguage: 'zh-CN', description: '518AILab 体系化 AI 课程、活动、成员与合作交流介绍。' };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };

export default function Home() {
  const logoPath = `${ASSET_BASE_PATH}/images/518ailab-logo.png`;
  const qrCodePath = `${ASSET_BASE_PATH}/images/wechat-contact-20261102.png`;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回 518AILab 首页"><img src={logoPath} alt="518AILab" width="255" height="50" /></a>
        <nav aria-label="页面导航"><a href="#courses">课程体系</a><a href="#fde">FDE 学习</a><a href="#community">活动与成员</a><a href="#collaboration">合作交流</a></nav>
        <a className="header-cta" href="#contact">联系 518</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content page-shell">
          <p className="eyebrow">HANGZHOU · AI LEARNING &amp; CONNECTION NETWORK</p>
          <h1 id="hero-title">不止学会 AI，<br />更要用 AI 做出真实结果。</h1>
          <p className="hero-lead">518AILab 是以杭州 AI 生态为起点的可信同行圈。我们以体系化课程、真实案例、活动交流与实践连接，陪伴每一位实践者从会用工具，走向能够交付。</p>
          <div className="hero-actions"><a className="button button-primary" href="#courses">查看课程与活动 <span aria-hidden="true">↓</span></a><a className="text-link" href={sourceLinks.handbook} target="_blank" rel="noreferrer">查看使用说明书 <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-signal" aria-hidden="true"><span /> <span /> <span /></div>
      </section>

      <section className="intro page-shell" aria-labelledby="intro-title">
        <p className="section-kicker">ABOUT 518AILAB</p>
        <div className="intro-layout"><h2 id="intro-title">进入一个持续学习、持续实践、持续连接的 AI 同行网络。</h2><p>这里不只是一门课或一个聊天群。课程帮助你建立方法，活动让你遇见同行，真实问题推动实践，可信连接让能力与需求有机会真正相遇。</p></div>
      </section>

      <section className="course-section" id="courses" aria-labelledby="courses-title"><div className="page-shell">
        <div className="section-heading"><div><p className="section-kicker">SYSTEMATIC COURSES</p><h2 id="courses-title">体系化 AI 课程，<br />从会生成到能交付。</h2></div><p>课程方向持续更新，覆盖 AI 工程、AIGC 创作、开发工具、智能体与企业应用。具体时间与开课信息以课程资料为准。</p></div>
        <div className="course-track-grid">{courseTracks.map((course) => <article className={`course-track${course.featured ? ' featured' : ''}`} key={course.title}><p className="course-status">{course.status}</p><h3>{course.title}</h3><p>{course.copy}</p>{course.featured && <a href={sourceLinks.fde} target="_blank" rel="noreferrer">查看 FDE 学习一文通 <span aria-hidden="true">↗</span></a>}</article>)}</div>
        <div className="course-library"><p className="course-library-label">更多已列课程与主题</p><ul>{courseLibrary.map((course) => <li key={course}>{course}</li>)}</ul></div>
      </div></section>

      <section className="fde-section page-shell" id="fde" aria-labelledby="fde-title">
        <div className="fde-intro"><div><p className="section-kicker">FDE LEARNING GUIDE</p><h2 id="fde-title">FDE 实战：<br />从问题到持续交付。</h2></div><div><p>第一期 FDE 学习一文通围绕真实需求展开：先拆解问题，再搭建工作流、验证结果，最终沉淀可展示、可复盘、可复用的实践作品。</p><a className="outlined-link" href={sourceLinks.fde} target="_blank" rel="noreferrer">打开完整课程介绍、日历与学习资料 <span aria-hidden="true">↗</span></a></div></div>
        <div className="fde-outcomes"><p><span>01</span>需求拆解<br /><small>找到真实问题，明确目标与边界。</small></p><p><span>02</span>工作流搭建<br /><small>把模型、工具与 Agent 组合成方案。</small></p><p><span>03</span>结果验证<br /><small>建立基线、评估效果、持续优化。</small></p><p><span>04</span>作品沉淀<br /><small>整理为可展示、可复盘的作品集。</small></p></div>
        <div className="lesson-list" aria-label="FDE 十讲课程路径">{fdeLessons.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <aside className="learning-note"><p className="section-kicker">HOW TO LEARN</p><p><strong>带着真实问题学习，再用输出检验理解。</strong>学习资料建议以学习笔记方式沉淀；通过“讲给外行听、发现卡点、回到资料补齐、重新简化表达”的循环，让知识真正变成可用能力。</p></aside>
      </section>

      <section className="community-section" id="community" aria-labelledby="community-title"><div className="page-shell">
        <div className="section-heading"><div><p className="section-kicker">ACTIVITY &amp; COMMUNITY</p><h2 id="community-title">在活动里相遇，<br />在实践中同行。</h2></div><p>线上与线下活动服务于同一件事：让有共同问题、能力与资源的人深入交流，并把学习带回真实工作现场。</p></div>
        <div className="activity-grid">{activityGroups.map((group) => <article className="activity-card" key={group.title}><p className="card-label">{group.eyebrow}</p><h3>{group.title}</h3><ul>{group.entries.map((entry) => <li key={entry}>{entry}</li>)}</ul></article>)}</div>
        <div className="member-strip"><div><p className="section-kicker">MEMBER SPOTLIGHT</p><h3>成员风采</h3><p>成员来自不同背景，在学习、分享、交流与实践中一起积累可信连接。</p></div><ul>{members.map((member) => <li key={member}>{member}</li>)}</ul></div>
      </div></section>

      <section className="collaboration page-shell" id="collaboration" aria-labelledby="collaboration-title">
        <div className="collaboration-heading"><p className="section-kicker">COLLABORATION &amp; EXCHANGE</p><h2 id="collaboration-title">让 AI 学习、人才与真实场景，<br />发生更有价值的交流。</h2></div>
        <div className="collaboration-grid">{collaborations.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>围绕 AI 人才、场景理解与生态交流沉淀经验。具体合作以双方确认的范围与安排为准。</p></article>)}</div>
      </section>

      <section className="details-section" aria-labelledby="details-title"><div className="page-shell details-layout"><div><p className="section-kicker">DETAILED GUIDES</p><h2 id="details-title">把详细资料，<br />留给真正想深入的人。</h2></div><div className="detail-links"><a href={sourceLinks.handbook} target="_blank" rel="noreferrer"><span>01</span><div><strong>518 AI Lab 使用说明书</strong><small>社群介绍、课程列表、活动、成员与联系入口</small></div><b aria-hidden="true">↗</b></a><a href={sourceLinks.fde} target="_blank" rel="noreferrer"><span>02</span><div><strong>FDE 实战学习一文通</strong><small>课程介绍、师资、大纲、日历、学习方法与反馈</small></div><b aria-hidden="true">↗</b></a></div></div></section>

      <section className="faq page-shell" aria-labelledby="faq-title"><div className="faq-header"><p className="section-kicker">QUICK ANSWERS</p><h2 id="faq-title">关于 518AILab</h2></div><div className="faq-grid">{faqItems.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="page-shell contact-grid"><div className="contact-copy"><p className="section-kicker">CONTACT 518AILAB</p><h2 id="contact-title">从一次真诚交流开始。</h2><p>无论你正在寻找体系化 AI 学习、同行交流，还是希望讨论 AI 在真实业务中的实践，欢迎联系我们。</p><ContactActions wechatId="vxbusi1688" /><a className="phone-link" href="tel:18530941024"><span>联系电话</span><strong>185 3094 1024</strong></a></div><figure className="qr-card qr-contact"><img src={qrCodePath} alt="518AILab 主理人微信二维码，微信号 vxbusi1688" width="950" height="1260" /><figcaption>扫码添加微信 · 验证消息写“518”</figcaption></figure></div></section>

      <footer className="site-footer page-shell"><img src={logoPath} alt="518AILab" width="204" height="40" /><p>以杭州 AI 生态为起点，连接 AI 人才、企业需求与创新项目。</p></footer>
    </main>
  );
}
