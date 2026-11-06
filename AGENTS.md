# AGENTS.md

本專案的完整 AI 規則寫在 **[CLAUDE.md](./CLAUDE.md)**，請先閱讀它。

為了讓不同 AI 工具（Codex、Cursor、Gemini CLI、Claude Code）都讀到同一套規則，
這裡只放最精簡的摘要；若與 CLAUDE.md 有出入，**以 CLAUDE.md 為準**。

## 30 秒摘要

- 專案：繁體中文的「台灣犬」主題介紹網站，部署在 GitHub Pages
- 技術：純 HTML / CSS / 原生 JS，不用框架、不用建置工具
- 新增主題頁：
  1. 複製 `templates/page-template.html` 到 `pages/<slug>.html`
  2. 設定 `<body data-slug="<slug>">` 與 `<title>標題｜台灣犬圖鑑</title>`
  3. 在 `assets/js/site.js` 的 `PAGES` 陣列登記一筆
- 每頁必須有：`page-hero`、至少一個 `fact-box`、最後的 `sources` 參考資料
- 所有事實都要附來源；不用網路照片；不在頁面內寫 `<style>`
