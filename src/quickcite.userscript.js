// ==UserScript==
// @name QuickCite
// @description Embed citation into page
// @version 0.1
// @author John Preston (wcerfgba)
// @license MIT
// @include *
// @run-at document-end
// @grant none
// ==/UserScript==

// #### quickcite.js ####
quickCite.style.position = 'relative';
quickCite.style.display = 'block';
quickCite.style.bottom = 0;
quickCite.style.left = 0;
quickCite.style.right = 0;
quickCite.style.padding = '16px';
quickCite.style.background = '#fff';
quickCite.style.border = '1px dotted #000';
const close = document.createElement('a');
close.innerHTML = '&#xd7;'
close.style.display = 'inline-block';
close.style.float = 'right';
close.style.color = '#000';
close.style.fontSize = '16px';
close.style.textDecoration = 'underline';
close.style.cursor = 'pointer';
close.addEventListener('click', () => {
  quickCite.parentElement.removeChild(quickCite);
});
quickCite.appendChild(close);
document.body.appendChild(quickCite);
