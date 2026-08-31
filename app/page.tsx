import ContactActions from './contact-actions';

const valueCards = [
  { number: '01', title: '内容与案例', copy: '围绕 AI 趋势、工具实践、行业经验与真实案例，获得可用的认知与方法。' },
  { number: '02', title: '活动与连接', copy: '在线上分享、线下交流和专题活动中，让有共同问题、能力与资源的人深入相遇。' },
  { number: '03', title: '共创与协作', copy: '让成员的经验、能力和真实需求被看见，在合适的边界内探索协作。' },
  { number: '04', title: '长期生态', copy: '沉淀可信关系、案例与贡献，让个人和组织在 AI 时代拥有更稳定的行业连接。' },
];

const faqItems = [
  { question: '518AILab 是什么？', answer: '518AILab 是以杭州 AI 生态为起点的创新连接网络，连接 AI 人才、企业需求与创新项目。' },
  { question: '518AILab 服务谁？', answer: '我们面向 AI 实践者、开发者、职业人士、创业者、企业需求方，以及愿意参与生态协作的专家和伙伴。' },
  { question: '518AILab 如何创造价值？', answer: '通过内容与案例建立认知，通过活动促进连接，通过共创推动能力与需求的匹配，并持续沉淀可信的关系与实践资产。' },
  { question: '如何联系 518AILab？', answer: '扫描页面中的二维码，或添加主理人微信 vxbusi1688，即可进一步交流。' },
];

const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: '518AILab', alternateName: '518 AI Lab',
  description: '以杭州 AI 生态为起点的创新连接网络，连接 AI 人才、企业需求与创新项目。',
  logo: '/images/518ailab-logo.png', areaServed: '杭州', knowsAbout: ['人工智能', 'AI 实践', '企业 AI 落地', '创新协作'],
};
const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', name: '518AILab', inLanguage: 'zh-CN', description: '连接 AI 人才、企业需求与创新项目的创新连接网络。' };
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回 518AILab 首页"><img src="/images/518ailab-logo.png" alt="518AILab" width="255" height="50" /></a>
        <nav aria-label="页面导航"><a href="#value">我们创造的价值</a><a href="#people">服务对象</a><a href="#contact">联系我们</a></nav>
        <a className="header-cta" href="#contact">添加微信</a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content page-shell">
          <p className="eyebrow">HANGZHOU · AI CONNECTION NETWORK</p>
          <h1 id="hero-title">让 AI 的人、需求与项目，<br />真正连接起来。</h1>
          <p className="hero-lead">518AILab 是以杭州 AI 生态为起点的创新连接网络。我们通过内容、活动、案例与共创，帮助成员获得 AI 时代真实的学习、协作与商业机会。</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">认识 518AILab <span aria-hidden="true">↓</span></a><a className="text-link" href="#value">了解我们如何创造价值 <span aria-hidden="true">→</span></a></div>
        </div>
        <div className="hero-signal" aria-hidden="true"><span /> <span /> <span /></div>
      </section>

      <section className="intro page-shell" aria-labelledby="intro-title">
        <p className="section-kicker">WHY 518AILAB</p>
        <div className="intro-layout"><h2 id="intro-title">AI 的价值，不止是学会一个工具。</h2><p>真正重要的是，持续进入高质量的人、真实的问题和可共创的项目。518AILab 不以“卖课”定义自己：内容和活动是建立信任的入口，长期价值来自可信连接、案例沉淀与协作发生。</p></div>
      </section>

      <section className="value-section" id="value" aria-labelledby="value-title"><div className="page-shell">
        <div className="section-heading"><div><p className="section-kicker">VALUE IN MOTION</p><h2 id="value-title">从认知到行动，<br />让连接产生价值。</h2></div><p>内容、活动、共创与商业协作共同服务于一件事：让合适的人与真实的需求相遇。</p></div>
        <div className="value-grid">{valueCards.map((card) => <article className="value-card" key={card.number}><span className="card-number">{card.number}</span><h3>{card.title}</h3><p>{card.copy}</p></article>)}</div>
      </div></section>

      <section className="people page-shell" id="people" aria-labelledby="people-title">
        <div className="section-heading people-heading"><div><p className="section-kicker">FOR PEOPLE &amp; BUSINESS</p><h2 id="people-title">为实践者打开现场，<br />为企业连接能力。</h2></div><p>不同角色在这里进入同一张可信网络：看见问题，也被合适的人看见。</p></div>
        <div className="audience-grid">
          <article className="audience-card audience-practitioner"><p className="card-label">AI PRACTITIONERS</p><h3>把能力带进<br />真实的协作现场</h3><p>适合 AI 实践者、开发者、产品与内容从业者、职业人士与创业者。</p><ul><li>获得案例、同行连接与实践交流</li><li>在贡献与分享中被看见</li><li>探索与项目、伙伴的协作可能</li></ul></article>
          <article className="audience-card audience-business"><p className="card-label">BUSINESS &amp; PARTNERS</p><h3>让 AI 需求找到<br />更可信的连接入口</h3><p>适合企业负责人、需求方、专家、机构和生态伙伴。</p><ul><li>交流 AI 落地中的真实问题</li><li>连接人才、项目与协作伙伴</li><li>共同沉淀可复盘的实践案例</li></ul></article>
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-title"><div className="page-shell principle-layout"><div><p className="section-kicker">OUR PRINCIPLES</p><h2 id="principles-title">不靠噱头，<br />靠真实发生。</h2></div><div className="principle-list"><p><strong>机会来自真实连接。</strong>不以泛泛信息堆砌替代有效协作。</p><p><strong>贡献优先。</strong>更高责任与协作建立在能力、贡献与信任之上。</p><p><strong>案例说话。</strong>用真实、可复盘的实践建立信任，不夸大尚未验证的能力。</p><p><strong>长期主义。</strong>内容、活动和合作都服务于可持续的生态价值。</p></div></div></section>

      <section className="faq page-shell" aria-labelledby="faq-title"><div className="faq-header"><p className="section-kicker">QUICK ANSWERS</p><h2 id="faq-title">关于 518AILab</h2></div><div className="faq-grid">{faqItems.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></section>

      <section className="contact" id="contact" aria-labelledby="contact-title"><div className="page-shell contact-grid"><div className="contact-copy"><p className="section-kicker">START A CONVERSATION</p><h2 id="contact-title">从一次真诚交流开始。</h2><p>如果你正在实践 AI、寻找合适的协作网络，或有企业 AI 落地相关的问题，欢迎添加微信，聊聊你正在面对的真实问题。</p><ContactActions wechatId="vxbusi1688" /></div><figure className="qr-card"><img src="/images/wechat-qr.png" alt="添加 518AILab 主理人微信的二维码" width="386" height="386" /><figcaption>扫码添加主理人微信</figcaption></figure></div></section>

      <footer className="site-footer page-shell"><img src="/images/518ailab-logo.png" alt="518AILab" width="204" height="40" /><p>以杭州 AI 生态为起点，连接 AI 人才、企业需求与创新项目。</p></footer>
    </main>
  );
}
