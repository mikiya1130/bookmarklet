/**
 * GitHub のページを uithub.com に置き換えて開く
 */
javascript: (() => {
  try {
    var url = new URL(window.location.href);
    if (url.hostname === 'github.com' || url.hostname === 'www.github.com') {
      url.hostname = 'uithub.com';
      window.location.href = url.toString();
    }
  }
  catch (e) {
    alert('GitHub to uithub redirect error:', e);
  }
})();
