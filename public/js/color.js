const search = new URLSearchParams(window.location.search);
const name = search.get('name');

const root = document.getElementById('root');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    h2.textContent = `${color.name}`;
    h3.textContent = `HEX: ${color.hex}, RGB: ${color.r} - ${color.g} - ${color.b}`;
  });

root.appendChild(h2);
root.appendChild(h3);
