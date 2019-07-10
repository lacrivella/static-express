const colorRoot = document.getElementById('color-root');
const colorList = document.createElement('ul');

fetch('/api/v1/colors')
  .then(res => res.json())
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      li.textContent = `${color.name}`;
      colorList.appendChild(li);
    });
  });

colorRoot.appendChild(colorList);