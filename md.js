/**
 * そのページのタイトルとリンクを Markdown 形式でクリップボードにコピーする
 */
javascript: (() => {
  var href = location.href;
  var title = document.title;
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
