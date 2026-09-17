function f01(){
  c=document.querySelector('#color01').value;
  x=document.querySelector("#target01");
  console.log(1);
  x.style.backgroundColor=c;
}

function f02(num){
  x=document.querySelector('#target02');
  x.style.width=num+'px';
  x.style.height=num+'px';
}

function f03(){
  x=document.querySelectorAll("input[type=text]");
  console.log(x[0].value+x[1].value+x[2].value);
  resultArea=document.querySelector('#result-area');
  a=x[0].value+x[1].value+x[2].value
  resultArea.innerHTML = a;
}