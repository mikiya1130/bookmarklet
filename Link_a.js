/**
 * そのページのタイトルとリンクを a タグ形式でクリップボードにコピーする
 */
javascrit: (() => {
  var href = location.href;
  var title = document.title;

  // タイトルの先頭から "<数字>. " パターンを削除
  title = title.replace(/^\d+\.\s+/, '');
  // さらにその後の "(<数字>) " パターンを削除
  title = title.replace(/^\(\d+\)\s+/, '');

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
