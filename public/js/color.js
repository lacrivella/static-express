const root = document.getElementById('root');
const colorInfo = document.createElement('ul');

const search = new URLSearchParams(window.location.search);
const name = search.get('name');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      li.textContent = `${color.name}`;
      colorInfo.appendChild(li);
    });
  });

root.appendChild(colorInfo);
