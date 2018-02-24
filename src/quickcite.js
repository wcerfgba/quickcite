const quickCite = (() => {
  const title = (() => {
    const titleTag = document.getElementsByTagName('title')[0];
    if (titleTag === undefined) return document.location.href;
    return titleTag.innerHTML;
  })();
  const url = document.location.href;
  const citeText = title + "\n* " + url;
  const citation = document.createElement('pre');
  citation.innerText = citeText;
  citation.style.display = 'block';
  citation.style.position = 'relative';
  citation.style.margin = '0 0 16px 0';
  citation.style.width = 'auto';
  citation.style.background = '#fff';
  citation.style.color = '#000';
  citation.style.fontSize = '16px';
  citation.select = () => {
    const range = document.createRange();
    range.selectNodeContents(citation);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };
  citation.addEventListener('click', citation.select);
  const copy = document.createElement('a');
  copy.innerHTML = 'Copy';
  copy.style.display = 'inline-block';
  copy.style.color = '#000';
  copy.style.fontSize = '14px';
  copy.style.textDecoration = 'underline';
  copy.style.cursor = 'pointer';
  copy.addEventListener('click', () => {
    citation.select();
    document.execCommand('copy');
  });
  const container = document.createElement('div');
  container.appendChild(citation);
  container.appendChild(copy);
  return container;
})();