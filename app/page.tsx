import ContactActions from './contact-actions';
import { ASSET_BASE_PATH, SITE_URL } from './site';

export const dynamic = 'force-static';

const sourceLinks = {
  handbook: 'https://icnepuql73ya.feishu.cn/wiki/MfuEw9QSHi5LcHkvPNRcQgAgndg?from=from_copylink',
  fde: 'https://icnepuql73ya.feishu.cn/wiki/Wjyxwjtd5iBz05kR8fEcnP08nog',
  aigc: 'https://icnepuql73ya.feishu.cn/wiki/C4JTwhxZviveF3kDVa6cdOjLn9e?from=from_copylink',
};

const specialtyCourses = [
  { title: 'Claude Code 源码解析课', image: 'course-claude-source.jpg' },
  { title: 'Claude Code 精品课', image: 'course-claude-premium.jpg' },
  { title: 'Codex 企业场景应用', image: 'course-codex.jpg' },
  { title: 'AI + OPC 一人公司线下课', image: 'course-opc.jpg' },
  { title: 'Claude Code 直播课', image: 'course-claude-live.jpg' },
  { title: 'AIGC 直播', image: 'course-aigc-live.jpg' },
];
const activityList = [
  { title: 'OpenClaw 线下课', image: 'activity-openclaw-class.jpg' },
  { title: 'OPC 一人公司商业课', image: 'activity-opc-business.jpg' },
  { title: 'AIGC 内容分享', image: 'activity-aigc-sharing.jpg' },
  { title: '大咖对谈', image: 'activity-expert-talk.jpg' },
  { title: 'Agent 线下讨论会', image: 'activity-agent-discussion.jpg' },
  { title: '线下安装 OpenClaw', image: 'activity-openclaw-install.jpg' },
  { title: 'Codex 线下学习会', image: 'activity-codex-meetup.jpg' },
  { title: 'Claude Code 线下分享', image: 'activity-claude-sharing.jpg' },
  { title: 'FDE 专题线上课程', image: 'activity-fde-online.jpg' },
  { title: '千问办公活动', image: 'activity-qianwen.jpg' },
  { title: 'AI 视频开源局', image: 'activity-video-openlab.jpg' },
  { title: 'AI 魔法玩乐局', image: 'activity-magic.jpg' },
  { title: '上虞区 OPC 联创社区开业承办', image: 'activity-shangyu.jpg' },
  { title: '白马湖 AIGC + ACGN 活动协办', image: 'activity-baimahu.jpg' },
];
const members = [
  { name: '任孝忠', image: 'member-ren-xiaozhong.jpg' },
  { name: '林志庆', image: 'member-lin-zhiqing.jpg' },
  { name: '徐浩铭', image: 'member-xu-haoming.jpg' },
  { name: '尹龙云', image: 'member-yin-longyun.jpg' },
  { name: '沐沐', image: 'member-mumu.jpg' },
  { name: '李文洁', image: 'member-li-wenjie.jpg' },
];

const faqItems = [
  { question: '518AILab 是什么？', answer: '518AILab 是面向真实工作与创作的学习与连接网络。通过体系化课程、活动交流和实践连接，让 AI 能力进入真实的工作与创作。' },
  { question: '课程只有 FDE 吗？', answer: '不是。FDE 为第一期，AIGC 为第二期；后续课程将持续完善，具体主题与安排以正式课程资料为准。' },
  { question: 'AIGC 课程关注什么？', answer: '当前公开资料中的 AIGC 专题面向短剧与漫剧创作练习，覆盖故事方向、剧本与分镜、画面和声音制作，以及发布后的反馈迭代。' },
  { question: '如何联系 518AILab？', answer: '可扫描页面末尾的微信二维码，添加微信 vxbusi1688，或拨打电话 18530941024。' },
];

const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: '518AILab', alternateName: '518 AI Lab',
  description: '面向真实工作与创作的学习与连接网络，提供体系化 AI 课程、活动交流与实践连接。',
  url: SITE_URL, logo: `${SITE_URL}images/518ailab-logo.png`,
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
          <p className="eyebrow">518 AI LAB</p>
          <h1 id="hero-title"><span className="hero-intro-title">518 AI Lab 介绍</span>打造可信<br /><em>AI 同行圈</em>。</h1>
          <p className="hero-lead">518AILab 是一个面向真实工作与创作的学习、交流和实践网络。我们把课程、活动与可信同行连接在一起，让学习不止停在工具体验。</p>
          <div className="hero-actions"><a className="button" href="#courses">探索课程地图 <span aria-hidden="true">↓</span></a><a className="quiet-link" href={sourceLinks.handbook} target="_blank" rel="noreferrer">阅读使用说明书 <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-art hero-growth-map" aria-label="518AILab 成员成长路线">
          <div className="growth-map-heading"><p>MEMBER PATH</p><h2>成员成长路线</h2></div>
          <ol className="growth-steps"><li><span>01</span><strong>加入 518</strong></li><li><span>02</span><strong>选择当期主题</strong></li><li><span>03</span><strong>体系化学习</strong></li><li><span>04</span><strong>真实问题实践</strong></li><li className="growth-connection"><span>05</span><strong>可信同行连接</strong></li></ol>
          <div className="growth-summary"><strong>学习 · 实践 · 连接</strong><p>在每一次参与中积累经验，回看、复盘，再选择下一步。</p></div>
          <p className="growth-note">具体参与与协作，以实际进展及双方确认的安排为准。</p>
        </div>
      </section>

      <section className="manifesto" id="about" aria-labelledby="manifesto-title"><div className="page-shell manifesto-layout">
        <p className="section-label">WHY 518AILAB</p><h2 id="manifesto-title">一门课带来方法，<br />一群人让方法走得更远。</h2>
        <div><p>这里不以“追新工具”为终点。我们更关心：你是否能把 AI 放进一个具体问题里，完成一次清晰表达、一次可复盘的练习，或一次更有质量的协作。</p><a className="inline-link" href="#contact">从交流开始 <span aria-hidden="true">→</span></a></div>
      </div></section>

      <section className="handbook-intro page-shell" aria-labelledby="handbook-title"><div><p className="section-label">START HERE</p><h2 id="handbook-title">先读使用说明书，<br />再找到自己的入口。</h2></div><div className="handbook-card"><div className="handbook-number" aria-hidden="true"><span>01</span><small>FIRST<br />READ</small></div><div className="handbook-card-copy"><p className="handbook-kicker">518AILAB 入门总览</p><strong>《518 AI Lab<br />使用说明书》</strong><p>把社群、课程、活动、成员与合作交流放在一页里，先看清全貌，再决定从哪里开始。</p><ul aria-label="说明书内容"><li>社群与学习路径</li><li>课程与活动目录</li><li>成员、合作与联系</li></ul></div><a className="handbook-action" href={sourceLinks.handbook} target="_blank" rel="noreferrer" aria-label="打开 518 AI Lab 使用说明书"><span>打开使用说明书</span><b aria-hidden="true">↗</b></a></div></section>

      <section className="courses" id="courses" aria-labelledby="courses-title"><div className="page-shell">
        <div className="section-heading"><div><p className="section-label">AI BOOTCAMP</p><h2 id="courses-title">体系化 AI 训练营，<br />从第一期开启。</h2></div><p>FDE 是训练营第一期，聚焦 AI 工程实践；AIGC 是训练营第二期，聚焦从生成到交付。</p></div>
        <div className="featured-courses">
          <article className="course-feature fde-feature"><div className="course-image"><img src={image('course-fde.jpg')} alt="FDE 前沿部署工程师第一期课程封面" width="420" height="420" /><span>第一期 · 01</span></div><div className="course-copy"><p className="course-type">FDE · AI 工程实践</p><h3>从真实问题，到持续交付。</h3><p>从看流程、数据与关键人开始，练习把模糊需求变成可解问题，再走向工具协作、结果验证与经验复用。</p><a href={sourceLinks.fde} target="_blank" rel="noreferrer">查看 FDE 第一期学习一文通 <span aria-hidden="true">↗</span></a></div></article>
          <article className="course-feature aigc-feature"><div className="course-image"><img src={image('course-aigc.jpg')} alt="AIGC 第二期课程封面" width="420" height="420" /><span>第二期 · 02</span></div><div className="course-copy"><p className="course-type">AIGC · 创作与交付</p><h3>从会生成，到能完成一部作品。</h3><p>围绕短剧、漫剧创作的完整练习：从故事方向、剧本与分镜，到画面、声音、剪辑与发布反馈，让零散片段慢慢成为完整表达。</p><a href={sourceLinks.aigc} target="_blank" rel="noreferrer">查看 AIGC 第二期学习一文通 <span aria-hidden="true">↗</span></a></div></article>
        </div>
        <div className="course-library" aria-label="专项 AI 课程目录"><div className="course-library-heading"><p className="section-label">SPECIALTY AI COURSES</p><h3>专项 AI 课程</h3></div><div className="course-album">{specialtyCourses.map((item) => <article key={item.title}><img src={image(item.image)} alt={`${item.title}课程封面`} width="420" height="420" loading="lazy" /><div><span>专项课程</span><strong>{item.title}</strong><small>课程主题</small></div></article>)}<article className="future-course"><div><span>＋</span><strong>更多专项课程</strong><small>敬请期待</small></div></article></div></div>
      </div></section>

      <section className="learning-way page-shell" aria-labelledby="learning-title"><div className="learning-heading"><p className="section-label">THE WAY WE LEARN</p><h2 id="learning-title">把学习留在<br />正在发生的事里。</h2></div><ol><li><span>01</span><h3>看见问题</h3><p>从工作、创作和协作里的真实卡点开始。</p></li><li><span>02</span><h3>动手练习</h3><p>用项目、笔记与输出，把理解变得具体。</p></li><li><span>03</span><h3>复盘沉淀</h3><p>回看结果与过程，让经验可以被再次使用。</p></li><li><span>04</span><h3>遇见同行</h3><p>在分享、讨论与共创中，交换视角与连接。</p></li></ol></section>

      <section className="activities" id="activities" aria-labelledby="activities-title"><div className="page-shell">
        <div className="section-heading"><div><p className="section-label">ACTIVITY ARCHIVE</p><h2 id="activities-title">把屏幕里的学习，<br />带到人与人的现场。</h2></div><p>活动是课程之外的另一种相遇。分享、学习会、专题交流与共创活动，让不同经验在更轻松、具体的场景中连接。</p></div>
        <div className="activity-album" aria-label="活动画册"><div className="activity-album-heading"><div><p className="section-label">ACTIVITY CATALOGUE</p><h3>活动画册</h3></div><p>记录每一次分享、实作与相遇。</p><a className="inline-link" href={sourceLinks.handbook} target="_blank" rel="noreferrer">查看活动与社群资料 <span aria-hidden="true">↗</span></a></div><ol>{activityList.map((item, index) => <li key={item.title}><img src={image(item.image)} alt={`${item.title}活动图片`} width="420" height="420" loading="lazy" /><div><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong></div></li>)}</ol></div>
      </div></section>

      <section className="community page-shell" aria-labelledby="community-title"><div className="community-copy"><p className="section-label">COMMUNITY</p><h2 id="community-title">有方向的人，<br />值得遇见彼此。</h2><p>成员来自不同背景，在学习、分享、交流与实践中慢慢建立可信连接。具体合作始终以双方确认的范围与安排为准。</p></div><div className="member-album" aria-label="成员风采"><p>MEMBER SPOTLIGHT</p><div>{members.map((member, index) => <article key={member.name}><img src={image(member.image)} alt={`${member.name}，518AILab 成员`} width="420" height="420" loading="lazy" /><div><span>{String(index + 1).padStart(2, '0')}</span><strong>{member.name}</strong><small>518AILab 成员</small></div></article>)}</div></div></section>

      <section className="resources" aria-labelledby="resources-title"><div className="page-shell resources-layout"><div><p className="section-label">READ FURTHER</p><h2 id="resources-title">继续翻阅，<br />回到每一期课程。</h2></div><div className="resource-links"><a href={sourceLinks.handbook} target="_blank" rel="noreferrer"><span>01</span><div><strong>518 AI Lab 使用说明书</strong><small>社群介绍、课程列表、活动、成员与合作交流</small></div><b aria-hidden="true">↗</b></a><a href={sourceLinks.fde} target="_blank" rel="noreferrer"><span>02</span><div><strong>FDE 第一期学习一文通</strong><small>课程介绍、师资、课程大纲、日历与学习资料</small></div><b aria-hidden="true">↗</b></a><a href={sourceLinks.aigc} target="_blank" rel="noreferrer"><span>03</span><div><strong>AIGC 第二期学习一文通</strong><small>课程介绍、成长路径、日历、大纲与学习方法</small></div><b aria-hidden="true">↗</b></a></div></div></section>

      <section className="faq page-shell" aria-labelledby="faq-title"><div><p className="section-label">QUICK ANSWERS</p><h2 id="faq-title">关于 518AILab</h2></div><div className="faq-list">{faqItems.map((item, index) => <article key={item.question}><span>0{index + 1}</span><div><h3>{item.question}</h3><p>{item.answer}</p></div></article>)}</div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="page-shell contact-grid"><div className="contact-copy"><p className="section-label">CONTACT 518AILAB</p><h2 id="contact-title">从一次认真交流开始。</h2><p>如果你想了解课程、参加活动，或讨论 AI 在真实业务与创作中的实践，欢迎直接联系。</p><ContactActions wechatId="vxbusi1688" /><a className="phone-link" href="tel:18530941024"><span>联系电话</span><strong>185 3094 1024</strong></a></div><figure className="qr-card"><img src={qrCodePath} alt="518AILab 主理人微信二维码，微信号 vxbusi1688" width="950" height="1260" /><figcaption>扫码添加微信<br /><strong>vxbusi1688</strong></figcaption></figure></div></section>
      <footer className="site-footer page-shell"><img src={logoPath} alt="518AILab" width="204" height="40" /><p>学习 · 实践 · 连接</p><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
