(function () {
  const root = document.getElementById('app-root');
  function mount(node) { root.innerHTML = ''; root.appendChild(node); }

  function HomePage() {
    const carouselImages = [
      { src: './assets/images/hero1.jpg', alt: 'hero-1', caption: '以技术与创意，点亮每一次增长' },
      { src: './assets/images/hero2.jpg', alt: 'hero-2', caption: '助力中小企业 · 高效可靠可落地' },
      { src: './assets/images/hero3.jpg', alt: 'hero-3', caption: '让数字化更简单 · 更有温度' }
    ];

    const hero = UI.el('section', { className: 'hero', children: [
      UI.Container([
        UI.el('div', { className: 'hero-inner', children: [
          UI.el('div', { className: 'stack-lg', children: [
            UI.el('div', { className: 'eyebrow', children: [ UI.el('span', { text: '璀璨青创 · CCQC' }) ] }),
            UI.el('div', { className: 'title-xl', text: '创新驱动增长，做小微企业可信赖的数字化伙伴' }),
            UI.el('div', { className: 'lead', text: '我们以小而美的方式，提供从品牌官网到数据增长的端到端服务，追求高性价比与可落地的业务成效。' }),
            UI.el('div', { className: 'kpis', children: [
              UI.el('div', { className: 'kpi', children: [ UI.el('div', { className: 'num', text: '50+' }), UI.el('div', { className: 'label', text: '成功交付项目' }) ] }),
              UI.el('div', { className: 'kpi', children: [ UI.el('div', { className: 'num', text: '98%' }), UI.el('div', { className: 'label', text: '客户满意度' }) ] }),
              UI.el('div', { className: 'kpi', children: [ UI.el('div', { className: 'num', text: '7天' }), UI.el('div', { className: 'label', text: '最快上线周期' }) ] })
            ]}),
            UI.el('div', { children: [ UI.Button({ label: '联系我们', variant: 'primary', onClick: () => location.hash = '#/contact' }) ] })
          ]}),
          UI.Carousel({ images: carouselImages, autoPlayMs: 5000 })
        ]})
      ])
    ]});

    const features = UI.Section({
      title: '我们的能力',
      headline: '从0到1，助力业务落地',
      children: [ UI.el('div', { className: 'cards', children: [
        UI.Card({ title: '品牌官网', description: '现代设计 · 快速上线 · SEO 友好' }),
        UI.Card({ title: '小程序/移动端', description: '微信/抖音生态 · 触达用户更高效' }),
        UI.Card({ title: '数据与增长', description: '数据看板 · 增长实验 · 留存复购' }),
        UI.Card({ title: '企业内管系统', description: 'CRM/ERP/OMS · 让效率可见' })
      ]}) ]
    });

    const about = UI.Section({
      title: '公司简介',
      headline: '让数字化更简单，更有温度',
      children: [ UI.el('div', { className: 'about-grid', children: [
        UI.el('div', { className: 'stack-md', children: [
          UI.el('div', { className: 'muted', text: '璀璨青创是一家专注于为小微企业提供数字化服务的团队，我们以务实和高效著称，强调可落地和长期陪伴。' }),
          UI.el('div', { className: 'stat-grid', children: [
            UI.el('div', { className: 'stat', children: [ UI.el('div', { className: 'num', text: '2019' }), UI.el('div', { className: 'label', text: '成立年份' }) ] }),
            UI.el('div', { className: 'stat', children: [ UI.el('div', { className: 'num', text: '8+' }), UI.el('div', { className: 'label', text: '核心成员' }) ] }),
            UI.el('div', { className: 'stat', children: [ UI.el('div', { className: 'num', text: '10w+' }), UI.el('div', { className: 'label', text: '终端用户覆盖' }) ] })
          ]})
        ]}),
        UI.el('div', { children: [ UI.Card({ title: '理念', description: '以结果为导向、以用户为中心、以长期主义为原则。' }), UI.Card({ title: '方法', description: '小步快跑、快速验证、持续迭代，用数据说话。' }) ] })
      ]}) ]
    });

    return UI.el('div', { children: [ UI.Navbar({ current: '#/' }), hero, features, about, UI.Footer() ] });
  }

  function AboutPage() {
    const mission = UI.Section({
      title: '关于我们',
      headline: '以小而美的方式，解决真实问题',
      children: [ UI.el('div', { className: 'about-grid', children: [
        UI.el('div', { className: 'stack-md', children: [
          UI.el('div', { className: 'muted', text: '我们是一支专注于小微企业数字化转型的团队，务实、可靠、注重落地效果。坚持以结果为导向、以用户为中心、以长期主义为原则。' })
        ]}),
        UI.el('div', { className: 'stack-md', children: [
          UI.Card({ title: '使命 Mission', description: '帮助小微企业用更低成本实现更高效增长。' }),
          UI.Card({ title: '愿景 Vision', description: '成为被客户口碑推荐的数字化服务伙伴。' }),
          UI.Card({ title: '价值观 Values', description: '坦诚沟通 · 快速反馈 · 结果导向 · 长期主义。' })
        ]})
      ]}) ]
    });

    const milestones = UI.Section({
      title: '发展历程',
      headline: '里程碑与关键节点',
      children: [ UI.el('div', { className: 'timeline', children: [
        UI.el('div', { className: 'timeline-item', children: [ UI.el('div', { className: 'badge brand', text: '2019' }), UI.el('div', { text: '团队成立，聚焦中小企业数字化服务。' }) ] }),
        UI.el('div', { className: 'timeline-item', children: [ UI.el('div', { className: 'badge brand', text: '2021' }), UI.el('div', { text: '交付超过 30 个行业项目，覆盖电商、教育与本地生活。' }) ] }),
        UI.el('div', { className: 'timeline-item', children: [ UI.el('div', { className: 'badge brand', text: '2024' }), UI.el('div', { text: '推出增长咨询服务，形成方法论并沉淀最佳实践。' }) ] })
      ]}) ]
    });

    return UI.el('div', { children: [ UI.Navbar({ current: '#/about' }), mission, milestones, UI.Footer() ] });
  }

  function ServicesPage() {
    const list = UI.Section({ title: '服务', headline: '为结果负责的服务清单', children: [ UI.el('div', { className: 'cards', children: [
      UI.Card({ title: '网站/活动页', description: '品牌官网、专题活动页、H5 互动' }),
      UI.Card({ title: '微信/小程序', description: '小程序端到端方案，发布与运维' }),
      UI.Card({ title: '数据中台', description: '采集、指标、看板、可视化分析' }),
      UI.Card({ title: '咨询与陪跑', description: '节奏计划、关键指标、增长假设验证' }) ] }) ] });

    const packages = UI.Section({
      title: '套餐与报价',
      headline: '按需选择，明确交付范围',
      children: [ UI.el('div', { className: 'pkg-grid', children: [
        UI.el('div', { className: 'pkg', children: [ UI.el('div', { className: 'badge brand', text: '入门版' }), UI.el('div', { className: 'price', text: '¥9,800 起' }), UI.el('div', { className: 'muted', text: '单页/落地页，7 天内上线' }) ] }),
        UI.el('div', { className: 'pkg', children: [ UI.el('div', { className: 'badge brand', text: '标准版' }), UI.el('div', { className: 'price', text: '¥29,800 起' }), UI.el('div', { className: 'muted', text: '品牌官网，多页面信息架构，基础 SEO' }) ] }),
        UI.el('div', { className: 'pkg', children: [ UI.el('div', { className: 'badge brand', text: '增长版' }), UI.el('div', { className: 'price', text: '¥59,800 起' }), UI.el('div', { className: 'muted', text: '数据看板与增长实验，季度陪跑' }) ] })
      ]}) ]
    });

    const process = UI.Section({
      title: '服务流程',
      headline: '清晰可控，每一步都对齐目标',
      children: [ UI.el('div', { className: 'steps', children: [
        UI.el('div', { className: 'step', children: [ UI.el('h4', { text: '1. 需求沟通' }), UI.el('div', { className: 'muted', text: '理解业务场景与目标，明确范围与里程碑。' }) ] }),
        UI.el('div', { className: 'step', children: [ UI.el('h4', { text: '2. 方案设计' }), UI.el('div', { className: 'muted', text: '信息架构、原型/视觉、技术选型与排期。' }) ] }),
        UI.el('div', { className: 'step', children: [ UI.el('h4', { text: '3. 开发交付' }), UI.el('div', { className: 'muted', text: '迭代开发与验收，上线与培训。' }) ] }),
        UI.el('div', { className: 'step', children: [ UI.el('h4', { text: '4. 运营增长' }), UI.el('div', { className: 'muted', text: '数据采集、看板搭建、A/B 实验与优化。' }) ] })
      ]}) ]
    });

    const faq = UI.Section({
      title: '常见问题',
      headline: '合作前你可能关心',
      children: [ UI.el('div', { className: 'faq', children: [
        UI.el('div', { className: 'faq-item', children: [ UI.el('h4', { text: '交付周期多长？' }), UI.el('div', { className: 'muted', text: '简单落地页 3-7 天，标准官网 2-4 周，视功能与素材齐备度。' }) ] }),
        UI.el('div', { className: 'faq-item', children: [ UI.el('h4', { text: '如何对接后端或第三方？' }), UI.el('div', { className: 'muted', text: '支持对接现有后端、SaaS 或自建 API，我们提供接口规范建议。' }) ] }),
        UI.el('div', { className: 'faq-item', children: [ UI.el('h4', { text: '是否支持运维与长期陪跑？' }), UI.el('div', { className: 'muted', text: '可按月/季度提供运营与技术陪跑，包含数据分析与优化建议。' }) ] })
      ]}) ]
    });

    return UI.el('div', { children: [ UI.Navbar({ current: '#/services' }), list, packages, process, faq, UI.Footer() ] });
  }

  function NewsPage() {
    const featured = UI.Section({
      title: '新闻动态',
      headline: '公司资讯与行业观察',
      right: UI.el('div', { className: 'tag-list', children: [ UI.el('span', { className: 'badge brand', text: '最新' }), UI.el('span', { className: 'badge', text: '公告' }), UI.el('span', { className: 'badge', text: '行业' }) ] }),
      children: [ UI.el('div', { className: 'cards', children: [
        UI.el('div', { className: 'card', children: [ UI.el('h4', { text: '品牌官网焕新上线' }), UI.el('div', { className: 'muted', text: '我们全新官网正式发布，带来更清晰的服务信息与更友好的体验。' }), UI.el('div', { className: 'tag-list', children: [ UI.el('span', { className: 'badge brand', text: '置顶' }), UI.el('span', { className: 'badge', text: '2025-09-01' }) ] }) ] })
      ] }) ]
    });

    const list = UI.Section({
      title: '更多动态',
      headline: '关注产品与服务的持续改进',
      children: [ UI.el('div', { className: 'timeline', children: [
        UI.el('div', { className: 'timeline-item', children: [ UI.el('div', { className: 'badge', text: '2025-08-16' }), UI.el('div', { text: '新增增长套餐，提供季度陪跑与数据实验服务。' }) ] }),
        UI.el('div', { className: 'timeline-item', children: [ UI.el('div', { className: 'badge', text: '2025-06-30' }), UI.el('div', { text: '与行业伙伴达成生态合作，共建解决方案。' }) ] }),
        UI.el('div', { className: 'timeline-item', children: [ UI.el('div', { className: 'badge', text: '2025-05-10' }), UI.el('div', { text: '发布《小微企业数字化落地方法论》白皮书。' }) ] })
      ]}) ]
    });

    return UI.el('div', { children: [ UI.Navbar({ current: '#/news' }), featured, list, UI.Footer() ] });
  }

  function ContactPage() {
    const methods = UI.Section({
      title: '联系', headline: '让我们开始一次高效沟通', children: [
        UI.el('div', { className: 'contact-grid', children: [
          UI.el('div', { className: 'contact-card', children: [
            UI.el('h4', { text: '联系方式' }),
            UI.el('div', { className: 'stack-md', children: [
              UI.el('div', { text: '邮箱：contact@ccqc.example' }),
              UI.el('div', { text: '电话：400-000-0000' }),
              UI.el('div', { text: '微信：添加备注“官网咨询”' })
            ]})
          ]}),
          UI.el('div', { className: 'contact-card', children: [
            UI.el('h4', { text: '公司地址' }),
            UI.el('div', { className: 'stack-md', children: [
              UI.el('div', { text: '上海市浦东新区金皖路389号301室' }),
              UI.el('div', { text: '工作时间：周一至周五 09:30 - 18:30' })
            ]})
          ]})
        ]})
      ]
    });

    const mapLink = 'https://map.baidu.com/search/%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA%E9%87%91%E7%9A%96%E8%B7%AF389%E5%8F%B7301%E5%AE%A4/@13539531.125,3644357,19z?querytype=s&da_src=shareurl&wd=%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA%E9%87%91%E7%9A%96%E8%B7%AF389%E5%8F%B7301%E5%AE%A4&c=289&src=0&pn=0&sug=0&l=19&b=(13539019.125,3644102.5;13540043.125,3644611.5)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2';
    const map = UI.Section({ title: '地图', headline: '来访路线参考', children: [ UI.MapCard({ address: '上海市浦东新区金皖路389号301室', href: mapLink }) ] });

    const board = UI.Section({ title: '留言板', headline: '告诉我们您的需求与想法', children: [ UI.MessageBoard() ] });

    return UI.el('div', { children: [ UI.Navbar({ current: '#/contact' }), methods, map, board, UI.Footer() ] });
  }

  const routes = { '#/': HomePage, '#/news': NewsPage, '#/about': AboutPage, '#/services': ServicesPage, '#/contact': ContactPage };
  function router() { const hash = location.hash || '#/'; const page = routes[hash] || HomePage; mount(page()); }
  window.addEventListener('hashchange', router); window.addEventListener('load', router);
})();


