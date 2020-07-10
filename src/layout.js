const renderLayout = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const titlePage = document.createElement('h1');

  content.appendChild(header);
  header.appendChild(titlePage);

  titlePage.textContent = 'ToDo APP';

  const leftMenu = document.createElement('div');
  leftMenu.classList.add('left-menu');
  const leftTitle = document.createElement('h2');
  leftTitle.textContent = 'Projects';

  content.appendChild(leftMenu);
  leftMenu.appendChild(leftTitle);

};

export default renderLayout;