document.querySelector('.button').addEventListener('click',()=>{ 

  window.location.href=("http://127.0.0.1:5500/something.html?abdou=star");
  
  
  });
  
const star= new URL(window.location.href);
console.log(star.searchParams.get('abdou'));

document.querySelector('.green').addEventListener('click',()=>{ 

  window.location.href=("http://127.0.0.1:5500/something.html?yawaddi=artist");

})
