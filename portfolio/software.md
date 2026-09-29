# Software

個人で開発しているソフトウェア

<div class="software-list">

<a class="software" href="https://github.com/hayatedayon/hayate-reader">
  <img class="light-only" src="/software/hayate-reader.svg" alt="Hayate Reader">
  <img class="dark-only" src="/software/hayate-reader-dark.svg" alt="Hayate Reader">
  <span class="summary">日本語の縦書きを、<wbr>きれいに、<wbr>軽快に読める <wbr>EPUB・コミック・<wbr>青空文庫リーダー</span>
  <span class="meta">Rust・Tauri ／ Windows・macOS・Linux</span>
</a>

<a class="software" href="https://github.com/hayatedayon/hayate-library">
  <img class="light-only" src="/software/hayate-library.svg" alt="Hayate Library">
  <img class="dark-only" src="/software/hayate-library-dark.svg" alt="Hayate Library">
  <span class="summary">電子書籍のライブラリを、<wbr>速く探せる本棚に</span>
  <span class="meta">Rust・Slint ／ Windows・macOS・Linux</span>
</a>

</div>

<style>
.software-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.vp-doc a.software {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: border-color 0.2s;
}

.vp-doc a.software:hover {
  border-color: var(--vp-c-brand-1);
}

.software img {
  height: 48px;
  max-width: 100%;
  margin-bottom: 10px;
  align-self: flex-start;
}

.software .summary {
  font-size: 15px;
  line-height: 1.6;
  /* 文の区切り (<wbr>) で折り返す。収まらないときだけ、どこででも折り返す */
  word-break: keep-all;
  overflow-wrap: anywhere;
}

.software .meta {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.dark .software .light-only,
html:not(.dark) .software .dark-only {
  display: none;
}
</style>
