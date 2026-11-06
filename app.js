const products = [
  {
    id: "iphone-pro",
    category: "phone",
    categoryName: "Телефон",
    title: "iPhone 18 Pro · 256 ГБ",
    brand: "Apple",
    description: "Компактная Pro-модель с профессиональной камерой и новым чипом.",
    icon: "▯",
    badge: "PRO-КАМЕРА",
    price: 1199,
    priceType: "Цена Apple",
    officialUrl: "https://www.apple.com/iphone-18-pro/",
    query: "Apple iPhone 18 Pro 256GB unlocked",
  },
  {
    id: "iphone-air",
    category: "phone",
    categoryName: "Телефон",
    title: "iPhone Air · 256 ГБ",
    brand: "Apple",
    description: "Тонкий лёгкий iPhone с большим экраном на каждый день.",
    icon: "▯",
    badge: "ЛЁГКИЙ",
    price: 999,
    priceType: "Цена Apple",
    officialUrl: "https://www.apple.com/iphone-air/",
    query: "Apple iPhone Air 256GB unlocked",
  },
  {
    id: "galaxy-s26",
    category: "phone",
    categoryName: "Телефон",
    title: "Samsung Galaxy S26 · 256 ГБ",
    brand: "Samsung",
    description: "Флагманский Android-смартфон с ярким экраном и быстрой камерой.",
    icon: "◉",
    badge: "ANDROID",
    price: 899.99,
    priceType: "Ориентир MSRP",
    officialUrl: "https://www.samsung.com/us/smartphones/galaxy-s26/",
    query: "Samsung Galaxy S26 256GB unlocked",
  },
  {
    id: "galaxy-s26-ultra",
    category: "phone",
    categoryName: "Телефон",
    title: "Samsung Galaxy S26 Ultra · 256 ГБ",
    brand: "Samsung",
    description: "Большой дисплей, S Pen и продвинутая система камер.",
    icon: "◉",
    badge: "УЛЬТРА",
    price: 1299.99,
    priceType: "Ориентир MSRP",
    officialUrl: "https://www.samsung.com/us/smartphones/galaxy-s26-ultra/",
    query: "Samsung Galaxy S26 Ultra 256GB unlocked",
  },
  {
    id: "ipad-pro",
    category: "tablet",
    categoryName: "Планшет",
    title: "iPad Pro 11″ · 256 ГБ",
    brand: "Apple",
    description: "Тонкий планшет для рисования, учёбы и требовательных приложений.",
    icon: "▣",
    badge: "ТВОРЧЕСТВО",
    price: 1199,
    priceType: "Цена Apple",
    officialUrl: "https://www.apple.com/ipad-pro/",
    query: "Apple 11-inch iPad Pro 256GB Wi-Fi",
  },
  {
    id: "ipad-air",
    category: "tablet",
    categoryName: "Планшет",
    title: "iPad Air 11″ · M4",
    brand: "Apple",
    description: "Лёгкий универсальный планшет для заметок и развлечений.",
    icon: "▣",
    badge: "НА КАЖДЫЙ ДЕНЬ",
    price: 599,
    priceType: "Цена Apple",
    officialUrl: "https://www.apple.com/ipad-air/",
    query: "Apple 11-inch iPad Air M4 Wi-Fi",
  },
  {
    id: "galaxy-tab-s11",
    category: "tablet",
    categoryName: "Планшет",
    title: "Samsung Galaxy Tab S11",
    brand: "Samsung",
    description: "AMOLED-экран и S Pen в комплекте для заметок и творчества.",
    icon: "▤",
    badge: "S PEN",
    price: 799.99,
    priceType: "Ориентир MSRP",
    officialUrl: "https://www.samsung.com/us/tablets/galaxy-tab-s11/",
    query: "Samsung Galaxy Tab S11 Wi-Fi",
  },
  {
    id: "toyota-corolla",
    category: "car",
    categoryName: "Автомобиль",
    title: "Toyota Corolla · 2027",
    brand: "Toyota",
    description: "Экономичный седан. Стартовый MSRP на сайте Toyota — $23,325.",
    icon: "⌁",
    badge: "СЕДАН",
    price: 23325,
    priceType: "MSRP Toyota",
    officialUrl: "https://www.toyota.com/corolla/",
    query: "2027 Toyota Corolla new car dealer price",
  },
  {
    id: "toyota-rav4",
    category: "car",
    categoryName: "Автомобиль",
    title: "Toyota RAV4 · 2026",
    brand: "Toyota",
    description: "Гибридный кроссовер. Стартовый MSRP на сайте Toyota — $31,900.",
    icon: "⌁",
    badge: "КРОССОВЕР",
    price: 31900,
    priceType: "MSRP Toyota",
    officialUrl: "https://www.toyota.com/rav4/",
    query: "2026 Toyota RAV4 new car dealer price",
  },
  {
    id: "toyota-tacoma",
    category: "car",
    categoryName: "Автомобиль",
    title: "Toyota Tacoma · 2026",
    brand: "Toyota",
    description: "Пикап с несколькими кабинами. Стартовый MSRP — $32,545.",
    icon: "⌁",
    badge: "ПИКАП",
    price: 32545,
    priceType: "MSRP Toyota",
    officialUrl: "https://www.toyota.com/tacoma/",
    query: "2026 Toyota Tacoma new truck dealer price",
  },
  {
    id: "macbook-air",
    category: "laptop",
    categoryName: "Ноутбук",
    title: "MacBook Air · 15″",
    brand: "Apple",
    description: "Тонкий ноутбук для работы, творчества и задач на ходу.",
    icon: "💻",
    badge: "УЛЬТРАТОНКИЙ",
    price: 1299,
    priceType: "Ориентир",
    officialUrl: "https://www.apple.com/macbook-air/",
    query: "Apple MacBook Air 15 inch laptop",
  },
  {
    id: "playstation-5-pro",
    category: "gaming",
    categoryName: "Игровая техника",
    title: "PlayStation 5 Pro",
    brand: "Sony",
    description: "Консоль нового уровня для ярких миров и плавного геймплея.",
    icon: "🎮",
    badge: "NEXT-GEN",
    price: 699.99,
    priceType: "Ориентир",
    officialUrl: "https://www.playstation.com/en-us/ps5/ps5-pro/",
    query: "Sony PlayStation 5 Pro console",
  },
  {
    id: "sony-wh1000xm6",
    category: "audio",
    categoryName: "Аудио",
    title: "Sony WH-1000XM6",
    brand: "Sony",
    description: "Беспроводные наушники с шумоподавлением и детальным звуком.",
    icon: "🎧",
    badge: "HI-RES AUDIO",
    price: 449.99,
    priceType: "Ориентир",
    officialUrl: "https://www.sony.com/electronics/headband-headphones/wh-1000xm6",
    query: "Sony WH-1000XM6 wireless headphones",
  },
  {
    id: "garmin-fenix-8",
    category: "wearable",
    categoryName: "Носимая техника",
    title: "Garmin fēnix 8",
    brand: "Garmin",
    description: "Прочные смарт-часы для спорта, маршрутов и приключений.",
    icon: "⌚",
    badge: "OUTDOOR",
    price: 999.99,
    priceType: "Ориентир",
    officialUrl: "https://www.garmin.com/en-US/p/1228429/",
    query: "Garmin fēnix 8 smartwatch",
  },
  {
    id: "sony-alpha-7v",
    category: "camera",
    categoryName: "Камера",
    title: "Sony α7 V",
    brand: "Sony",
    description: "Полнокадровая камера для фото, видео и новых идей.",
    icon: "📷",
    badge: "FULL FRAME",
    price: 2899.99,
    priceType: "Ориентир",
    officialUrl: "https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-7m5-body-kit",
    query: "Sony Alpha 7 V full frame camera",
  },
  {
    id: "philips-hue-starter",
    category: "home",
    categoryName: "Умный дом",
    title: "Philips Hue Starter Kit",
    brand: "Philips Hue",
    description: "Умное освещение, которое меняет атмосферу комнаты одним касанием.",
    icon: "💡",
    badge: "SMART HOME",
    price: 99.99,
    priceType: "Ориентир",
    officialUrl: "https://www.philips-hue.com/en-us/products/smart-light-starter-kits",
    query: "Philips Hue smart light starter kit",
  },
];

const categorySpecs = {
  phone: ["5G · OLED", "Камера Pro · AI"],
  tablet: ["OLED · 120 Гц", "Wi-Fi · USB-C"],
  car: ["Гибрид / EV", "Автомат · 5 мест"],
  laptop: ["OLED · 120 Гц", "SSD · Wi-Fi 7"],
  gaming: ["4K · HDR", "Wi-Fi 6 · SSD"],
  audio: ["Hi-Res Audio", "Bluetooth · ANC"],
  wearable: ["Титан · сапфир", "GPS · водозащита"],
  camera: ["Full Frame", "4K/8K · стабилизация"],
  home: ["Wi-Fi · приложение", "Умный дом · AI"],
};

const productIcons = {
  phone: '<svg viewBox="0 0 96 96" fill="none"><rect x="28" y="9" width="40" height="78" rx="11" fill="url(#body)" stroke="url(#edge)" stroke-width="2.5"/><rect x="33" y="19" width="30" height="54" rx="5" fill="url(#screen)"/><circle cx="48" cy="80" r="2" fill="#dce8ff"/><path d="M37 59 46 47l7 7 6-10 4 7v17H33V60l4-1Z" fill="#56E8ED" fill-opacity=".72"/><circle cx="54" cy="33" r="5" fill="#fff" fill-opacity=".8"/><defs><linearGradient id="body" x1="28" y1="9" x2="69" y2="87" gradientUnits="userSpaceOnUse"><stop stop-color="#29345C"/><stop offset="1" stop-color="#11172C"/></linearGradient><linearGradient id="edge" x1="28" y1="9" x2="68" y2="87" gradientUnits="userSpaceOnUse"><stop stop-color="#BD74FF"/><stop offset="1" stop-color="#35E3F2"/></linearGradient><linearGradient id="screen" x1="33" y1="19" x2="63" y2="73" gradientUnits="userSpaceOnUse"><stop stop-color="#592FC1"/><stop offset="1" stop-color="#087F9D"/></linearGradient></defs></svg>',
  tablet: '<svg viewBox="0 0 96 96" fill="none"><rect x="15" y="12" width="66" height="72" rx="10" fill="url(#body)" stroke="url(#edge)" stroke-width="2.5"/><rect x="21" y="19" width="54" height="57" rx="5" fill="url(#screen)"/><circle cx="48" cy="80" r="1.5" fill="#DAE5FF"/><path d="m27 65 15-17 10 10 8-11 10 13v12H27V65Z" fill="#55E5EC" fill-opacity=".66"/><circle cx="61" cy="33" r="6" fill="#fff" fill-opacity=".82"/><defs><linearGradient id="body" x1="15" y1="12" x2="81" y2="84" gradientUnits="userSpaceOnUse"><stop stop-color="#29345C"/><stop offset="1" stop-color="#11172C"/></linearGradient><linearGradient id="edge" x1="15" y1="12" x2="81" y2="84" gradientUnits="userSpaceOnUse"><stop stop-color="#BD74FF"/><stop offset="1" stop-color="#35E3F2"/></linearGradient><linearGradient id="screen" x1="21" y1="19" x2="75" y2="76" gradientUnits="userSpaceOnUse"><stop stop-color="#592FC1"/><stop offset="1" stop-color="#087F9D"/></linearGradient></defs></svg>',
  car: '<svg viewBox="0 0 96 96" fill="none"><path d="m19 55 7-20c1.3-3.7 4.8-6 8.7-6h27.6c3.5 0 6.7 1.9 8.3 5l10.2 19.2A9 9 0 0 1 87 61v9a5 5 0 0 1-5 5h-3a10 10 0 0 1-20 0H39a10 10 0 0 1-20 0h-2a5 5 0 0 1-5-5v-8c0-3.1 2.8-6.1 7-7Z" fill="url(#body)" stroke="url(#edge)" stroke-width="2.5"/><path d="m31 35-6 16h48l-8-16H31Z" fill="#162846" stroke="#52DCEB" stroke-width="2"/><path d="M29 59h6M66 59h6" stroke="#D7E8FF" stroke-linecap="round" stroke-width="3"/><circle cx="29" cy="74" r="6" fill="#11172C" stroke="#B887FF" stroke-width="2.5"/><circle cx="69" cy="74" r="6" fill="#11172C" stroke="#38E0EF" stroke-width="2.5"/><defs><linearGradient id="body" x1="17" y1="29" x2="79" y2="75" gradientUnits="userSpaceOnUse"><stop stop-color="#7552D6"/><stop offset="1" stop-color="#087F9D"/></linearGradient><linearGradient id="edge" x1="17" y1="29" x2="79" y2="75" gradientUnits="userSpaceOnUse"><stop stop-color="#C376FF"/><stop offset="1" stop-color="#38E0EF"/></linearGradient></defs></svg>',
  laptop: '<svg viewBox="0 0 96 96" fill="none"><rect x="23" y="16" width="50" height="43" rx="5" fill="url(#body)" stroke="url(#edge)" stroke-width="2.5"/><rect x="28" y="21" width="40" height="32" rx="2" fill="url(#screen)"/><path d="M14 66c1.4-1.6 3.2-2.5 5.3-2.5h57.4c2.1 0 3.9.9 5.3 2.5l4.8 7.4c1.5 2.3-.1 5.4-2.9 5.4H12.1c-2.8 0-4.4-3.1-2.9-5.4l4.8-7.4Z" fill="#AEBBD5" stroke="#DDE7F7" stroke-width="2"/><path d="M42 70h12" stroke="#4F5F7B" stroke-linecap="round" stroke-width="2.5"/><circle cx="48" cy="18.5" r="1" fill="#DCE8FF"/><path d="m30 45 12-11 8 7 7-9 11 12v9H28V43l2 2Z" fill="#57E4ED" fill-opacity=".68"/><defs><linearGradient id="body" x1="23" y1="16" x2="73" y2="59" gradientUnits="userSpaceOnUse"><stop stop-color="#303C65"/><stop offset="1" stop-color="#11172C"/></linearGradient><linearGradient id="edge" x1="23" y1="16" x2="73" y2="59" gradientUnits="userSpaceOnUse"><stop stop-color="#C376FF"/><stop offset="1" stop-color="#38E0EF"/></linearGradient><linearGradient id="screen" x1="28" y1="21" x2="68" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="#6739CF"/><stop offset="1" stop-color="#00A5B5"/></linearGradient></defs></svg>',
  gaming: '<svg viewBox="0 0 96 96" fill="none"><path d="M28 34h40c7 0 12 4.8 14 12l6 22c1.5 5.7-5 10-9.5 6.4L64 63H32L17.5 74.4C13 78 6.5 73.7 8 68l6-22c2-7.2 7-12 14-12Z" fill="url(#body)" stroke="url(#edge)" stroke-width="2.5"/><path d="M29 47v15M21.5 54.5h15" stroke="#E3D8FF" stroke-linecap="round" stroke-width="4"/><circle cx="66" cy="50" r="3" fill="#47E5EF"/><circle cx="74" cy="59" r="3" fill="#C77BFF"/><circle cx="74" cy="43" r="3" fill="#FF67B3"/><circle cx="82" cy="51" r="3" fill="#FFE06B"/><defs><linearGradient id="body" x1="14" y1="34" x2="83" y2="75" gradientUnits="userSpaceOnUse"><stop stop-color="#5035A7"/><stop offset="1" stop-color="#142D52"/></linearGradient><linearGradient id="edge" x1="14" y1="34" x2="83" y2="75" gradientUnits="userSpaceOnUse"><stop stop-color="#C376FF"/><stop offset="1" stop-color="#38E0EF"/></linearGradient></defs></svg>',
  audio: '<svg viewBox="0 0 96 96" fill="none"><path d="M20 53V44a28 28 0 0 1 56 0v9" stroke="url(#edge)" stroke-linecap="round" stroke-width="7"/><rect x="15" y="48" width="19" height="29" rx="8" fill="url(#left)"/><rect x="62" y="48" width="19" height="29" rx="8" fill="url(#right)"/><path d="M72 73c-3 9-11 13-22 13h-7" stroke="#8DA2C8" stroke-linecap="round" stroke-width="3"/><rect x="34" y="82" width="13" height="7" rx="3.5" fill="#B984FF"/><defs><linearGradient id="edge" x1="20" y1="16" x2="76" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="#C376FF"/><stop offset="1" stop-color="#38E0EF"/></linearGradient><linearGradient id="left" x1="15" y1="48" x2="34" y2="77" gradientUnits="userSpaceOnUse"><stop stop-color="#8054E5"/><stop offset="1" stop-color="#223E70"/></linearGradient><linearGradient id="right" x1="62" y1="48" x2="81" y2="77" gradientUnits="userSpaceOnUse"><stop stop-color="#287FAF"/><stop offset="1" stop-color="#263667"/></linearGradient></defs></svg>',
  wearable: '<svg viewBox="0 0 96 96" fill="none"><path d="m36 10 24 0 5 22H31l5-22ZM31 64h34l-5 22H36l-5-22Z" fill="url(#strap)" stroke="#8971CA" stroke-width="2"/><rect x="23" y="28" width="50" height="40" rx="13" fill="url(#body)" stroke="url(#edge)" stroke-width="3"/><rect x="29" y="34" width="38" height="28" rx="9" fill="#18182F"/><path d="M48 38v10l7 5" stroke="#56E5EF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><circle cx="48" cy="49" r="13" stroke="#B982FF" stroke-width="2"/><defs><linearGradient id="strap" x1="31" y1="10" x2="65" y2="86" gradientUnits="userSpaceOnUse"><stop stop-color="#4056AB"/><stop offset="1" stop-color="#492E89"/></linearGradient><linearGradient id="body" x1="23" y1="28" x2="73" y2="68" gradientUnits="userSpaceOnUse"><stop stop-color="#463A83"/><stop offset="1" stop-color="#152842"/></linearGradient><linearGradient id="edge" x1="23" y1="28" x2="73" y2="68" gradientUnits="userSpaceOnUse"><stop stop-color="#CC77FF"/><stop offset="1" stop-color="#35E2EF"/></linearGradient></defs></svg>',
  camera: '<svg viewBox="0 0 96 96" fill="none"><path d="M14 34a7 7 0 0 1 7-7h13l6-8h17l6 8h12a7 7 0 0 1 7 7v39a7 7 0 0 1-7 7H21a7 7 0 0 1-7-7V34Z" fill="url(#body)" stroke="url(#edge)" stroke-width="2.5"/><circle cx="48" cy="52" r="20" fill="#11172C" stroke="#8C67EB" stroke-width="3"/><circle cx="48" cy="52" r="13" fill="url(#lens)" stroke="#43DDEA" stroke-width="2"/><circle cx="48" cy="52" r="6" fill="#12172C"/><circle cx="68" cy="35" r="3" fill="#49E0EC"/><defs><linearGradient id="body" x1="14" y1="19" x2="82" y2="80" gradientUnits="userSpaceOnUse"><stop stop-color="#443970"/><stop offset="1" stop-color="#142844"/></linearGradient><linearGradient id="edge" x1="14" y1="19" x2="82" y2="80" gradientUnits="userSpaceOnUse"><stop stop-color="#C376FF"/><stop offset="1" stop-color="#38E0EF"/></linearGradient><radialGradient id="lens" cx="0" cy="0" r="1" gradientTransform="translate(48 52) rotate(90) scale(13)" gradientUnits="userSpaceOnUse"><stop stop-color="#207AAB"/><stop offset="1" stop-color="#20224A"/></radialGradient></defs></svg>',
  home: '<svg viewBox="0 0 96 96" fill="none"><path d="m11 45 37-31 37 31v35a5 5 0 0 1-5 5H16a5 5 0 0 1-5-5V45Z" fill="url(#body)" stroke="url(#edge)" stroke-linejoin="round" stroke-width="3"/><path d="M39 85V58a9 9 0 0 1 18 0v27" fill="#121A31" stroke="#4DDDEB" stroke-width="2.5"/><path d="M26 48h11v11H26zM59 48h11v11H59z" fill="#B178FF"/><path d="m48 28 2.5 7.5L58 38l-7.5 2.5L48 48l-2.5-7.5L38 38l7.5-2.5L48 28Z" fill="#5FE4F0"/><defs><linearGradient id="body" x1="11" y1="14" x2="85" y2="85" gradientUnits="userSpaceOnUse"><stop stop-color="#443970"/><stop offset="1" stop-color="#142844"/></linearGradient><linearGradient id="edge" x1="11" y1="14" x2="85" y2="85" gradientUnits="userSpaceOnUse"><stop stop-color="#C376FF"/><stop offset="1" stop-color="#38E0EF"/></linearGradient></defs></svg>',
};

function createProductIcon(category, className = "") {
  const icon = document.createElement("span");
  icon.className = `product-icon-art ${className}`.trim();
  icon.setAttribute("aria-hidden", "true");
  const instanceId = `product-icon-${Math.random().toString(36).slice(2)}`;
  icon.innerHTML = (productIcons[category] || productIcons.home)
    .replace(/id="([^"]+)"/g, (_, id) => `id="${instanceId}-${id}"`)
    .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${instanceId}-${id})`);
  return icon;
}

function createProduct(category, categoryName, id, title, brand, description, icon, badge, price, specs, url, query) {
  return {
    id,
    category,
    categoryName,
    title,
    brand,
    description,
    icon,
    badge,
    price,
    priceType: "Ориентир",
    specs,
    officialUrl: url,
    query,
  };
}

products.push(
  createProduct("phone", "Телефон", "pixel-10-pro-xl", "Google Pixel 10 Pro XL · 256 ГБ", "Google", "Флагманская камера и функции Google AI на большом экране.", "◉", "GOOGLE AI", 1199, ["6.8″ LTPO OLED", "5× зум · 50 Мп"], "https://store.google.com/category/phones", "Google Pixel 10 Pro XL 256GB"),
  createProduct("phone", "Телефон", "xiaomi-15-ultra", "Xiaomi 15 Ultra · 512 ГБ", "Xiaomi", "Камерофон с оптикой Leica и ярким AMOLED-дисплеем.", "◉", "LEICA", 1499, ["1″ сенсор Leica", "Snapdragon · 512 ГБ"], "https://www.mi.com/global/product/xiaomi-15-ultra/", "Xiaomi 15 Ultra 512GB"),
  createProduct("phone", "Телефон", "oneplus-13", "OnePlus 13 · 512 ГБ", "OnePlus", "Высокая производительность и плавный экран для каждого дня.", "◉", "120 HZ", 899, ["AMOLED · 120 Гц", "Snapdragon · 6000 мА·ч"], "https://www.oneplus.com/us/13", "OnePlus 13 512GB"),
  createProduct("tablet", "Планшет", "ipad-pro-13", "iPad Pro 13″ · 1 ТБ", "Apple", "Большой дисплей и производительность для профессионального творчества.", "▣", "PRO · 1 ТБ", 1899, ["13″ Ultra Retina XDR", "M4 · 1 ТБ"], "https://www.apple.com/ipad-pro/", "Apple iPad Pro 13 inch 1TB"),
  createProduct("tablet", "Планшет", "galaxy-tab-s11-ultra", "Galaxy Tab S11 Ultra · 1 ТБ", "Samsung", "Огромный AMOLED-экран, S Pen и многозадачность.", "▤", "ULTRA", 1599, ["14.6″ AMOLED · 120 Гц", "S Pen · 1 ТБ"], "https://www.samsung.com/us/tablets/", "Samsung Galaxy Tab S11 Ultra 1TB"),
  createProduct("tablet", "Планшет", "surface-pro-11", "Surface Pro 11 · OLED", "Microsoft", "Планшет и ноутбук в одном устройстве с клавиатурой-трансформером.", "▣", "2 В 1", 1499, ["13″ OLED · сенсорный", "Snapdragon X Elite"], "https://www.microsoft.com/en-us/surface/devices/surface-pro-11th-edition", "Microsoft Surface Pro 11 OLED"),
  createProduct("car", "Автомобиль", "tesla-model-3", "Tesla Model 3 Long Range", "Tesla", "Электроседан с большим запасом хода и обновлениями по воздуху.", "⌁", "ELECTRIC", 42490, ["Запас хода до 363 mi", "AWD · Supercharger"], "https://www.tesla.com/model3", "Tesla Model 3 Long Range"),
  createProduct("car", "Автомобиль", "hyundai-ioniq-5", "Hyundai IONIQ 5 Limited", "Hyundai", "Электрокроссовер с быстрой зарядкой и просторным салоном.", "⌁", "800 V EV", 54900, ["Запас хода до 318 mi", "Быстрая зарядка 800 В"], "https://www.hyundaiusa.com/us/en/vehicles/ioniq-5", "Hyundai IONIQ 5 Limited"),
  createProduct("car", "Автомобиль", "porsche-taycan", "Porsche Taycan 4S", "Porsche", "Спортивный электромобиль с точным управлением и премиальным салоном.", "⌁", "SPORT EV", 120000, ["Электропривод AWD", "800 В · адаптивная подвеска"], "https://www.porsche.com/usa/models/taycan/", "Porsche Taycan 4S"),
  createProduct("laptop", "Ноутбук", "macbook-pro-16", "MacBook Pro 16″ · Max", "Apple", "Профессиональная рабочая станция для видео, графики и разработки.", "▱", "PRO · MAX", 3999, ["16″ Liquid Retina XDR", "M4 Max · до 128 ГБ"], "https://www.apple.com/macbook-pro/", "Apple MacBook Pro 16 M4 Max"),
  createProduct("laptop", "Ноутбук", "dell-xps-16", "Dell XPS 16 · OLED", "Dell", "Премиальный ноутбук с OLED-экраном и графикой для сложных задач.", "▱", "CREATOR", 2799, ["16.3″ OLED · 4K+", "Intel Core Ultra · RTX"], "https://www.dell.com/en-us/shop/dell-laptops/xps-16-laptop/spd/xps-16-9640-laptop", "Dell XPS 16 OLED RTX"),
  createProduct("laptop", "Ноутбук", "razer-blade-16", "Razer Blade 16 · RTX 5090", "Razer", "Мощный игровой ноутбук с быстрым дисплеем и видеокартой RTX.", "▱", "RTX 5090", 4499, ["16″ OLED · 240 Гц", "RTX 5090 · 64 ГБ RAM"], "https://www.razer.com/gaming-laptops/razer-blade-16", "Razer Blade 16 RTX 5090"),
  createProduct("gaming", "Игровая техника", "xbox-series-x", "Xbox Series X · 2 ТБ", "Microsoft", "Консоль для игр в 4K с быстрым запуском и большой библиотекой.", "🎮", "2 ТБ SSD", 599, ["4K · до 120 FPS", "Quick Resume · HDR"], "https://www.xbox.com/en-US/consoles/xbox-series-x", "Xbox Series X 2TB"),
  createProduct("gaming", "Игровая техника", "steam-deck-oled", "Steam Deck OLED · 1 ТБ", "Valve", "Портативная игровая система с насыщенным OLED-дисплеем.", "🎮", "PORTABLE", 649, ["7.4″ HDR OLED", "До 90 Гц · 1 ТБ"], "https://store.steampowered.com/steamdeck", "Steam Deck OLED 1TB"),
  createProduct("gaming", "Игровая техника", "rog-ally-x", "ASUS ROG Ally X · 1 ТБ", "ASUS", "Портативный Windows-ПК для игр в дороге и дома.", "🎮", "WINDOWS", 799, ["7″ Full HD · 120 Гц", "Ryzen Z1 Extreme · 1 ТБ"], "https://rog.asus.com/gaming-handhelds/rog-ally/rog-ally-x-2024/", "ASUS ROG Ally X 1TB"),
  createProduct("audio", "Аудио", "airpods-max-usb-c", "AirPods Max · USB‑C", "Apple", "Премиальные наушники с пространственным аудио и активным шумоподавлением.", "🎧", "SPATIAL AUDIO", 549, ["Активное шумоподавление", "До 20 ч · USB-C"], "https://www.apple.com/airpods-max/", "Apple AirPods Max USB-C"),
  createProduct("audio", "Аудио", "bowers-wilkins-px8", "Px8 · McLaren Edition", "Bowers & Wilkins", "Флагманские беспроводные наушники с отделкой McLaren.", "🎧", "LIMITED", 799, ["Карбоновые драйверы", "aptX Adaptive · кожа"], "https://www.bowerswilkins.com/en-us/product/headphones/px8/300708.html", "Bowers Wilkins Px8 McLaren Edition"),
  createProduct("audio", "Аудио", "sonos-ace", "Sonos Ace", "Sonos", "Комфортные наушники с пространственным звуком и мощным ANC.", "🎧", "IMMERSIVE", 449, ["Lossless · Spatial Audio", "До 30 ч · ANC"], "https://www.sonos.com/en-us/shop/ace", "Sonos Ace headphones"),
  createProduct("wearable", "Часы", "apple-watch-ultra-2", "Apple Watch Ultra 2 · Titanium", "Apple", "Прочные смарт-часы для спорта, дайвинга и навигации.", "⌚", "TITANIUM", 799, ["49 мм · сапфировое стекло", "GPS · дайвинг до 100 м"], "https://www.apple.com/apple-watch-ultra-2/", "Apple Watch Ultra 2 titanium"),
  createProduct("wearable", "Часы", "garmin-marq-athlete", "MARQ Athlete Gen 2 · Carbon", "Garmin", "Премиальные спортивные часы из титана с расширенной аналитикой тренировок.", "⌚", "CARBON EDITION", 2500, ["Корпус Grade-5 Titanium", "AMOLED · GPS multi-band"], "https://www.garmin.com/en-US/p/783461/", "Garmin MARQ Athlete Gen 2 Carbon"),
  createProduct("wearable", "Часы", "garmin-tactix-8", "tactix 8 AMOLED · 51 мм", "Garmin", "Тактические часы премиум-класса с авиационными и outdoor-функциями.", "⌚", "TACTICAL", 1599, ["AMOLED · сапфировое стекло", "Титан · GPS multi-band"], "https://www.garmin.com/en-US/p/1488975/", "Garmin tactix 8 AMOLED 51mm"),
  createProduct("wearable", "Часы", "tag-heuer-connected-e5", "Connected Calibre E5 · 45 мм", "TAG Heuer", "Швейцарские умные часы в корпусе из титана с премиальной отделкой.", "⌚", "SWISS LUXURY", 2300, ["Титан · сапфировое стекло", "AMOLED · Wear OS"], "https://www.tagheuer.com/us/en/smartwatches/collection-connected.html", "TAG Heuer Connected Calibre E5 45mm"),
  createProduct("wearable", "Часы", "omega-seamaster-300m", "Seamaster Diver 300M · Ceramic", "OMEGA", "Профессиональные дайверские часы с керамическим безелем и автоматическим механизмом.", "⌚", "SWISS MADE", 6900, ["Керамика · 300 м", "Co-Axial Master Chronometer"], "https://www.omegawatches.com/en-us/watches/seamaster/diver-300-m/catalog", "Omega Seamaster Diver 300M ceramic"),
  createProduct("wearable", "Часы", "rolex-submariner-date", "Submariner Date · Oystersteel", "Rolex", "Культовые механические дайверские часы с датой и автоматическим механизмом.", "⌚", "ICONIC", 15000, ["Oystersteel · 300 м", "Автомат · калибр 3235"], "https://www.rolex.com/watches/submariner", "Rolex Submariner Date Oystersteel"),
  createProduct("wearable", "Часы", "hublot-big-bang-e-gen3", "Big Bang e Gen3 · Titanium", "Hublot", "Лимитированные умные часы в титановом корпусе с фирменным дизайном Big Bang.", "⌚", "LIMITED EDITION", 5800, ["Титан · сапфировое стекло", "AMOLED · Wear OS"], "https://www.hublot.com/en-us/watches/big-bang", "Hublot Big Bang e Gen3 titanium"),
  createProduct("wearable", "Часы", "cartier-santos-medium", "Santos de Cartier · Medium", "Cartier", "Премиальные механические часы с автоподзаводом и сменным браслетом.", "⌚", "MAISON CARTIER", 7700, ["Сталь · сапфировое стекло", "Автомат · водозащита 100 м"], "https://www.cartier.com/en-us/watches/collections/santos-de-cartier/", "Cartier Santos de Cartier medium automatic"),
  createProduct("camera", "Камера", "canon-eos-r5-ii", "EOS R5 Mark II · Body", "Canon", "Полнокадровая камера для динамичной фотографии и профессионального видео.", "📷", "45 MP · 8K", 4299, ["Full Frame · 45 Мп", "RAW 8K · IBIS"], "https://www.usa.canon.com/cameras/eos-r5-mark-ii", "Canon EOS R5 Mark II body"),
  createProduct("camera", "Камера", "nikon-z8", "Nikon Z8 · Body", "Nikon", "Компактная профессиональная камера для фото и видео высокого разрешения.", "📷", "PRO HYBRID", 3999, ["Full Frame · 45.7 Мп", "RAW 8K · 20 к/с"], "https://www.nikonusa.com/p/z-8/1695/overview", "Nikon Z8 body"),
  createProduct("camera", "Камера", "fujifilm-gfx100-ii", "GFX100 II · Medium Format", "Fujifilm", "Среднеформатная система для максимальной детализации и киноизображения.", "📷", "102 MP", 7499, ["Средний формат · 102 Мп", "Видео 8K · IBIS"], "https://fujifilm-x.com/global/products/cameras/gfx100-ii/", "Fujifilm GFX100 II camera"),
  createProduct("home", "Умный дом", "nest-learning-thermostat", "Nest Learning Thermostat · 4th Gen", "Google Nest", "Самообучающийся термостат с датчиком температуры и умным управлением.", "⌂", "SMART CLIMATE", 279, ["Автообучение · Matter", "Wi-Fi · приложение Google Home"], "https://store.google.com/product/nest_learning_thermostat_4th_gen", "Google Nest Learning Thermostat 4th gen"),
  createProduct("home", "Умный дом", "ring-alarm-pro", "Alarm Pro · 14-Piece Kit", "Ring", "Комплексная система безопасности дома с базовой станцией и резервным интернетом.", "⌂", "SECURITY", 379, ["14 датчиков и устройств", "Wi-Fi 6 · резервное питание"], "https://ring.com/products/alarm-pro", "Ring Alarm Pro 14 piece kit"),
  createProduct("home", "Умный дом", "ecobee-smart-premium", "Smart Thermostat Premium", "ecobee", "Термостат с датчиком воздуха и интеллектуальным управлением климатом.", "⌂", "AIR QUALITY", 249, ["SmartSensor · монитор CO₂", "Siri / Alexa · Wi-Fi"], "https://www.ecobee.com/en-us/smart-thermostats/smart-thermostat-premium/", "ecobee Smart Thermostat Premium"),
);

products.forEach((product) => {
  product.specs ||= categorySpecs[product.category];
  if (product.category === "wearable") product.categoryName = "Часы";
});

const storageKey = "technova-product-comparison-v3";
const cartStorageKey = "technova-shopping-cart-v1";
const productGrid = document.querySelector("#product-grid");
const comparisonGrid = document.querySelector("#comparison-grid");
const compareEmpty = document.querySelector("#compare-empty");
const compareCount = document.querySelector("#compare-count");
const toast = document.querySelector("#toast");
const cartTrigger = document.querySelector("#cart-trigger");
const cartCount = document.querySelector("#cart-count");
const searchForm = document.querySelector("#search-form");
const queryInput = document.querySelector("#model-query");
const categorySelect = document.querySelector("#category-select");
const budgetInput = document.querySelector("#budget-input");
let activeFilter = document.body.dataset.filter || "all";
let toastTimer;

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value % 1 ? 2 : 0,
  }).format(value);
}

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((item) =>
      item &&
      products.some((product) => product.id === item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0 &&
      item.quantity <= 999,
    );
  } catch {
    return [];
  }
}

let cart = readCart();

function saveCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

function createCartDrawer() {
  const backdrop = document.createElement("div");
  backdrop.className = "cart-backdrop is-hidden";
  backdrop.id = "cart-backdrop";
  backdrop.innerHTML = `
    <aside class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <div class="cart-heading">
        <div><span class="eyebrow">ТВОЙ ВЫБОР</span><h2 id="cart-title">Корзина <span id="cart-total-count">0</span></h2></div>
        <button class="cart-close" type="button" aria-label="Закрыть корзину">×</button>
      </div>
      <div class="cart-items" id="cart-items"></div>
      <div class="cart-empty" id="cart-empty"><span aria-hidden="true">✦</span><strong>Корзина пока пуста</strong><p>Добавь товары, чтобы собрать свой набор.</p></div>
      <div class="cart-summary"><span>Итого, ориентировочно</span><strong id="cart-total">$0</strong><small>Без учёта налогов и доставки.</small></div>
      <button class="cart-continue" type="button">Продолжить покупки</button>
    </aside>`;
  document.body.append(backdrop);
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop || event.target.closest(".cart-close,.cart-continue")) closeCart();
  });
  backdrop.querySelector("#cart-items").addEventListener("click", (event) => {
    const button = event.target.closest("[data-cart-action]");
    if (!button) return;
    const item = cart.find((entry) => entry.id === button.dataset.productId);
    if (!item) return;
    if (button.dataset.cartAction === "remove") {
      cart = cart.filter((entry) => entry.id !== item.id);
    } else {
      item.quantity += button.dataset.cartAction === "increase" ? 1 : -1;
      if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== item.id);
    }
    saveCart();
    renderCart();
  });
  return backdrop;
}

const cartBackdrop = createCartDrawer();

function openCart() {
  renderCart();
  cartBackdrop.classList.remove("is-hidden");
  document.body.classList.add("cart-open");
  cartBackdrop.querySelector(".cart-close").focus();
}

function closeCart() {
  cartBackdrop.classList.add("is-hidden");
  document.body.classList.remove("cart-open");
  cartTrigger.focus();
}

function renderCart() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
  cartCount.textContent = totalQuantity;
  cartCount.setAttribute("aria-label", `${totalQuantity} товаров`);
  cartBackdrop.querySelector("#cart-total-count").textContent = totalQuantity;
  cartBackdrop.querySelector("#cart-total").textContent = formatPrice(totalPrice);
  cartBackdrop.querySelector("#cart-empty").classList.toggle("is-hidden", cart.length > 0);
  const items = cartBackdrop.querySelector("#cart-items");
  items.replaceChildren();

  cart.forEach((item) => {
    const product = products.find((entry) => entry.id === item.id);
    if (!product) return;
    const row = document.createElement("article");
    row.className = "cart-item";
    const icon = createProductIcon(product.category, "cart-item-icon");
    const info = document.createElement("div");
    info.className = "cart-item-info";
    const title = document.createElement("strong");
    title.textContent = product.title;
    const price = document.createElement("span");
    price.textContent = `${formatPrice(product.price)} за шт.`;
    info.append(title, price);
    const controls = document.createElement("div");
    controls.className = "cart-item-controls";
    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.dataset.cartAction = "decrease";
    decrease.dataset.productId = product.id;
    decrease.setAttribute("aria-label", `Уменьшить количество: ${product.title}`);
    decrease.textContent = "−";
    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;
    const increase = document.createElement("button");
    increase.type = "button";
    increase.dataset.cartAction = "increase";
    increase.dataset.productId = product.id;
    increase.setAttribute("aria-label", `Увеличить количество: ${product.title}`);
    increase.textContent = "+";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "cart-item-remove";
    remove.dataset.cartAction = "remove";
    remove.dataset.productId = product.id;
    remove.setAttribute("aria-label", `Удалить ${product.title} из корзины`);
    remove.textContent = "Удалить";
    controls.append(decrease, quantity, increase);
    row.append(icon, info, controls, remove);
    items.append(row);
  });
}

function readComparison() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.title === "string" &&
        (item.price === "" || (typeof item.price === "number" && Number.isFinite(item.price))),
    ).slice(0, 3);
  } catch {
    return [];
  }
}

let comparison = readComparison();

function saveComparison() {
  localStorage.setItem(storageKey, JSON.stringify(comparison));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("is-hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("is-hidden"), 3200);
}

function shoppingUrl(query, category = "all", budget = "") {
  const categorySearch = {
    phone: "smartphone cell phone",
    tablet: "tablet",
    car: "car vehicle",
    laptop: "laptop computer",
    gaming: "gaming console PC",
    audio: "headphones speakers",
    wearable: "smartwatch fitness tracker",
    camera: "camera photography",
    home: "smart home",
    all: "",
  }[category];
  const terms = [query, categorySearch, budget ? `under $${budget}` : "", "USA price"]
    .filter(Boolean)
    .join(" ");
  return `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(terms)}`;
}

function renderProducts() {
  productGrid.replaceChildren();
  const visibleProducts = products.filter(
    (product) => activeFilter === "all" || product.category === activeFilter,
  );
  visibleProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const photo = document.createElement("div");
    photo.className = `product-photo has-fallback ${product.category}`;
    photo.append(createProductIcon(product.category));

    const meta = document.createElement("div");
    meta.className = "product-meta";
    const brand = document.createElement("span");
    brand.textContent = product.brand;
    const badge = document.createElement("span");
    badge.className = "product-badge";
    badge.textContent = product.badge;
    meta.append(brand, badge);

    const title = document.createElement("h3");
    title.textContent = product.title;
    const price = document.createElement("div");
    price.className = "product-price";
    const priceLabel = document.createElement("span");
    priceLabel.textContent = `${product.priceType} · USD`;
    const priceValue = document.createElement("strong");
    priceValue.textContent = `от ${formatPrice(product.price)}`;
    price.append(priceLabel, priceValue);
    const description = document.createElement("p");
    description.textContent = product.description;
    const specs = document.createElement("ul");
    specs.className = "product-specs";
    product.specs.forEach((spec) => {
      const item = document.createElement("li");
      item.textContent = spec;
      specs.append(item);
    });

    const actions = document.createElement("div");
    actions.className = "product-actions";
    const addButton = document.createElement("button");
    addButton.className = "cart-add";
    addButton.type = "button";
    addButton.textContent = "В корзину";
    addButton.addEventListener("click", () => addToCart(product));

    const compareButton = document.createElement("button");
    compareButton.className = "compare-add";
    compareButton.type = "button";
    compareButton.textContent = comparison.some((item) => item.id === product.id)
      ? "Добавлено ✓"
      : "+ Сравнить";
    compareButton.disabled = comparison.some((item) => item.id === product.id);
    compareButton.addEventListener("click", () => addToComparison(product));

    const searchLink = document.createElement("a");
    searchLink.className = "product-source";
    searchLink.href = shoppingUrl(product.query, product.category, budgetInput?.value || "");
    searchLink.target = "_blank";
    searchLink.rel = "noopener noreferrer";
    searchLink.textContent = "Проверить цену у продавцов ↗";
    actions.append(addButton, compareButton);
    card.append(photo, meta, title, price, specs, description, actions, searchLink);
    productGrid.append(card);
  });
}

function addToCart(product) {
  const item = cart.find((entry) => entry.id === product.id);
  if (item && item.quantity >= 999) {
    showToast("Для одного товара можно добавить не больше 999 штук.");
    return;
  }
  if (item) item.quantity += 1;
  else cart.push({ id: product.id, quantity: 1 });
  saveCart();
  renderCart();
  showToast(`${product.title} добавлен в корзину.`);
}

function addToComparison(product) {
  if (comparison.some((item) => item.id === product.id)) return;
  if (comparison.length >= 3) {
    showToast("В сравнении можно сохранить не больше трёх вариантов.");
    return;
  }
  comparison.push({
    id: product.id,
    title: product.title,
    category: product.categoryName,
    query: product.query,
    price: product.price,
  });
  saveComparison();
  renderComparison();
  renderProducts();
  showToast(`${product.title} добавлен в сравнение.`);
}

function renderComparison() {
  comparisonGrid.replaceChildren();
  compareEmpty.classList.toggle("is-hidden", comparison.length > 0);
  compareCount.textContent = `${comparison.length} / 3`;

  comparison.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "comparison-card";
    const category = document.createElement("div");
    category.className = "comparison-category";
    category.textContent = item.category;
    const title = document.createElement("h3");
    title.textContent = item.title;
    const removeButton = document.createElement("button");
    removeButton.className = "remove-compare";
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `Убрать ${item.title} из сравнения`);
    removeButton.textContent = "×";
    removeButton.addEventListener("click", () => {
      comparison.splice(index, 1);
      saveComparison();
      renderComparison();
      renderProducts();
    });

    const priceLabel = document.createElement("label");
    priceLabel.className = "compare-price-label";
    priceLabel.htmlFor = `compare-price-${index}`;
    priceLabel.textContent = "Цена в USD · можно изменить";
    const priceInput = document.createElement("input");
    priceInput.className = "compare-price-input";
    priceInput.id = `compare-price-${index}`;
    priceInput.type = "number";
    priceInput.min = "0";
    priceInput.step = "1";
    priceInput.inputMode = "decimal";
    priceInput.placeholder = "Введи цену вручную";
    priceInput.value = item.price;
    priceInput.addEventListener("input", () => {
      const value = priceInput.value;
      comparison[index].price = value === "" ? "" : Number(value);
      saveComparison();
      renderBestPrice();
    });

    const searchLink = document.createElement("a");
    searchLink.className = "compare-search-link";
    searchLink.href = shoppingUrl(item.query, "all", budgetInput?.value || "");
    searchLink.target = "_blank";
    searchLink.rel = "noopener noreferrer";
    searchLink.textContent = "Найти предложения ↗";

    card.append(category, title, removeButton, priceLabel, priceInput, searchLink);
    comparisonGrid.append(card);
  });
  renderBestPrice();
}

function renderBestPrice() {
  comparisonGrid.querySelector(".best-price")?.remove();
  const withPrices = comparison.filter((item) => typeof item.price === "number" && item.price > 0);
  if (withPrices.length < 2) return;
  const cheapest = withPrices.reduce((best, item) => item.price < best.price ? item : best);
  const note = document.createElement("div");
  note.className = "best-price";
  note.textContent = `По введённым ценам дешевле всего: ${cheapest.title} — ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(cheapest.price)}. Сравни одинаковые комплектации.`;
  comparisonGrid.append(note);
}

document.querySelectorAll(".category-tab").forEach((button) => {
  const selected = button.dataset.filter === activeFilter;
  button.classList.toggle("is-active", selected);
  button.setAttribute("aria-pressed", String(selected));
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".category-tab").forEach((tab) => {
      const selected = tab === button;
      tab.classList.toggle("is-active", selected);
      tab.setAttribute("aria-pressed", String(selected));
    });
    renderProducts();
  });
});

cartTrigger.addEventListener("click", openCart);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cartBackdrop.classList.contains("is-hidden")) closeCart();
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = queryInput.value.trim();
  if (!query) {
    queryInput.focus();
    return;
  }
  const budget = budgetInput.value;
  window.open(shoppingUrl(query, categorySelect.value, budget), "_blank", "noopener,noreferrer");
});

budgetInput?.addEventListener("input", renderProducts);

renderProducts();
renderComparison();
renderCart();
