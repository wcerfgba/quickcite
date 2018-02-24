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
document.body.appendChild(quickCite);
