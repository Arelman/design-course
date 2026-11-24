/* Графика сайта курса: всё нарисовано в SVG, без фотографий.
   ART — обложки модулей (viewBox 800×500; главное лежит в полосе y 100–400, её видно и на широкой обложке),
   SHAPE — фигуры модулей для композиции на главной, MOCK — учебные макеты «до / после» и форматы соцсетей. */
(function () {
  const D = 'class="sv-d"', T = 'class="sv-t"', M = 'class="sv-m"';
  const wrap = (vb, inner, keep) => `<svg viewBox="${vb}" preserveAspectRatio="${keep ? 'xMidYMid meet' : 'xMidYMid slice'}" aria-hidden="true" focusable="false">${inner}</svg>`;
  const bars = (x, y, ws, h, gap, fill, op) => ws.map((w, i) => `<rect x="${x}" y="${y + i * gap}" width="${w}" height="${h}" fill="${fill}"${op ? ` opacity="${op}"` : ''}/>`).join('');
  const spark = (x, y, r, fill) => { const k = r * .16; return `<path d="M${x},${y - r} C${x + k},${y - k} ${x + k},${y - k} ${x + r},${y} C${x + k},${y + k} ${x + k},${y + k} ${x},${y + r} C${x - k},${y + k} ${x - k},${y + k} ${x - r},${y} C${x - k},${y - k} ${x - k},${y - k} ${x},${y - r}Z" fill="${fill}"/>`; };
  const handles = (x, y, w, h, c) => [[x, y], [x + w / 2, y], [x + w, y], [x, y + h / 2], [x + w, y + h / 2], [x, y + h], [x + w / 2, y + h], [x + w, y + h]].map(([a, b]) => `<rect x="${a - 4}" y="${b - 4}" width="8" height="8" fill="#fff" stroke="${c}" stroke-width="1.5"/>`).join('');

  const ART = {
    /* 01 — глаз и визир: учимся видеть */
    m01: () => wrap('0 0 800 500', `
      <rect width="800" height="500" fill="#0C0C0D"/>
      <line x1="0" y1="250" x2="800" y2="250" stroke="#F2C84B" stroke-width="2"/>
      <line x1="400" y1="20" x2="400" y2="480" stroke="#F2C84B" stroke-width="2" opacity=".35"/>
      <circle cx="400" cy="250" r="205" fill="none" stroke="#F2C84B" stroke-width="2"/>
      <circle cx="400" cy="250" r="150" fill="#F2C84B"/>
      <circle cx="432" cy="236" r="62" fill="#0C0C0D"/>
      <circle cx="455" cy="214" r="14" fill="#FFFFFF"/>
      <rect x="115" y="245" width="10" height="10" fill="#FFFFFF"/><rect x="675" y="245" width="10" height="10" fill="#FFFFFF"/>`),

    /* 02 — рабочий стол Figma: слои, фрейм со слайдом, выделение */
    m02: () => wrap('0 0 800 500', `
      <rect width="800" height="500" fill="#E6E9F1"/>
      <rect width="150" height="500" fill="#FFFFFF"/><rect x="650" width="150" height="500" fill="#FFFFFF"/>
      <rect x="0" y="152" width="150" height="26" fill="#DCE5FF"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `<rect x="${i > 1 && i < 8 ? 34 : 18}" y="${74 + i * 30}" width="10" height="10" fill="${i === 3 ? '#2F5BEA' : '#B8BFD0'}"/><rect x="${i > 1 && i < 8 ? 50 : 34}" y="${76 + i * 30}" width="${[80, 66, 58, 74, 50, 62, 70, 44, 76, 60, 52][i]}" height="6" fill="${i === 3 ? '#2F5BEA' : '#C9CEDB'}"/>`).join('')}
      ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="668" y="${86 + i * 38}" width="${[46, 90, 70, 112, 58, 96, 40, 84][i]}" height="6" fill="#C9CEDB"/><rect x="668" y="${98 + i * 38}" width="114" height="14" fill="none" stroke="#DFE3EC"/>`).join('')}
      <text x="210" y="128" ${M} font-size="12" fill="#2F5BEA">Слайд · 1920×1080</text>
      <rect x="210" y="140" width="380" height="214" fill="#FFFFFF"/>
      <rect x="210" y="140" width="132" height="214" fill="#F2C84B"/>
      <circle cx="276" cy="247" r="38" fill="#0C0C0D"/>
      <text x="362" y="200" ${D} font-size="44" fill="#0C0C0D">ИТОГИ ГОДА</text>
      ${bars(363, 216, [180, 150], 7, 14, '#9AA1B2')}
      <rect x="363" y="268" width="200" height="58" fill="none" stroke="#FF6FA8" stroke-width="1.5" stroke-dasharray="5 4"/>
      <rect x="375" y="280" width="34" height="34" fill="#2F5BEA"/>${bars(421, 286, [110, 80], 6, 13, '#9AA1B2')}
      <rect x="208" y="138" width="384" height="218" fill="none" stroke="#2F5BEA" stroke-width="2"/>
      ${handles(208, 138, 384, 218, '#2F5BEA')}
      <rect x="520" y="362" width="72" height="20" fill="#2F5BEA"/><text x="556" y="376" ${M} font-size="11" fill="#fff" text-anchor="middle">384×218</text>
      <path d="M600 330 l0 34 l9 -9 l7 15 l6 -3 l-7 -14 l12 0 z" fill="#0C0C0D" stroke="#fff" stroke-width="1.5"/>`),

    /* 03 — супрематическая композиция с направляющими */
    m03: () => wrap('0 0 800 500', `
      <rect width="800" height="500" fill="#EFEFEA"/>
      <g stroke="#E32A1C" stroke-width="1" stroke-dasharray="4 6" opacity=".6">
        <line x1="200" y1="0" x2="200" y2="500"/><line x1="600" y1="0" x2="600" y2="500"/>
        <line x1="0" y1="150" x2="800" y2="150"/><line x1="0" y1="350" x2="800" y2="350"/></g>
      <circle cx="560" cy="185" r="78" fill="#E32A1C"/>
      <rect x="140" y="236" width="540" height="46" fill="#121212" transform="rotate(-14 410 259)"/>
      <rect x="200" y="300" width="62" height="62" fill="#121212" transform="rotate(8 231 331)"/>
      <rect x="470" y="336" width="130" height="14" fill="#E32A1C"/>
      <rect x="200" y="150" width="120" height="6" fill="#121212"/>
      <circle cx="600" cy="350" r="6" fill="#121212"/><circle cx="200" cy="150" r="6" fill="#121212"/>`),

    /* 04 — «Аа» и палитра */
    m04: () => wrap('0 0 800 500', `
      <rect width="800" height="500" fill="#FFF4EC"/>
      <text x="96" y="372" ${D} font-size="330" fill="#0C0C0D">Аа</text>
      ${['#D9410B', '#F2C84B', '#2F5BEA', '#0C0C0D', '#33B9C4'].map((c, i) => `<rect x="${478 + i * 50}" y="${118 + (i % 2) * 22}" width="44" height="236" fill="${c}"/>`).join('')}
      <text x="100" y="402" ${M} font-size="13" fill="#0C0C0D" letter-spacing="1.2">64 / 40 / 24 / 16 PX</text>
      <text x="478" y="402" ${M} font-size="13" fill="#0C0C0D" letter-spacing="1.2">ОСНОВНОЙ · АКЦЕНТ · ФОН</text>`),

    /* 05 — сценарий: вход → главное → действие */
    m05: () => wrap('0 0 800 500', `
      <rect width="800" height="500" fill="#0E2A2E"/>
      <defs><marker id="dd-ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#33B9C4"/></marker></defs>
      <g fill="none" stroke="#33B9C4" stroke-width="2.5">
        <path d="M220 250 C275 250 275 170 326 170" marker-end="url(#dd-ar5)"/>
        <path d="M220 250 C275 250 275 330 326 330" stroke-dasharray="6 6" opacity=".45" marker-end="url(#dd-ar5)"/>
        <path d="M470 170 C525 170 525 250 576 250" marker-end="url(#dd-ar5)"/>
        <rect x="80" y="200" width="140" height="100" rx="10"/><rect x="330" y="120" width="140" height="100" rx="10"/>
        <rect x="330" y="280" width="140" height="100" rx="10" opacity=".45"/></g>
      <rect x="580" y="200" width="140" height="100" rx="10" fill="#33B9C4"/>
      <text x="98" y="232" ${M} font-size="13" fill="#33B9C4">ВХОД</text>${bars(98, 250, [96, 70], 7, 16, '#33B9C4', .55)}
      <text x="348" y="152" ${M} font-size="13" fill="#33B9C4">ГЛАВНОЕ</text>${bars(348, 170, [100, 76], 7, 16, '#33B9C4', .55)}
      <text x="348" y="312" ${M} font-size="13" fill="#33B9C4" opacity=".5">ДЕТАЛИ</text>${bars(348, 330, [96, 64], 7, 16, '#33B9C4', .25)}
      <text x="598" y="232" ${M} font-size="13" fill="#0E2A2E">ДЕЙСТВИЕ</text><rect x="598" y="252" width="90" height="28" rx="4" fill="#0E2A2E"/>
      <path d="M672 268 l0 34 l9 -9 l7 15 l6 -3 l-7 -14 l12 0 z" fill="#FFFFFF" stroke="#0E2A2E" stroke-width="1.5"/>`),

    /* 06 — три формата соцсетей */
    m06: () => wrap('0 0 800 500', `
      <rect width="800" height="500" fill="#1A0A12"/>
      <rect x="80" y="190" width="210" height="210" fill="#FF6FA8"/>
      <text x="98" y="300" ${D} font-size="96" fill="#1A0A12">−30%</text>${bars(100, 330, [120, 90], 8, 16, '#1A0A12')}
      <rect x="320" y="138" width="210" height="262" fill="#FF6FA8"/>
      <circle cx="470" cy="200" r="42" fill="#FFD60A"/>
      <text x="338" y="326" ${D} font-size="38" fill="#1A0A12">КАК ВЫБРАТЬ</text><text x="338" y="364" ${D} font-size="38" fill="#1A0A12">ЗЁРНА</text>${bars(340, 380, [120], 6, 0, '#1A0A12', .7)}
      <rect x="560" y="100" width="169" height="300" fill="#FF6FA8"/>
      <text x="576" y="240" ${D} font-size="62" fill="#1A0A12">НОВОЕ</text><text x="576" y="296" ${D} font-size="62" fill="#1A0A12">МЕНЮ</text>
      <rect x="576" y="340" width="137" height="34" fill="#1A0A12"/><circle cx="700" cy="140" r="18" fill="#FFD60A"/>
      <text x="80" y="428" ${M} font-size="14" fill="#FF6FA8">1:1</text><text x="320" y="428" ${M} font-size="14" fill="#FF6FA8">4:5</text><text x="560" y="428" ${M} font-size="14" fill="#FF6FA8">9:16</text>`),

    /* 07 — сетка вариантов от нейросети и один выбранный человеком */
    m07: () => {
      const kinds = ['c', 's', 't', 'b', 'c', 't', 'b', 's', 'c', 'b', 's', 'c', 't', 's', 'b'];
      let tiles = '';
      kinds.forEach((k, n) => {
        const x = 97 + (n % 5) * 124, y = 71 + Math.floor(n / 5) * 124, cx = x + 55, cy = y + 55, c = n % 3 ? '#8D7CF0' : '#F3EBDD', op = n % 2 ? .55 : .8;
        tiles += `<rect x="${x}" y="${y}" width="110" height="110" fill="#3A2B85"/>`;
        if (k === 'c') tiles += `<circle cx="${cx}" cy="${cy}" r="28" fill="${c}" opacity="${op}"/>`;
        if (k === 's') tiles += `<rect x="${cx - 24}" y="${cy - 24}" width="48" height="48" fill="${c}" opacity="${op}" transform="rotate(${n * 9} ${cx} ${cy})"/>`;
        if (k === 't') tiles += `<polygon points="${cx},${cy - 30} ${cx + 30},${cy + 24} ${cx - 30},${cy + 24}" fill="${c}" opacity="${op}"/>`;
        if (k === 'b') tiles += `<rect x="${x + 18}" y="${y + 34}" width="74" height="10" fill="${c}" opacity="${op}"/><rect x="${x + 18}" y="${y + 52}" width="54" height="10" fill="${c}" opacity="${op}"/><rect x="${x + 18}" y="${y + 70}" width="64" height="10" fill="${c}" opacity="${op}"/>`;
      });
      return wrap('0 0 800 500', `<rect width="800" height="500" fill="#1A1142"/>${tiles}
        <rect x="343" y="193" width="114" height="114" fill="none" stroke="#B8F25B" stroke-width="5"/>
        <circle cx="457" cy="193" r="20" fill="#B8F25B"/><path d="M447 193 l7 7 l13 -14" fill="none" stroke="#1A1142" stroke-width="4"/>
        ${spark(80, 120, 22, '#B8F25B')}${spark(735, 380, 28, '#B8F25B')}${spark(720, 110, 12, '#F3EBDD')}`);
    },

    /* 08 — стопка слайдов итогового проекта и отметка «готово» */
    m08: () => wrap('0 0 800 500', `
      <rect width="800" height="500" fill="#EDEEE6"/>
      <rect x="230" y="128" width="340" height="212" fill="#0B6B2B" opacity=".35" transform="rotate(-9 400 234)"/>
      <rect x="230" y="128" width="340" height="212" fill="#FFD60A" transform="rotate(-4 400 234)"/>
      <g transform="rotate(2 400 240)">
        <rect x="230" y="134" width="340" height="212" fill="#FFFFFF" stroke="#0C0C0D" stroke-width="2"/>
        <text x="256" y="176" ${M} font-size="11" fill="#6E6E69" letter-spacing="1.2">ОТЧЁТ · 2026</text>
        <text x="254" y="228" ${D} font-size="56" fill="#0B6B2B">ИТОГИ</text>
        ${bars(256, 248, [120, 96], 7, 14, '#9C9C95')}
        <rect x="436" y="250" width="26" height="70" fill="#0B6B2B"/><rect x="472" y="220" width="26" height="100" fill="#0B6B2B"/><rect x="508" y="190" width="26" height="130" fill="#FFD60A"/>
        <rect x="436" y="320" width="98" height="2" fill="#0C0C0D"/></g>
      <circle cx="598" cy="132" r="46" fill="#0B6B2B"/><path d="M576 132 l15 15 l29 -31" fill="none" stroke="#FFFFFF" stroke-width="8"/>`)
  };

  /* фигуры модулей для композиции на главной */
  const SHAPE = {
    m01: () => wrap('0 0 100 100', `<circle cx="50" cy="50" r="49" fill="#F2C84B"/><circle cx="58" cy="46" r="19" fill="#0C0C0D"/><circle cx="64" cy="39" r="5" fill="#fff"/>`, 1),
    m02: () => wrap('0 0 100 100', `<rect x="6" y="6" width="88" height="88" fill="#2F5BEA"/><rect x="20" y="22" width="60" height="22" fill="#fff"/><rect x="20" y="52" width="40" height="8" fill="#FFD60A"/><rect x="20" y="66" width="50" height="8" fill="#fff" opacity=".6"/>${[[6, 6], [94, 6], [6, 94], [94, 94]].map(([a, b]) => `<rect x="${a - 5}" y="${b - 5}" width="10" height="10" fill="#fff" stroke="#2F5BEA" stroke-width="2"/>`).join('')}`, 1),
    m03: () => wrap('0 0 400 140', `<rect class="dk-ink" x="10" y="62" width="380" height="34" fill="#121212" transform="rotate(-11 200 79)"/><circle cx="318" cy="26" r="22" fill="#E32A1C"/>`, 1),
    m04: () => wrap('0 0 120 120', `<text x="2" y="108" class="sv-d" font-size="138" fill="#D9410B">Аа</text>`, 1),
    m05: () => wrap('0 0 100 100', `<polygon points="4,4 98,50 4,96" fill="#33B9C4"/><circle cx="34" cy="50" r="10" fill="#0E2A2E"/>`, 1),
    m06: () => wrap('0 0 80 100', `<rect width="80" height="100" fill="#FF6FA8"/><circle cx="54" cy="28" r="12" fill="#FFD60A"/><rect x="10" y="58" width="52" height="9" fill="#1A0A12"/><rect x="10" y="73" width="36" height="9" fill="#1A0A12"/>`, 1),
    m07: () => wrap('0 0 100 100', `<g class="dk-vi">${spark(46, 54, 44, '#2B1D6B')}</g>${spark(84, 16, 14, '#B8F25B')}`, 1),
    m08: () => wrap('0 0 100 100', `<polygon points="29.3,2 70.7,2 98,29.3 98,70.7 70.7,98 29.3,98 2,70.7 2,29.3" fill="#0B6B2B"/><circle cx="50" cy="50" r="17" fill="#FFD60A"/>`, 1)
  };

  /* учебные макеты для блоков «до / после» и форматов */
  const MOCK = {
    slideBad: () => wrap('0 0 640 360', `
      <defs><linearGradient id="dd-g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D9F4FF"/><stop offset="1" stop-color="#FFE0F0"/></linearGradient></defs>
      <rect width="640" height="360" fill="url(#dd-g1)"/>
      <polygon points="44,18 52,38 74,38 56,50 63,72 44,58 25,72 32,50 14,38 36,38" fill="#FDE047" stroke="#F97316" stroke-width="2"/>
      <rect x="556" y="18" width="66" height="30" fill="#22C55E"/><text x="589" y="38" font-family="Arial" font-size="13" fill="#fff" text-anchor="middle">ЛОГО</text>
      <text x="320" y="62" font-family="Times New Roman, serif" font-weight="700" font-size="25" fill="#D62828" text-anchor="middle">НАШИ РЕЗУЛЬТАТЫ ЗА 2026 ГОД!!!</text>
      <text x="320" y="90" font-family="Georgia, serif" font-style="italic" font-size="15" fill="#1D4ED8" text-anchor="middle">Мы очень много работали и вот что получилось</text>
      <text x="96" y="160" font-family="Verdana, sans-serif" font-size="20" fill="#7C3AED">1240 семей</text>
      <text x="400" y="146" font-family="Impact, sans-serif" font-size="30" fill="#F97316">86 волонтёров</text>
      <text x="262" y="214" font-family="Courier New, monospace" font-size="18" fill="#0EA5E9">12 городов</text>
      ${[[160, 248, 320], [200, 264, 240], [140, 280, 360], [230, 296, 180]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="7" fill="#94A3B8"/>`).join('')}
      <text x="320" y="338" font-family="Comic Sans MS, cursive" font-size="15" fill="#DB2777" text-anchor="middle">Спасибо всем!!!</text>`, 1),
    slideGood: () => wrap('0 0 640 360', `
      <rect width="640" height="360" fill="#FFFFFF"/>
      <text x="48" y="58" ${M} font-size="11" fill="#6E6E69" letter-spacing="1.5">ИТОГИ 2026</text>
      <text x="46" y="118" ${D} font-size="54" fill="#0C0C0D">ПОМОГЛИ 1 240 СЕМЬЯМ</text>
      <text x="48" y="148" ${T} font-size="15" fill="#6E6E69">За год вместе с волонтёрами в 12 городах</text>
      <rect x="48" y="186" width="544" height="2" fill="#0C0C0D"/>
      <rect x="48" y="206" width="132" height="62" fill="#F2C84B"/>
      <text x="56" y="258" ${D} font-size="58" fill="#0C0C0D">1 240</text><text x="236" y="258" ${D} font-size="58" fill="#0C0C0D">86</text><text x="424" y="258" ${D} font-size="58" fill="#0C0C0D">12</text>
      <text x="56" y="292" ${T} font-size="14" fill="#0C0C0D">семей</text><text x="236" y="292" ${T} font-size="14" fill="#0C0C0D">волонтёров</text><text x="424" y="292" ${T} font-size="14" fill="#0C0C0D">городов</text>
      <text x="48" y="334" ${M} font-size="10" fill="#6E6E69" letter-spacing="1.5">ФОНД «РЯДОМ»</text>`, 1),
    posterBad: () => wrap('0 0 360 480', `
      <defs><linearGradient id="dd-g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7DD3FC"/><stop offset="1" stop-color="#F0ABFC"/></linearGradient></defs>
      <rect width="360" height="480" fill="url(#dd-g2)"/>
      <circle cx="292" cy="300" r="40" fill="#FB923C"/>
      <text x="180" y="108" font-family="Comic Sans MS, cursive" font-weight="700" font-size="64" fill="#FACC15" stroke="#DC2626" stroke-width="2" text-anchor="middle">КИНО</text>
      <text x="180" y="152" font-family="Georgia, serif" font-style="italic" font-size="28" fill="#16A34A" text-anchor="middle">под открытым небом</text>
      <text x="180" y="226" font-family="Impact, sans-serif" font-size="40" fill="#FFFFFF" text-anchor="middle">14 июня</text>
      <text x="36" y="300" font-family="Courier New, monospace" font-size="17" fill="#9333EA">Вход свободный!!!</text>
      <text x="190" y="346" font-family="Times New Roman, serif" font-size="17" fill="#F472B6" text-anchor="middle">Городской парк, 21:00</text>
      <text x="180" y="386" font-family="Verdana, sans-serif" font-size="13" fill="#FDE047" text-anchor="middle">Возьмите с собой плед</text>
      <text x="180" y="444" font-family="Arial Black, sans-serif" font-size="24" fill="#2563EB" text-anchor="middle">ЖДЁМ ВСЕХ!</text>`, 1),
    posterGood: () => wrap('0 0 360 480', `
      <rect width="360" height="480" fill="#0C0C0D"/>
      <circle cx="250" cy="150" r="92" fill="#F2C84B"/>
      <text x="28" y="42" ${M} font-size="11" fill="#EFEFEA" letter-spacing="1.5">ЛЕТНИЙ КИНОКЛУБ</text>
      <text x="22" y="334" ${D} font-size="128" fill="#EFEFEA">КИНО</text>
      <text x="26" y="384" ${D} font-size="54" fill="#F2C84B">ПОД НЕБОМ</text>
      <rect x="28" y="404" width="304" height="2" fill="#EFEFEA"/>
      <text x="28" y="434" ${T} font-weight="600" font-size="16" fill="#EFEFEA">14 июня · 21:00</text>
      <text x="28" y="458" ${T} font-size="13" fill="#A3A39C">Городской парк · вход свободный</text>`, 1),
    mailBad: () => wrap('0 0 360 480', `
      <rect width="360" height="480" fill="#FFFFFF"/><rect width="360" height="50" fill="#E5E7EB"/>
      <text x="20" y="32" font-family="Arial" font-size="16" fill="#111827">Компания</text>
      <text x="20" y="74" font-family="Arial" font-size="12" fill="#374151">Здравствуйте! Хотим рассказать вам о том, что…</text>
      ${Array.from({ length: 13 }, (_, i) => `<rect x="20" y="${88 + i * 16}" width="${[318, 300, 320, 290, 312, 320, 296, 318, 304, 320, 288, 316, 260][i]}" height="6" fill="#9CA3AF"/>`).join('')}
      <rect x="20" y="314" width="98" height="32" fill="#EF4444"/><rect x="128" y="314" width="98" height="32" fill="#22C55E"/><rect x="236" y="314" width="104" height="32" fill="#3B82F6"/>
      <text x="69" y="335" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle">Купить</text><text x="177" y="335" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle">Подробнее</text><text x="288" y="335" font-family="Arial" font-size="11" fill="#fff" text-anchor="middle">Подписаться</text>
      ${Array.from({ length: 7 }, (_, i) => `<rect x="20" y="${364 + i * 16}" width="${[310, 320, 296, 318, 300, 314, 200][i]}" height="6" fill="#9CA3AF"/>`).join('')}`, 1),
    mailGood: () => wrap('0 0 360 480', `
      <rect width="360" height="480" fill="#FFFFFF"/>
      <text x="24" y="38" ${M} font-size="11" fill="#6E6E69" letter-spacing="1.5">КОМПАНИЯ</text>
      <rect x="24" y="56" width="312" height="118" fill="#33B9C4"/><circle cx="280" cy="115" r="38" fill="#0E2A2E"/>
      <text x="24" y="226" ${D} font-size="42" fill="#0C0C0D">СКИДКА 20 %</text><text x="24" y="264" ${D} font-size="42" fill="#0C0C0D">ДО ПЯТНИЦЫ</text>
      ${bars(24, 284, [290, 240], 7, 15, '#9C9C95')}
      <rect x="24" y="326" width="176" height="44" fill="#0C0C0D"/><text x="40" y="353" ${T} font-weight="600" font-size="15" fill="#FFFFFF">Выбрать курс →</text>
      <rect x="24" y="398" width="312" height="1.5" fill="#0C0C0D"/>
      <text x="24" y="424" ${M} font-size="10" fill="#6E6E69" letter-spacing="1.2">ЧТО</text><text x="134" y="424" ${M} font-size="10" fill="#6E6E69" letter-spacing="1.2">КОГДА</text><text x="244" y="424" ${M} font-size="10" fill="#6E6E69" letter-spacing="1.2">КАК</text>
      ${[24, 134, 244].map(x => bars(x, 438, [84, 60], 6, 13, '#C4C4BD')).join('')}`, 1),
    fmtSquare: () => wrap('0 0 300 300', `
      <rect width="300" height="300" fill="#FF6FA8"/><circle cx="250" cy="52" r="22" fill="#FFD60A"/>
      <text x="24" y="40" ${M} font-size="11" fill="#1A0A12" letter-spacing="1.2">КОФЕЙНЯ «ЗЕРНО»</text>
      <text x="18" y="196" ${D} font-size="122" fill="#1A0A12">−30%</text>
      <text x="24" y="232" ${T} font-weight="600" font-size="19" fill="#1A0A12">на всё до 12:00</text>
      <text x="24" y="276" ${M} font-size="10" fill="#1A0A12" letter-spacing="1.2">УЛ. САДОВАЯ, 5</text>`, 1),
    fmtPortrait: () => wrap('0 0 300 375', `
      <rect width="300" height="375" fill="#FF6FA8"/><circle cx="222" cy="118" r="58" fill="#FFD60A"/>
      <text x="24" y="40" ${M} font-size="11" fill="#1A0A12" letter-spacing="1.2">03 / 05</text>
      <text x="22" y="252" ${D} font-size="54" fill="#1A0A12">КАК ВЫБРАТЬ</text><text x="22" y="300" ${D} font-size="54" fill="#1A0A12">ЗЁРНА</text>
      ${bars(24, 322, [180, 140], 7, 14, '#1A0A12', .7)}
      <text x="276" y="358" ${D} font-size="34" fill="#1A0A12" text-anchor="end">→</text>`, 1),
    fmtStory: () => wrap('0 0 300 533', `
      <rect width="300" height="533" fill="#FF6FA8"/>
      <rect width="300" height="64" fill="#1A0A12" opacity=".14"/><rect y="453" width="300" height="80" fill="#1A0A12" opacity=".14"/>
      <text x="150" y="38" ${M} font-size="10" fill="#1A0A12" text-anchor="middle" letter-spacing="1.2">ЗОНА ИНТЕРФЕЙСА</text>
      <text x="150" y="498" ${M} font-size="10" fill="#1A0A12" text-anchor="middle" letter-spacing="1.2">ЗОНА ИНТЕРФЕЙСА</text>
      <circle cx="236" cy="128" r="30" fill="#FFD60A"/>
      <text x="22" y="252" ${D} font-size="80" fill="#1A0A12">НОВОЕ</text><text x="22" y="324" ${D} font-size="80" fill="#1A0A12">МЕНЮ</text>
      <rect x="24" y="378" width="252" height="48" fill="#1A0A12"/><text x="42" y="408" ${T} font-weight="600" font-size="16" fill="#FF6FA8">Смотреть →</text>`, 1),
    /* вопросник Кандинского в Баухаузе: жёлтый треугольник, красный квадрат, синий круг */
    bauhaus: () => wrap('0 0 100 100', `<rect width="100" height="100" fill="#EFEFEA"/><polygon points="30,14 54,56 6,56" fill="#F2C84B"/><rect x="52" y="22" width="34" height="34" fill="#E32A1C"/><circle cx="50" cy="74" r="18" fill="#2F5BEA"/><rect x="8" y="64" width="22" height="4" fill="#0C0C0D"/>`)
  };

  window.DD_ART = { ART, SHAPE, MOCK };
})();
