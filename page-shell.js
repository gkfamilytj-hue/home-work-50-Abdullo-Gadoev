const page = document.body.dataset.page;
const pageInfo = {
  catalog: ["Каталог будущего", "Исследуй технологии.", "От умных устройств до мощных игровых систем — найди технику под свой ритм.", "all", "ВСЯ ВСЕЛЕННАЯ TECHNOVA", [["48+", "моделей техники"], ["10", "категорий"], ["24/7", "сравнение цен"]]],
  phones: ["Смартфоны", "Будь на связи.", "Камеры нового поколения, яркие дисплеи и скорость, которая всегда с тобой.", "phone", "СМАРТФОНЫ НОВОГО ПОКОЛЕНИЯ", [["5G", "связь и скорость"], ["AI", "камера Pro"], ["2 года", "гарантия"]]],
  tablets: ["Планшеты", "Больше пространства.", "Для творчества, работы и отдыха — выбери экран, который подстраивается под тебя.", "tablet", "МОБИЛЬНАЯ СВОБОДА", [["OLED", "яркие дисплеи"], ["До 1 ТБ", "встроенной памяти"], ["12 ч", "вдохновения"]]],
  cars: ["Автомобили", "Дорога в будущее.", "Современные автомобили и новые маршруты начинаются с правильного выбора.", "car", "ЭЛЕКТРОМОБИЛИ И АВТО", [["EV", "и гибриды"], ["2026", "новые модели"], ["360°", "технологий"]]],
  laptop: ["Ноутбуки", "Мощь без границ.", "Лёгкие устройства для учёбы, работы, создания контента и больших идей.", "laptop", "РАБОЧЕЕ ПРОСТРАНСТВО ВСЕГДА С ТОБОЙ", [["18 ч", "автономность"], ["OLED", "экраны"], ["2 года", "гарантия"]]],
  gaming: ["Игровая техника", "Играй на своём уровне.", "Консоли и игровые системы для миров без компромиссов.", "gaming", "ЗАПУСТИ СВОЮ СЛЕДУЮЩУЮ ИГРУ", [["4K", "ультра-графика"], ["120 FPS", "плавная игра"], ["RTX", "новое поколение"]]],
  audio: ["Аудиотехника", "Почувствуй каждый звук.", "Наушники и аудиоустройства, которые превращают каждый момент в впечатление.", "audio", "ЗВУК НОВОГО ИЗМЕРЕНИЯ", [["Hi-Res", "чистый звук"], ["ANC", "тишина вокруг"], ["30 ч", "музыки"]]],
  wearable: ["Носимые устройства", "Будь в своём ритме.", "Умные часы и персональные устройства — технология, которая всегда рядом.", "wearable", "ТЕХНОЛОГИИ В ТВОЁМ РИТМЕ", [["Титан", "и сапфир"], ["GPS", "навигация"], ["300 м", "водозащита"]]],
  camera: ["Камеры", "Лови момент.", "Фото- и видеотехника, чтобы видеть привычное по-новому.", "camera", "СОЗДАВАЙ СВОЮ ИСТОРИЮ", [["Full Frame", "детализация"], ["8K", "видео"], ["IBIS", "стабилизация"]]],
  home: ["Умный дом", "Дом, который тебя понимает.", "Умное освещение и устройства, которые делают каждый день комфортнее.", "home", "ИНТЕЛЛЕКТУАЛЬНОЕ ПРОСТРАНСТВО", [["Matter", "совместимость"], ["Wi-Fi", "управление"], ["AI", "сценарии"]]],
};
const [title, headline, description, filter, eyebrow, features] = pageInfo[page] || pageInfo.catalog;
document.body.dataset.filter = filter;
document.title = `${title} — TechNova`;
const pages = [
  ["Каталог", "catalog"],
  ["Телефоны", "phones"],
  ["Планшеты", "tablets"],
  ["Авто", "cars"],
  ["Ноутбуки", "laptop"],
  ["Игры", "gaming"],
  ["Аудио", "audio"],
  ["Часы", "wearable"],
  ["Камеры", "camera"],
  ["Умный дом", "home"],
];
const links = pages.map(([label, slug]) =>
  `<a href="../${slug}/index.html"${slug === page ? ' aria-current="page"' : ""}>${label}</a>`,
).join("");
document.body.innerHTML = `
  <header class="site-header">
    <a class="brand" href="../../index.html" aria-label="TechNova — главная"><span class="brand-icon" aria-hidden="true">✦</span><span>Tech<span class="brand-period">Nova</span></span></a>
    <nav class="main-nav" aria-label="Категории TechNova">${links}</nav>
    <button class="cart-trigger" id="cart-trigger" type="button" aria-label="Открыть корзину"><span aria-hidden="true">🛒</span><span>Корзина</span><b id="cart-count">0</b></button>
  </header>
  <main>
    <section class="hero category-hero">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-dot"></span> ${eyebrow}</div>
        <h1>${headline}</h1>
        <p>${description}</p>
        <a class="primary-button" href="#catalog">Смотреть подборку <span aria-hidden="true">↘</span></a>
        <div class="hero-assurance"><span class="assurance-icon" aria-hidden="true">✦</span> Технологии, которые меняют каждый день</div>
        <div class="hero-specs">${features.map(([value, label]) => `<div class="hero-spec"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="visual-ring ring-back"></div><div class="visual-ring ring-front"></div>
        <div class="visual-card card-phone"><span>◉</span><small>DISCOVER</small></div>
        <div class="visual-card card-tablet"><span>▣</span><small>INNOVATE</small></div>
        <div class="visual-card card-car"><span>⌁</span><small>FUTURE</small></div>
        <div class="visual-center">✦</div><span class="visual-star visual-star-one">✳</span><span class="visual-star visual-star-two">✦</span>
        <span class="visual-note">TECHNOVA<br /><b>Новый уровень</b></span>
      </div>
      <div class="hero-index"><span>0${pages.findIndex(([, slug]) => slug === page) + 1}</span><span class="index-divider"></span><span>ТЕХНОЛОГИИ БУДУЩЕГО</span></div>
    </section>
    <section class="category-rail" aria-label="Все категории">${links}</section>
    <section class="catalog-section" id="catalog">
      <div class="section-top"><div><div class="eyebrow">ОТКРОЙ СВОЙ СЛЕДУЮЩИЙ УРОВЕНЬ</div><h2>${title} · подборка</h2><p class="section-subtitle">Выбирай устройства, сравнивай и находи предложения у продавцов.</p></div><span class="live-badge"><span></span> TECHNOVA · 2026</span></div>
      <div class="category-tabs" role="group" aria-label="Фильтр по категории">
        <button class="category-tab" type="button" data-filter="all" aria-pressed="false">Всё</button><button class="category-tab" type="button" data-filter="phone" aria-pressed="false">Телефоны</button><button class="category-tab" type="button" data-filter="tablet" aria-pressed="false">Планшеты</button><button class="category-tab" type="button" data-filter="car" aria-pressed="false">Авто</button><button class="category-tab" type="button" data-filter="laptop" aria-pressed="false">Ноутбуки</button><button class="category-tab" type="button" data-filter="gaming" aria-pressed="false">Игры</button><button class="category-tab" type="button" data-filter="audio" aria-pressed="false">Аудио</button><button class="category-tab" type="button" data-filter="wearable" aria-pressed="false">Часы</button><button class="category-tab" type="button" data-filter="camera" aria-pressed="false">Камеры</button><button class="category-tab" type="button" data-filter="home" aria-pressed="false">Умный дом</button>
      </div>
      <div class="product-grid" id="product-grid"></div>
      <p class="price-note">Цены — ориентировочные, в долларах США и до налогов. Проверяй актуальную комплектацию, наличие, условия гарантии и полную стоимость у продавца.</p>
    </section>
    <section class="compare-section" id="compare"><div class="compare-heading"><div><div class="eyebrow">РЕШЕНИЕ ЗА ТОБОЙ</div><h2>Собери своё сравнение.</h2><p>Добавь варианты и запиши найденные цены. Всё останется на этом устройстве.</p></div><span class="compare-count" id="compare-count">0 / 3</span></div><div class="compare-empty" id="compare-empty"><span class="empty-spark" aria-hidden="true">✳</span><span>Добавь сюда модели из подборки — и сравнивай их рядом.</span><a href="#catalog">Смотреть подборку <span aria-hidden="true">↗</span></a></div><div class="comparison-grid" id="comparison-grid"></div><p class="local-note"><span aria-hidden="true">⌑</span> Твои записи хранятся только в браузере на этом устройстве.</p></section>
  </main>
  <footer class="site-footer"><a class="brand footer-brand" href="../../index.html"><span class="brand-icon" aria-hidden="true">✦</span><span>Tech<span class="brand-period">Nova</span></span></a><span>Твой портал в будущее технологий.</span><a href="../catalog/index.html">Весь каталог ↑</a><span>Рынок США · цены в USD</span></footer>
  <div class="toast is-hidden" id="toast" role="status"></div>
`;
