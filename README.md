# 🐕 台灣犬圖鑑

用繁體中文介紹台灣犬（Taiwan Dog／福爾摩沙犬）的主題網站。

🔗 **線上瀏覽：https://yun1011.github.io/taiwan-dog/**

## 這個專案的重點

這不只是做出一個網頁，而是建立一套**可以讓 AI 照著繼續做下去的規則**：

- [`CLAUDE.md`](./CLAUDE.md)：完整的 AI 專案規則（目的、風格、結構、命名、內容格式、禁止事項）
- [`AGENTS.md`](./AGENTS.md)：給其他 AI 工具的入口，指向 CLAUDE.md
- [`templates/page-template.html`](./templates/page-template.html)：新頁面的模板

## 目前的頁面

| 頁面 | 內容 |
|---|---|
| 首頁 | 網站介紹與主題卡片 |
| 歷史與起源 | 原住民獵犬、瀕臨消失、FCI 認證歷程 |
| 外型特徵 | 體型、三角頭、立耳、鐮刀尾、舌斑、毛色 |
| 個性與能力 | 忠誠警覺、跳躍能力、獨特狩獵方式 |
| 飼養與照顧 | 運動、社會化、訓練、壽命 |

## 怎麼新增一頁？

對 AI 說：「請依照 CLAUDE.md，新增一頁介紹 XXX」。
AI 會複製模板、填入內容，並在 `assets/js/site.js` 的 `PAGES` 登記，導覽列與首頁卡片會自動更新。

## 技術

純 HTML + CSS + 原生 JavaScript，部署於 GitHub Pages。
