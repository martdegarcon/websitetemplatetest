(function () {
  const TELEGRAM = "https://t.me/withsolution";
  const EMAIL = "hello@withsolution.ru";
  const PHONE = "+7 (999) 000-00-00";

  const exactText = new Map([
    ["Mattis® Studio — Conversion-First Design & Development Agency", "withsolution studio — сайты, которые превращают посетителей в деньги"],
    ["Mattis®", "withsolution studio"],
    ["MATTIS", "WITHSOLUTION"],
    ["®", ""],
    ["Сonversion-first", "Сайты,"],
    ["design & dev", "которые превращают"],
    ["studio", "посетителей в деньги"],
    ["works", "Кейсы"],
    ["Works", "Кейсы"],
    ["Blog", "FAQ"],
    ["about", "О нас"],
    ["Contact", "Связаться"],
    ["START A PROJECT", "Получить консультацию"],
    ["Start a Project", "Получить консультацию"],
    ["(Est. 2019 — Version 1.0.4)", "Дизайн, продающие тексты и аналитика под одну задачу: чтобы из вашего текущего трафика покупало больше людей."],
    ["Launched", "Запущено"],
    ["24+ projects", "40+ проектов"],
    ["2019-26©", "5+ лет опыта"],
    ["Strategy", "Конверсия"],
    ["before", "важнее"],
    ["pixels.", "красоты."],
    ["People decide", "Не делаем красиво ради красоты."],
    ["if they trust your site", "Каждый сайт собираем под рост конверсии"],
    ["before they read a word on it. That's not a metaphor. Visual credibility forms almost instantly, and it's shaped by", "и считаем результат в деньгах. Если конверсия не вырастет, дорабатываем бесплатно."],
    ["spacing, typography, image quality, and structure", "аналитика, структура, дизайн и продающий текст"],
    ["About us", "О нас"],
    ["12", "4%"],
    ["Industries where our sites consistently outperform benchmarks", "Средний рост конверсии на сайте"],
    ["We", "Мы"],
    ["build", "проектируем"],
    ["websites.", "сайты."],
    ["where moving forward feels", "которые превращают посетителей"],
    ["obvious, natural", "в заявки, покупки"],
    ["and", "и"],
    ["AND", "И"],
    ["impossible to overthink.", "понятный рост выручки."],
    ["↓ SEE THE WORK", "↓ Смотреть кейсы"],
    ["Showreel", "Нам доверяют: Росатом, НИЯУ МИФИ, ДНК России, Риалторг, Омаркетинг"],
    ["Box mode", "Сайт для университета"],
    ["Nomad Stays", "Сайт для RialTorg"],
    ["We run brand", "Лендинг для банного комплекса"],
    ["Portfolio", "Кейс"],
    ["Branding", "Лендинг"],
    ["Development", "Разработка"],
    ["Web design", "Дизайн сайта"],
    ["Why us?", "Почему нам можно доверять"],
    ["Built on", "Отвечаем"],
    ["reputation", "за результат"],
    ["Average client rating on Google & Clutch", "Фиксируем текущую конверсию и метрику, которую растим"],
    ["Our Reviews", "Отзывы"],
    ["Business comes from", "Клиенты приходят"],
    ["direct referrals", "по рекомендациям"],
    ["Services", "Что мы делаем"],
    ["Every project starts with understanding how your customers make decisions — and what's stopping them from making one right now.", "Три формата под задачу и бюджет. В каждом — дизайн, продающие тексты и аналитика, собранные ради одной цифры: роста заявок."],
    ["Strategy & Research", "Продающий лендинг"],
    ["Price: from", "Стоимость от"],
    ["$2,900", "50 000 ₽"],
    ["Matter Studio opens every project with an audit of your current customer journey. We identify the moments where users lose context or delay a decision, then restructure the flow so each next step feels like the obvious thing to do. Nbehavioral patterns backed by data.", "Одна страница под один продукт или услугу. Подходит для запуска рекламы, быстрого теста спроса и понятной презентации оффера."],
    ["This approach reduces drop-offs before design even begins. It builds an environment where choosing you becomes the path of least resistance for your customer.", "Собираем структуру, тексты, дизайн, адаптив и аналитику так, чтобы посетителю было проще оставить заявку."],
    ["Design & Prototyping", "Интернет-магазин"],
    ["$3,900", "80 000 ₽"],
    ["We translate strategic insights into high-fidelity interfaces that prioritize clarity and visual impact. Every element is tested through interactive prototypes, ensuring that the user experience is intuitive, seamless, and perfectly aligned with your brand’s unique identity.", "Каталог, карточки, корзина, оплата и сценарии покупки. Когда шаблон не справляется, а результат всё равно нужен измеримый."],
    ["By prototyping before coding, we eliminate guesswork and ensure technical feasibility. You get a pixel-perfect preview of the final product, allowing for rapid iteration and a design that truly resonates with your target audience.", "Доводим покупателя до оплаты: убираем лишние шаги, усиливаем карточки товаров и настраиваем аналитику."],
    ["$4,500", "100 000 ₽"],
    ["Our development process focuses on clean, scalable code and high-performance engineering. We build responsive websites and custom web applications using modern frameworks that ensure fast loading times, robust security, and a future-proof architecture.", "Нестандартный проект, сервис или сайт под ваши процессы — с нуля. Сложная логика, интеграции, личные кабинеты."],
    ["We bridge the gap between complex functionality and effortless performance. The result is a high-speed digital product that functions flawlessly across all devices, providing a rock-solid foundation for your business to scale and grow.", "Проектируем архитектуру, интерфейс и путь пользователя так, чтобы продуктом было удобно пользоваться и легко развивать."],
    ["Support & Growth", "Поддержка и рост"],
    ["$1,200", "от 20 000 ₽/мес"],
    ["Launching is just the beginning. We provide proactive monitoring, security updates, and performance tuning to keep your platform running at peak efficiency. Our team remains available to implement new features and refine the UX based on real-world user data.", "После запуска ведём сайт, добавляем новые блоки, следим за стабильностью и помогаем повышать конверсию на основе данных."],
    ["This continuous optimization ensures your site evolves alongside your business needs. We minimize downtime and technical debt, giving you the peace of mind to focus on your core operations while we handle the technical heavy lifting.", "Подходит, если хотите, чтобы сайтом кто-то занимался постоянно, без поиска подрядчиков на каждую мелкую задачу."],
    ["SEO", "Аналитика"],
    ["$990", "включено"],
    ["Our SEO strategy goes beyond keywords; we optimize the technical architecture and content hierarchy for maximum visibility. We ensure search engines can crawl, index, and rank your site effectively, driving high-quality organic traffic directly to your platform.", "Подключаем метрики, события, цели и понятные отчеты. До старта фиксируем текущую конверсию и смотрим, где утекают деньги."],
    ["Visibility leads to authority. By aligning your site with search intent, we help you capture high-intent leads and maintain a competitive edge. It’s about building a sustainable traffic source that grows in value over time.", "Так вы видите не просто красивый экран, а измеримый результат: заявки, покупки, стоимость лида и точки роста."],
    ["How we do it", "Как работаем"],
    ["Projects", "40+"],
    ["shipped", "запущенных"],
    ["with measurable", "проектов"],
    ["conversion lift", "с фокусом на заявки"],
    ["Average time to first", "20 минут"],
    ["meaningful action", "на бесплатный"],
    ["on our sites", "разбор сайта"],
    ["Of clients come from", "5+ лет опыта в дизайне и разработке"],
    ["Every result here started with a problem worth solving.", "Не просим вас писать ТЗ и сочинять тексты: это наша работа."],
    ["We don't chase volume", "Работаем от цифры"],
    ["We take on projects where our process can make a", "Сдаём не просто дизайн, а понятный бизнес-результат."],
    ["measurable difference", "измеримый рост"],
    ["Most clients stay for years.", "Видите этапы, сроки и за что платите."],
    ["Anna Schneider", "Виктория"],
    ["CEO", "маркетолог"],
    ["Jennifer Peterson", "Виктория"],
    ["Head of Sales at", "маркетолог"],
    ["FAQ", "FAQ"],
    ["Before we", "Перед стартом"],
    ["get started.", "частые вопросы."],
    ["Do you write the copy or do I need to provide it?", "Вы сами пишете тексты или это делаете вы?"],
    ["We can handle it both ways. You can provide your own content, or our copywriters can craft professional, SEO-optimized copy tailored specifically to your brand and goals.", "Тексты берем на себя. Вы даете вводные по продукту, аудитории и сильным сторонам, а мы собираем структуру и продающий текст."],
    ["Can I see the design before you build it?", "Можно увидеть дизайн до разработки?"],
    ["Absolutely. We don't start the development phase until you have reviewed and fully approved the high-fidelity design mockups in Figma.", "Да. Сначала показываем структуру и дизайн, согласуем, затем переходим к сборке и адаптивам."],
    ["What happens after launch?", "Что происходит после запуска?"],
    ["We don’t just disappear. We provide post-launch technical support, training for your team on how to manage the site, and options for ongoing maintenance and scaling.", "Подключаем аналитику, проверяем формы, помогаем с первыми правками и можем взять сайт на поддержку."],
    ["What if I'm not happy with the result?", "Что если конверсия не вырастет?"],
    ["We work in clear milestones (wireframes, design, development). By requiring your approval at each stage, we ensure the final product aligns perfectly with your vision before it’s even finished.", "Если после запуска метрика не растет, дорабатываем бесплатно: меняем слабые места и проверяем гипотезы."],
    ["Ask a question", "Задать вопрос"],
    ["How we think", "Наш подход"],
    ["“The hardest part of building a website isn't the code — it's knowing what to leave out. Every element that doesn't serve the visitor is working against you.”", "Сайт должен приносить деньги, а не просто быть. Поэтому мы убираем лишнее, усиливаем оффер и ведём человека к заявке."],
    ["Our team treats simplicity as a discipline, not a shortcut.", "Простота для нас — не упрощение, а способ быстрее довести клиента до решения."],
    ["Pricing.", "Тарифы."],
    ["Foundation", "Стандарт"],
    ["A solid site built on proven structure. Launch-ready, no extras.", "Оплачиваете проект целиком, и сайт сразу ваш."],
    ["Growth", "Подписка"],
    ["Strategy, copy guidance, and a site built to convert.", "Сайт без крупной суммы сразу, дальше ведём и поддерживаем."],
    ["Scale", "Индивидуально"],
    ["End-to-end digital infrastructure.", "Нестандартная разработка под ваши процессы."],
    ["Feature", "Что входит"],
    ["$4,800", "50 000 ₽"],
    ["/month", "/мес"],
    ["$9,600", "от 20 000 ₽"],
    ["$15,900", "от 100 000 ₽"],
    ["Strategy & behavioral audit", "Дизайн, тексты, адаптив, аналитика"],
    ["We study how your visitors actually behave on your site. Where they click, where they stop, where they leave.", "Изучаем поведение посетителей: где кликают, где сомневаются, где уходят без заявки."],
    ["Number of pages", "Формат проекта"],
    ["Conversion wireframes", "Прототип под конверсию"],
    ["Copywriting support", "Продающие тексты"],
    ["Brand identity system", "Визуальная система"],
    ["A complete visual foundation for your brand: logo, typography, color palette, icon style, and usage guidelines.", "Единый стиль: типографика, цвета, блоки, формы, карточки и состояния."],
    ["A/B testing setup", "Настройка аналитики"],
    ["Timeline", "Срок"],
    ["Ongoing support", "Поддержка"],
    ["Up to 5", "Лендинг"],
    ["Basic", "Базово"],
    ["3–4 weeks", "2–4 недели"],
    ["Get started", "Получить консультацию"],
    ["Up to 12", "Магазин"],
    ["Direction", "Ведение"],
    ["Advanced", "Расширенно"],
    ["5–7 weeks", "от 1 месяца"],
    ["Unlimited", "Кастом"],
    ["Full", "Полный цикл"],
    ["Advanced + reports", "Аналитика + отчеты"],
    ["Custom", "По задаче"],
    ["What our clients say.", "Отзывы."],
    ["Client stories", "Реальные люди и результаты"],
    ["We let the", "Мы отвечаем"],
    ["results speak", "за результат"],
    ["But sometimes the people behind them have", "но отзывы клиентов тоже"],
    ["something to add", "говорят многое"],
    ["\"We launched in two weeks and had paying customers by week three. I've worked with agencies that took months to deliver half of this.\"", "«Ребята не просто делали “как мы просим”, а реально думали о результате. Несколько раз тактично отговаривали нас от спорных решений и объясняли, почему это навредит продажам.»"],
    ["Sophie Andersen", "Евгения"],
    ["Co-founder", "логистика"],
    ["See more", "Читать отзыв"],
    ["News and", "Кейсы и"],
    ["updates.", "результаты."],
    ["Why most redesigns fail — and what to do instead", "Сайт для университета"],
    ["How to write a landing page that actually converts", "Сайт для RialTorg"],
    ["How we cut bounce rate by 34% with one layout change", "Продающий лендинг для банного комплекса"],
    ["Small defaults, big outcomes: lessons from behavioral design", "Интернет-магазин streetwear"],
    ["I'll personally review your brief and get back to you within two hours.", "Напишите нам — за 20 минут разберём ваш текущий сайт и покажем 3-5 точек, где утекают деньги."],
    ["Creative Director", "withsolution studio"],
    ["WE ALIGN STRATEGY, DESIGN, AND ENGINEERING INTO A SINGLE HIGH-PERFORMANCE LOOP. YOUR VISION, EXECUTED WITH SURGICAL PRECISION AND CONVERSION-FIRST LOGIC.", "Дизайн, продающие тексты и аналитика — под одну задачу: чтобы из вашего текущего трафика покупало больше людей. Если конверсия не вырастет — дорабатываем бесплатно."],
    ["DESIGN", "ДИЗАЙН"],
    ["DEVELOPMENT", "РАЗРАБОТКА"],
    ["MARKETING", "АНАЛИТИКА"],
    ["SLOTS FOR APR:", "СВОБОДНЫЕ СЛОТЫ:"],
    ["2 LEFT", "2 ПРОЕКТА"],
    ["LOCAL TIME:", "СЕЙЧАС:"],
    ["June 18, 11:04", "2026"],
    ["+1 (555) 400 0123", PHONE],
    ["hello@mattistudio.com", EMAIL],
    ["We usually respond to all digital enquiries within 2 business hours.", "Обычно отвечаем в Telegram в течение рабочего дня."],
    ["Start a project.", "Пора действовать."],
    ["Whether you have a full brief or just an idea, we're here to help shape it. No pitch decks, no sales calls —", "Узнайте, сколько заявок вы теряете прямо сейчас. Бесплатно и без обязательств —"],
    ["just a clear next step.", "решение всегда за вами."],
    ["Name", "Ваше имя"],
    ["Your email address", "Telegram или email"],
    ["What are you looking for?", "Что нужно сделать?"],
    ["I need a new website", "Нужен новый сайт"],
    ["I need a redesign", "Нужно повысить конверсию"],
    ["I need a landing page", "Нужен лендинг"],
    ["I need branding / visual identity", "Нужен интернет-магазин"],
    ["I need UI/UX design", "Нужна кастомная разработка"],
    ["Send message", "Отправить заявку"],
    ["By submitting, you agree to our", "Нажимая кнопку, вы соглашаетесь с"],
    ["Terms", "условиями"],
    ["and", "и"],
    ["Privacy Policy.", "политикой конфиденциальности."],
    ["Privacy Policy", "Политика конфиденциальности"],
    ["Terms of Service", "Условия"],
    ["Navigation", "Навигация"],
    ["Home", "Главная"],
    ["Visit Us", "Контакты"],
    ["124 City Road, London, EC1V 2NX", "Telegram: @withsolution"],
    ["Mon–Fri: 09:00 – 18:00", "Пн–Пт: 10:00 – 19:00"],
    ["Sat: 10:00 – 16:00", "Разбор сайта — бесплатно"],
    ["© 2026 MattIS®. All rights reserved.", "© 2026 withsolution studio"],
    ["Built in Framer", ""],
    ["Created by", ""],
    ["Anatolii Dmitrienko", ""],
    ["MATTIS® Template", ""],
    ["See What You Get", ""],
    ["from", ""],
    ["$129", ""],
  ]);

  const containsText = [
    ["We align strategy, design, and development", "Проектируем сайты, которые превращают посетителей в деньги."],
  ];

  function replaceTextNode(node) {
    const raw = node.nodeValue;
    if (!raw || !raw.trim()) return;
    const compact = raw.replace(/\s+/g, " ").trim();
    const upper = compact.toUpperCase();
    const uppercaseFallbacks = new Map([
      ["MATTIS", "withsolution"],
      ["MATTIS®", "withsolution"],
      ["WE ALIGN STRATEGY, DESIGN, AND ENGINEERING INTO A SINGLE HIGH-PERFORMANCE LOOP. YOUR VISION, EXECUTED WITH SURGICAL PRECISION AND CONVERSION-FIRST LOGIC.", "Дизайн, продающие тексты и аналитика — под одну задачу: чтобы из вашего текущего трафика покупало больше людей. Если конверсия не вырастет — дорабатываем бесплатно."],
      ["DESIGN", "дизайн"],
      ["DEVELOPMENT", "разработка"],
      ["MARKETING", "аналитика"],
      ["SLOTS FOR APR:", "Свободные слоты:"],
      ["AND", "и"],
    ]);
    if (uppercaseFallbacks.has(upper)) {
      node.nodeValue = raw.replace(compact, uppercaseFallbacks.get(upper));
      return;
    }
    if (exactText.has(compact)) {
      node.nodeValue = raw.replace(compact, exactText.get(compact));
      return;
    }
    for (const [from, to] of containsText) {
      if (compact.includes(from) || upper.includes(from.toUpperCase())) {
        node.nodeValue = to;
        return;
      }
    }
  }

  function walkText(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("script, style, svg")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    let node;
    while ((node = walker.nextNode())) replaceTextNode(node);
  }

  function updateLinks() {
    document.querySelectorAll("a").forEach((link) => {
      const text = link.textContent.replace(/\s+/g, " ").trim();
      const href = link.getAttribute("href") || "";

      if (/contact\.html|mailto:|tel:|framer\.link|templifica\.com|x\.com|instagram\.com/i.test(href)) {
        link.href = TELEGRAM;
        link.target = "_blank";
        link.rel = "noopener";
      }

      if (/START A PROJECT|Start a Project|Get started|Ask a question|Send message|Получить|Задать|Отправить/i.test(text)) {
        link.href = TELEGRAM;
        link.target = "_blank";
        link.rel = "noopener";
      }
    });
  }

  function updateMeta() {
    document.documentElement.lang = "ru";
    document.title = "withsolution studio — сайты, которые превращают посетителей в деньги";
    const metas = {
      description: "Делаем сайты под рост конверсии: дизайн, продающие тексты, аналитика и гарантия доработки, если конверсия не вырастет.",
      "og:title": "withsolution studio",
      "og:description": "Проектируем сайты, которые превращают посетителей в деньги.",
      "twitter:title": "withsolution studio",
      "twitter:description": "Проектируем сайты, которые превращают посетителей в деньги.",
    };
    Object.entries(metas).forEach(([name, content]) => {
      const selector = name.startsWith("og:")
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      const meta = document.querySelector(selector);
      if (meta) meta.setAttribute("content", content);
    });
  }

  function hideTemplatePromos() {
    document.querySelectorAll("a, div").forEach((el) => {
      const text = el.textContent.replace(/\s+/g, " ").trim();
      if (/Built in Framer|Created by|MATTIS® Template|Anatolii Dmitrienko|See What You Get|\$129/.test(text)) {
        el.style.display = "none";
        el.style.pointerEvents = "none";
      }
    });
  }

  function addHeroTitle() {
    const heroContent = document.querySelector(".framer-ahbwos");
    if (!heroContent || heroContent.querySelector(".ws-hero-title")) return;
    const title = document.createElement("div");
    title.className = "ws-hero-title";
    title.textContent = "Проектируем сайты, которые превращают посетителей в деньги";
    heroContent.appendChild(title);
  }

  function customize() {
    updateMeta();
    walkText(document.body);
    updateLinks();
    hideTemplatePromos();
    addHeroTitle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", customize, { once: true });
  } else {
    customize();
  }

  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      customize();
    });
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(customize, 500);
  setTimeout(customize, 1500);
  setTimeout(customize, 3000);
})();
