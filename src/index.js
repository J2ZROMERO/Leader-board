import './style.css';
import Requestapi from './modules/request';

const api = new Requestapi();

document.getElementById('submit').addEventListener('submit', (e) => {
  api.postgame('futboll');

  const name = document.querySelector('.nameS');
  const score = document.querySelector('.scoreS');

  if (!(name.value === '' && score.value === '')) {
    api.postscores(name.value, score.value);
    e.preventDefault();
    name.value = '';
    score.value = '';
  }

  e.preventDefault();
});

document.querySelector('.refreshB').addEventListener('click', () => {
  api.addlielement();
});

window.addEventListener('load', () => {
  api.addlielement();
});
