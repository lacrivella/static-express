const root = document.getElementById('root');
const p = document.createElement('p');

const search = new URLSearchParams(window.location.search);
const name = search.get('name');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    p.textContent = `${color.name}`;
  });

root.appendChild(p);



