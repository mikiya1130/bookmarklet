/**
 * アドレスバーからクエリパラメータを削除する
 */
javascript: (() => {
  try {
    const url = new URL(window.location.href);
    url.search = '';
    history.replaceState(null, '', url);
  }
  catch (e) {
    console.error('Replace to Clean URL Error:', e);
  }
})();
