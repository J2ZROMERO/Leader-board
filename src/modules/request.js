import lielement from './element';

export default class Requestapi {
    postgame = async (game) => {
      await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: game }),
      });
    }

    postscores= async (name, score) => {
      await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/601/scores/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: name, score }),
      });
    }

    getscores = async () => {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/601/scores/');
      const data = await response.json();

      return data;
    }

  addlielement = async () => {
    const data = await this.getscores();
    let elementsli = '';
    for (const e of data.result) {
      elementsli += lielement.generateElement(e.user, e.score);
    }
    document.querySelector('.scores').innerHTML = elementsli;
  }
}
