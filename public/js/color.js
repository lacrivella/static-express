const search = new URLSearchParams(window.location.search);
const name = search.get('name');

const root = document.getElementById('root');
const colorInfo = document.createElement('ul');
const li = document.createElement('li');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    li.textContent = `${color.name}`;
  });
  
colorInfo.appendChild(li);
root.appendChild(colorInfo);
