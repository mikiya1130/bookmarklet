/**
 * GitHub リポジトリページから compare/prd...dev ページへ遷移する
 */
javascript: (() => {
  // 現在のURLを解析
  const url = window.location.href;
  const match = url.match(/^https:\/\/github\.com\/([^\/]+)\/([^\/]+)/);
  
  // GitHubリポジトリページでない場合は何もしない
  if (!match) {
    return;
  }
  
  // owner/repo を取得
  const owner = match[1];
  const repo = match[2];
  
  // compare ページへ遷移
  window.location.href = `https://github.com/${owner}/${repo}/compare/prd...dev`;
})();