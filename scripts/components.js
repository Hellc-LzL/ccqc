(function () {
  const UI = {
    el(tagName, options) {
      const el = document.createElement(tagName);
      if (!options) return el;
      const { className, attrs, text, html, children, on } = options;
      if (className) el.className = className;
      if (attrs) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      if (text != null) el.textContent = text;
      if (html != null) el.innerHTML = html;
      if (Array.isArray(children)) children.forEach(child => child && el.appendChild(child));
      if (on) Object.entries(on).forEach(([event, handler]) => el.addEventListener(event, handler));
      return el;
    },

    Container(children) { return UI.el('div', { className: 'container', children }); },
    Section({ title, headline, right, children, id }) {
      return UI.el('section', { className: 'section', attrs: id ? { id } : undefined, children: [
        UI.Container([
          UI.el('div', { className: 'section-header', children: [
            UI.el('div', { children: [
              UI.el('div', { className: 'section-title', text: title || '' }),
              UI.el('div', { className: 'section-headline', text: headline || '' })
            ]}),
            right || UI.el('span')
          ]}),
          UI.el('div', { className: 'stack-lg', children })
        ])
      ]});
    },

    Navbar({ current }) {
      const makeLink = (href, label) => UI.el('a', { className: `nav-link${location.hash === href ? ' active' : ''}`, attrs: { href }, text: label });
      return UI.el('nav', { className: 'nav', children: [
        UI.Container([
          UI.el('div', { className: 'nav-inner', children: [
            UI.el('a', { className: 'brand', attrs: { href: '#/' }, children: [
              UI.el('span', { className: 'brand-badge' }),
              UI.el('span', { text: '璀璨青创' })
            ]}),
            UI.el('div', { className: 'nav-links', children: [
              makeLink('#/', '首页'),
              makeLink('#/news', '新闻'),
              makeLink('#/services', '服务'),
              makeLink('#/about', '关于我们'),
              makeLink('#/contact', '联系')
            ]})
          ]})
        ])
      ]});
    },
    Footer() {
      const year = new Date().getFullYear();
      return UI.el('footer', { className: 'footer', children: [
        UI.Container([
          UI.el('div', { className: 'stack-md', children: [
            UI.el('div', { text: `© ${year} 璀璨青创 · 保留所有权利` }),
            UI.el('div', { className: 'muted', text: '我们致力于为小微企业提供可靠、可落地的数字化服务。' })
          ]})
        ])
      ]});
    },

    Button({ label, variant = 'ghost', onClick, attrs }) {
      return UI.el('button', { className: `btn ${variant}`, attrs, text: label, on: { click: onClick } });
    },
    Input({ placeholder, value, attrs }) { return UI.el('input', { className: 'input', attrs: { placeholder, value: value || '', ...(attrs || {}) } }); },
    TextArea({ placeholder, value, attrs }) { return UI.el('textarea', { className: 'textarea', attrs: { placeholder, ...(attrs || {}) }, text: value || '' }); },
    Card({ title, description, actions }) {
      return UI.el('div', { className: 'card', children: [
        UI.el('h4', { text: title }),
        UI.el('div', { className: 'muted', text: description || '' }),
        actions ? UI.el('div', { children: actions }) : null
      ]});
    },

    MapCard({ address, href, imageUrl }) {
      const container = UI.el('a', { className: 'map-embed', attrs: { href, target: '_blank', rel: 'noopener noreferrer', title: '点击打开外部导航' } });
      const img = UI.el('img', { attrs: { src: imageUrl || './assets/images/map.jpg', alt: 'map' } });
      const cover = UI.el('span', { className: 'map-cover' });
      const overlay = UI.el('div', { className: 'map-overlay', children: [
        UI.el('div', { className: 'addr', text: address }),
        UI.el('div', { className: 'hint', text: '点击打开导航' })
      ] });
      container.appendChild(img);
      container.appendChild(cover);
      container.appendChild(overlay);
      return container;
    },

    Carousel({ images = [], autoPlayMs = 5000 }) {
      let current = 0; let timer = null;
      const viewport = UI.el('div', { className: 'carousel-viewport' });
      const dots = UI.el('div', { className: 'carousel-controls' });
      const slides = images.map((img, idx) => {
        const node = UI.el('div', { className: 'carousel-slide' });
        const image = UI.el('img', { attrs: { src: img.src, alt: img.alt || `slide-${idx+1}` } });
        const caption = img.caption ? UI.el('div', { className: 'carousel-caption', text: img.caption }) : null;
        node.appendChild(image);
        if (caption) node.appendChild(caption);
        viewport.appendChild(node);
        const dot = UI.el('div', { className: 'dot', on: { click: () => go(idx) } });
        dots.appendChild(dot);
        return node;
      });
      const setActive = (idx) => {
        slides.forEach((s, i) => s.classList.toggle('active', i === idx));
        Array.from(dots.children).forEach((d, i) => d.classList.toggle('active', i === idx));
        current = idx;
      };
      const go = (idx) => setActive((idx + slides.length) % slides.length);
      const next = () => go(current + 1);
      const prev = () => go(current - 1);
      const start = () => { if (timer) clearInterval(timer); timer = setInterval(next, autoPlayMs); };
      const stop = () => { if (timer) clearInterval(timer); };
      const root = UI.el('div', { className: 'carousel', children: [
        viewport,
        UI.el('button', { className: 'carousel-prev', text: '‹', on: { click: () => { stop(); prev(); start(); } } }),
        UI.el('button', { className: 'carousel-next', text: '›', on: { click: () => { stop(); next(); start(); } } }),
        dots
      ], on: { mouseenter: stop, mouseleave: start } });
      if (slides.length) setActive(0); start(); return root;
    },

    MessageBoard({ storageKey = 'ccqc_messages' } = {}) {
      const load = () => { try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch { return []; } };
      const save = (list) => localStorage.setItem(storageKey, JSON.stringify(list));
      let messages = load();
      const listEl = UI.el('div', { className: 'msg-list' });
      const nameInput = UI.Input({ placeholder: '您的称呼', attrs: { required: true } });
      const contactInput = UI.Input({ placeholder: '联系方式（手机/邮箱）', attrs: { required: true } });
      const contentInput = UI.TextArea({ placeholder: '留言内容...', attrs: { required: true } });
      const renderItem = (item, index) => UI.el('div', { className: 'msg-item', children: [
        UI.el('div', { text: item.content }),
        UI.el('div', { className: 'msg-item-meta', text: `${item.name} · ${item.contact} · ${new Date(item.ts).toLocaleString()}` }),
        UI.el('div', { className: 'msg-actions', children: [ UI.Button({ label: '删除', onClick: () => { messages.splice(index, 1); save(messages); render(); } }) ] })
      ]});
      const render = () => { listEl.innerHTML = ''; if (!messages.length) { listEl.appendChild(UI.el('div', { className: 'muted', text: '还没有留言，来抢沙发吧～' })); } else { messages.forEach((m, i) => listEl.appendChild(renderItem(m, i))); } };
      const onSubmit = (e) => { e.preventDefault(); const name = nameInput.value.trim(); const contact = contactInput.value.trim(); const content = contentInput.value.trim(); if (!name || !contact || !content) return; messages.unshift({ name, contact, content, ts: Date.now() }); save(messages); nameInput.value = ''; contactInput.value = ''; contentInput.value = ''; render(); };
      const form = UI.el('form', { className: 'msg-form', on: { submit: onSubmit }, children: [ UI.el('div', { children: [nameInput] }), UI.el('div', { children: [contactInput] }), UI.el('div', { className: 'full', children: [contentInput] }), UI.el('div', { className: 'full', children: [ UI.Button({ label: '提交留言', variant: 'primary', attrs: { type: 'submit' } }) ] }) ] });
      const root = UI.el('div', { className: 'msg-board', children: [ form, listEl ] }); render(); return root;
    },
  };
  window.UI = UI;
})();


