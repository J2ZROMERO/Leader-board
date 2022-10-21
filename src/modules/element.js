export default class lielement {
  static generateElement(name, score) {
    return `<li><h2 class="nameli">${name}</h2> <span>:</span> <h2 class="scoreli">${score}</h2></li>`;
  }
}
