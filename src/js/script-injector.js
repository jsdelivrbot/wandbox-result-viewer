function injectScripts() {
  let script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/google/code-prettify/loader/run_prettify.js?skin=desert";
  document.body.appendChild(script);
}