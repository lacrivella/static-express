const search = new URLSearchParams(window.location.search);
const name = search.get('name');

const root = document.getElementById('root');
const colorInfo = document.createElement('h2');
const h3 = document.createElement('h3');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    h3.textContent = `${color.name} - ${color.hex} - ${color.r} - ${color.g} - ${color.b}`;
  });
  
colorInfo.appendChild(h3);
root.appendChild(colorInfo);
