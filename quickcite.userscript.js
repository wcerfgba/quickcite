// ==UserScript==
// @name QuickCite
// @description Copy title and URL
// @version 0.2
// @author John Preston (wcerfgba)
// @license MIT
// @include *
// @run-at document-end
// @grant none
// ==/UserScript==

const quickCite = () => {
  const title = (() => {
    const titleTag = document.getElementsByTagName('title')[0];
    if (titleTag === undefined) return document.location.href;
    return titleTag.innerHTML;
  })();
  const url = document.location.href;
  const citeText = title + "\n" + url;
  const citation = document.createElement('pre');
  citation.innerText = citeText;
  document.body.insertBefore(citation, document.body.firstChild);
  const range = document.createRange();
  range.selectNodeContents(citation);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  document.execCommand('copy');
  document.body.removeChild(citation);
};
const button = document.createElement('a');
button.innerHTML = '📋';
button.style.display = 'block';
button.style.position = 'fixed';
button.style.left = '8px';
button.style.bottom = '8px';
button.style.color = '#fff';
button.style.backgroundColor = '#5ad';
button.style.fontSize = '24px';
button.style.lineHeight = '32px';
button.style.width = '32px';
button.style.height = '32px';
button.style.textDecoration = 'none';
button.style.textAlign = 'center';
button.style.borderRadius = '100%';
button.style.cursor = 'pointer';
button.style.zIndex = '2147483647';
button.addEventListener('click', quickCite);
document.body.insertBefore(button, document.body.firstChild);
