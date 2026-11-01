import ContactActions from './contact-actions';
import { ASSET_BASE_PATH, SITE_URL } from './site';

export const dynamic = 'force-static';

const sourceLinks = {
  handbook: 'https://icnepuql73ya.feishu.cn/wiki/MfuEw9QSHi5LcHkvPNRcQgAgndg?from=from_copylink',
  fde: 'https://icnepuql73ya.feishu.cn/wiki/Wjyxwjtd5iBz05kR8fEcnP08nog',
  aigc: 'https://icnepuql73ya.feishu.cn/wiki/C4JTwhxZviveF3kDVa6cdOjLn9e?from=from_copylink',
};

const courseLibrary = ['FDE 前沿部署工程师', 'AIGC 课程与直播', 'Claude Code 源码解析课', 'Claude Code 精品课', 'Claude Code 直播课', 'Codex 企业场景应用', 'AI + OPC 一人公司线下课'];
const activityList = ['内容分享与大咖对谈', '工具实作与线下学习会', '专题课程与生态交流', '共创活动与社区协办'];
const members = ['任孝忠', '林志庆', '徐浩铭', '尹龙云', '沐沐', '李文洁'];

const faqItems = [
  { question: '518AILab 是什么？', answer: '518AILab 是以杭州 AI 生态为起点的学习与连接网络。通过体系化课程、活动交流和实践连接，让 AI 能力进入真实的工作与创作。' },
  { question: '课程只有 FDE 吗？', answer: '不是。FDE 是已呈现的课程专题之一；课程地图同时包含 AIGC、开发工具、企业应用等方向，并为后续专题持续预留更新位置。具体内容以每期课程资料为准。' },
  { question: 'AIGC 课程关注什么？', answer: '当前公开资料中的 AIGC 专题面向短剧与漫剧创作练习，覆盖故事方向、剧本与分镜、画面和声音制作，以及发布后的反馈迭代。' },
  { question: '如何联系 518AILab？', answer: '可扫描页面末尾的微信二维码，添加微信 vxbusi1688，或拨打电话 18530941024。' },
];

const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: '518AILab', alternateName: '518 AI Lab',
  description: '以杭州 AI 生态为起点的学习与连接网络，提供体系化 AI 课程、活动交流与实践连接。',
  url: SITE_URL, logo: `${SITE_URL}images/518ailab-logo.png`, areaServed: '杭州',
  knowsAbout: ['人工智能', 'FDE', 'AIGC', 'Claude Code', 'Codex', '企业 AI 应用', 'AI 实践'],
};
const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', name: '518AILab', url: SITE_URL, inLanguage: 'zh-CN', description: '518AILab 体系化 AI 课程、活动与可信同行网络。' };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };

export default function Home() {
  const image = (name: string) => `${ASSET_BASE_PATH}/images/${name}`;
  const logoPath = image('518ailab-logo.png');
  const qrCodePath = image('wechat-contact-20261102.png');

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="site-header page-shell">
        <a className="brand" href="#top" aria-label="返回 518AILab 首页"><img src={logoPath} alt="518AILab" width="255" height="50" /></a>
        <nav aria-label="页面导航"><a href="#courses">课程</a><a href="#activities">活动</a><a href="#about">关于我们</a></nav>
        <a className="header-cta" href="#contact">联系 518 <span aria-hidden="true">↘</span></a>
      </header>

      <section className="hero page-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">518 AI LAB · HANGZHOU</p>
          <h1 id="hero-title">让 AI 从<br /><em>会用</em>走到 <em>能做</em>。</h1>
          <p className="hero-lead">518AILab 是一个面向真实工作与创作的学习、交流和实践网络。我们把课程、活动与可信同行连接在一起，让想法不止停在工具体验。</p>
          <div className="hero-actions"><a className="button" href="#courses">探索课程地图 <span aria-hidden="true">↓</span></a><a className="quiet-link" href={sourceLinks.handbook} target="_blank" rel="noreferrer">阅读使用说明书 <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-art" aria-label="518AILab AIGC 课程展示">
          <div className="hero-stamp">IDEAS<br />INTO<br />PRACTICE</div>
          <img src={image('aigc-course.jpg')} alt="518AILab AIGC 专项课程封面" width="720" height="540" fetchPriority="high" />
          <p>体系化学习 · 真实问题 · 同行连接</p>
        </div>
      </section>

      <section className="manifesto" id="about" aria-labelledby="manifesto-title"><div className="page-shell manifesto-layout">
        <p className="section-label">WHY 518AILAB</p><h2 id="manifesto-title">一门课带来方法，<br />一群人让方法走得更远。</h2>
        <div><p>这里不以“追新工具”为终点。我们更关心：你是否能把 AI 放进一个具体问题里，完成一次清晰表达、一次可复盘的练习，或一次更有质量的协作。</p><a className="inline-link" href="#contact">从交流开始 <span aria-hidden="true">→</span></a></div>
      </div></section>

      <section className="courses" id="courses" aria-labelledby="courses-title"><div className="page-shell">
        <div className="section-heading"><div><p className="section-label">COURSE ATLAS</p><h2 id="courses-title">课程不是一条单线，<br />而是一张不断生长的地图。</h2></div><p>FDE 与 AIGC 是已经展开的两个方向。开发工具、企业应用与未来专题会在同一张地图里持续更新；每一主题都从“如何把它做出来”开始。</p></div>
        <div className="featured-courses">
          <article className="course-feature aigc-feature"><div className="course-image"><img src={image('aigc-course.jpg')} alt="AIGC 专项课程封面" width="720" height="540" /><span>专题 02</span></div><div className="course-copy"><p className="course-type">AIGC · 创作与交付</p><h3>从会生成，到能完成一部作品。</h3><p>围绕短剧、漫剧创作的完整练习：从故事方向、剧本与分镜，到画面、声音、剪辑与发布反馈，让零散片段慢慢成为完整表达。</p><a href={sourceLinks.aigc} target="_blank" rel="noreferrer">查看 AIGC 学习一文通 <span aria-hidden="true">↗</span></a></div></article>
          <article className="course-feature fde-feature"><div className="course-image"><img src={image('fde-course.jpg')} alt="FDE 前沿部署工程师课程封面" width="500" height="888" /><span>专题 01</span></div><div className="course-copy"><p className="course-type">FDE · AI 工程实践</p><h3>从真实问题，到持续交付。</h3><p>从看流程、数据与关键人开始，练习把模糊需求变成可解问题，再走向工具协作、结果验证与经验复用。</p><a href={sourceLinks.fde} target="_blank" rel="noreferrer">查看 FDE 学习一文通 <span aria-hidden="true">↗</span></a></div></article>
        </div>
        <div className="course-library" aria-label="课程主题库"><div><p className="section-label">ALSO IN THE LIBRARY</p><h3>正在积累的课程方向</h3></div><ul>{courseLibrary.map((item) => <li key={item}>{item}</li>)}<li className="future-course"><span>＋</span> 后续专题，持续更新</li></ul></div>
      </div></section>

      <section className="learning-way page-shell" aria-labelledby="learning-title"><div className="learning-heading"><p className="section-label">THE WAY WE LEARN</p><h2 id="learning-title">把学习留在<br />正在发生的事里。</h2></div><ol><li><span>01</span><h3>看见问题</h3><p>从工作、创作和协作里的真实卡点开始。</p></li><li><span>02</span><h3>动手练习</h3><p>用项目、笔记与输出，把理解变得具体。</p></li><li><span>03</span><h3>复盘沉淀</h3><p>回看结果与过程，让经验可以被再次使用。</p></li><li><span>04</span><h3>遇见同行</h3><p>在分享、讨论与共创中，交换视角与连接。</p></li></ol></section>

      <section className="activities" id="activities" aria-labelledby="activities-title"><div className="page-shell">
        <div className="section-heading"><div><p className="section-label">ACTIVITY ARCHIVE</p><h2 id="activities-title">把屏幕里的学习，<br />带到人与人的现场。</h2></div><p>活动是课程之外的另一种相遇。分享、学习会、专题交流与共创活动，让不同经验在更轻松、具体的场景中连接。</p></div>
        <div className="activity-gallery"><figure className="gallery-wide"><img src={image('aigc-share.jpg')} alt="518AILab AIGC 内容分享活动海报" width="720" height="536" /><figcaption><span>活动选辑</span><strong>AIGC 内容分享</strong></figcaption></figure><figure className="gallery-tall"><img src={image('video-activity.jpg')} alt="518AILab AI 视频开源局活动海报" width="520" height="1040" /><figcaption><span>活动选辑</span><strong>AI 视频开源局</strong></figcaption></figure><div className="activity-index"><p className="section-label">MORE WAYS TO MEET</p><ul>{activityList.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul><a className="inline-link" href={sourceLinks.handbook} target="_blank" rel="noreferrer">查看活动与社群资料 <span aria-hidden="true">↗</span></a></div></div>
      </div></section>

      <section className="community page-shell" aria-labelledby="community-title"><div className="community-copy"><p className="section-label">COMMUNITY</p><h2 id="community-title">有方向的人，<br />值得遇见彼此。</h2><p>成员来自不同背景，在学习、分享、交流与实践中慢慢建立可信连接。具体合作始终以双方确认的范围与安排为准。</p></div><div className="people-list" aria-label="成员风采"><p>MEMBER SPOTLIGHT</p>{members.map((member, index) => <span key={member}><b>0{index + 1}</b>{member}</span>)}</div></section>

      <section className="resources" aria-labelledby="resources-title"><div className="page-shell resources-layout"><div><p className="section-label">READ FURTHER</p><h2 id="resources-title">想了解更多，<br />从原始资料开始。</h2></div><div className="resource-links"><a href={sourceLinks.handbook} target="_blank" rel="noreferrer"><span>01</span><div><strong>518 AI Lab 使用说明书</strong><small>社群介绍、课程列表、活动、成员与合作交流</small></div><b aria-hidden="true">↗</b></a><a href={sourceLinks.aigc} target="_blank" rel="noreferrer"><span>02</span><div><strong>AIGC 从会生成到能交付</strong><small>课程介绍、成长路径、日历、大纲与学习方法</small></div><b aria-hidden="true">↗</b></a><a href={sourceLinks.fde} target="_blank" rel="noreferrer"><span>03</span><div><strong>FDE 实战掌握 AI 工程能力</strong><small>课程介绍、师资、课程大纲、日历与学习资料</small></div><b aria-hidden="true">↗</b></a></div></div></section>

      <section className="faq page-shell" aria-labelledby="faq-title"><div><p className="section-label">QUICK ANSWERS</p><h2 id="faq-title">关于 518AILab</h2></div><div className="faq-list">{faqItems.map((item, index) => <article key={item.question}><span>0{index + 1}</span><div><h3>{item.question}</h3><p>{item.answer}</p></div></article>)}</div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="page-shell contact-grid"><div className="contact-copy"><p className="section-label">CONTACT 518AILAB</p><h2 id="contact-title">从一次认真交流开始。</h2><p>如果你想了解课程、参加活动，或讨论 AI 在真实业务与创作中的实践，欢迎直接联系。</p><ContactActions wechatId="vxbusi1688" /><a className="phone-link" href="tel:18530941024"><span>联系电话</span><strong>185 3094 1024</strong></a></div><figure className="qr-card"><img src={qrCodePath} alt="518AILab 主理人微信二维码，微信号 vxbusi1688" width="950" height="1260" /><figcaption>扫码添加微信<br /><strong>vxbusi1688</strong></figcaption></figure></div></section>
      <footer className="site-footer page-shell"><img src={logoPath} alt="518AILab" width="204" height="40" /><p>学习 · 实践 · 连接</p><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
