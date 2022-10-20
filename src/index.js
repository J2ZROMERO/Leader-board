import lielement from './modules/element';
import './style.css';
import request from './modules/request.js'

let api  = new request;


document.getElementById('submit').addEventListener('submit',(e)=>{
   
    api.postgame("futboll")

    const name = document.querySelector('.nameS');
    const score = document.querySelector('.scoreS');
    
    if(!(name.value === "" && score.value === "")){
        api.postscores(name.value,score.value)
        e.preventDefault()
        name.value = ""
        score.value = ""
    }
    
    e.preventDefault()
    
    
})
  
  document.querySelector('.refreshB').addEventListener('click', ()=>{
    api.addlielement()
  })
  
   window.addEventListener('load', ()=>{
  api.addlielement()
  
  })
  