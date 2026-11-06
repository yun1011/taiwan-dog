/* =========================================================
   台灣犬圖鑑 — 全站共用腳本
   新增主題頁時：只要在下面的 PAGES 陣列加一筆即可。
   陣列順序 = 導覽列順序 = 首頁卡片順序 = 上下頁順序
   ========================================================= */

const PAGES = [
  { slug: "history",     title: "歷史與起源", emoji: "📜", summary: "從原住民的獵犬夥伴，到 2015 年獲得國際正式認可。" },
  { slug: "appearance",  title: "外型特徵",   emoji: "🐕", summary: "三角頭、杏仁眼、立耳、鐮刀尾，還有出名的舌斑。" },
  { slug: "temperament", title: "個性與能力", emoji: "⛰️", summary: "忠誠、警覺、靈活，是天生的山林獵手與守衛。" },
  { slug: "care",        title: "飼養與照顧", emoji: "🏡", summary: "想養台灣犬之前，先了解運動、社會化與日常照顧。" },
];

const SITE_NAME = "台灣犬圖鑑";

const DOG_MARK = `<svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true" fill="currentColor">
  <path d="M14 8l8 14h20l8-14 3 22c3 4 4 9 3 14-2 10-11 16-24 16S9 54 7 44c-1-5 0-10 3-14L14 8z"/>
  <circle cx="24" cy="36" r="3" fill="var(--paper)"/><circle cx="40" cy="36" r="3" fill="var(--paper)"/>
  <path d="M27 46h10l-5 5z" fill="var(--paper)"/></svg>`;

(function () {
  const body = document.body;
  const root = body.dataset.root || "./";
  const current = body.dataset.slug || "home";
  const href = (slug) => `${root}pages/${slug}.html`;

  // 導覽列
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="inner">
      <a class="brand" href="${root}index.html">${DOG_MARK}<span>${SITE_NAME}</span></a>
      <nav class="site-nav" aria-label="主要導覽"><ul>
        ${PAGES.map(p => `<li><a href="${href(p.slug)}"${p.slug === current ? ' aria-current="page"' : ""}>${p.title}</a></li>`).join("")}
      </ul></nav>
    </div>`;
  body.prepend(header);

  // 首頁卡片
  const cards = document.getElementById("page-cards");
  if (cards) {
    cards.innerHTML = PAGES.map(p => `
      <li class="page-card"><a href="${href(p.slug)}">
        <span class="emoji" aria-hidden="true">${p.emoji}</span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <span class="more">閱讀 →</span>
      </a></li>`).join("");
  }

  // 上一頁／下一頁
  const pager = document.getElementById("pager");
  const i = PAGES.findIndex(p => p.slug === current);
  if (pager && i !== -1) {
    const prev = PAGES[i - 1], next = PAGES[i + 1];
    pager.innerHTML =
      (prev ? `<a class="prev" href="${href(prev.slug)}"><small>← 上一頁</small>${prev.title}</a>` : "") +
      (next ? `<a class="next" href="${href(next.slug)}"><small>下一頁 →</small>${next.title}</a>`
            : `<a class="next" href="${root}index.html"><small>讀完了</small>回首頁</a>`);
  }

  // 頁尾
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `${SITE_NAME}・課堂作業專案・內容整理自公開資料，詳見各頁參考資料`;
  body.append(footer);
})();
