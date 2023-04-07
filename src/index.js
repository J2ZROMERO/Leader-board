import './style.css';
import Requestapi from './modules/request';

const api = new Requestapi();

document.querySelector('.send').addEventListener('click', (e) => {
  api.postgame('futboll');

  const name = document.querySelector('.nameS');
  const score = document.querySelector('.scorein');
console.log(score.value);
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
