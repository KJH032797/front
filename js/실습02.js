function f01(x){
  // x.style.backgroundColor = 'blue';
  console.log('h1 clicked', x);
}

function changeColor(s){
  const h1tag = document.querySelector('h1');
  // h1tag.classList.remove('red', 'blue', 'green');
  h1tag.setAttribute('aaa','bbb')
  h1tag.classList.add(s);
}