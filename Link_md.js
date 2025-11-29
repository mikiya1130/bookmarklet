/**
 * そのページのタイトルとリンクを Markdown 形式でクリップボードにコピーする
 */
javascript: (() => {
  var href = location.href;
  var title = document.title;

  // タイトルの先頭から "<数字>. " パターンを削除
  title = title.replace(/^\d+\.\s+/, '');
  // さらにその後の "(<数字>) " パターンを削除
  title = title.replace(/^\(\d+\)\s+/, '');

  var text = "[" + title + "](" + href + ")";

  navigator.clipboard
    .write([
      new window.ClipboardItem({
        "text/plain": new Blob([text], { type: "text/plain" }),
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
