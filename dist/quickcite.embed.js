const quickCite = (() => {
  const title = document.getElementsByTagName('title')[0].innerHTML;
  const url = document.location.href;
  const citeText = title + "\n* " + url;
  const citation = document.createElement('pre');
  citation.innerText = citeText;
  citation.style.display = 'block';
  citation.style.position = 'relative';
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
  citation.addEventListener('click', () => citation.select());
  const copy = document.createElement('a');
  copy.innerHTML = 'Copy citation';
  copy.style.display = 'inline-block';
  copy.style.color = '#000';
  copy.style.fontSize = '16px';
  copy.style.textDecoration = 'underline';
  copy.addEventListener('click', () => {
    citation.select();
    document.execCommand('copy');
  });
  const container = document.createElement('div');
  container.appendChild(citation);
  container.appendChild(copy);
  return container;
})();
const script = document.currentScript;
const container = script.parentElement;
container.replaceChild(quickCite, script);