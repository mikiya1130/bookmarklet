/**
 * そのページのタイトルとリンクを a タグ形式でクリップボードにコピーする
 */
javascrit: (() => {
  var href = location.href;
  var title = document.title;
  var a = `<a href="${href}">${title}</a>`;

  navigator.clipboard
    .write([
      new ClipboardItem({
        "text/html": new Blob([a], { type: "text/html" }),
        "text/plain": new Blob([a], { type: "text/plain" }),
      }),
    ])
    .then(
      () => {
        alert("success");
      },
      () => {
        alert("error");
      }
    );
})();
