// console.log(123);
// window.alert("wakeup");

// window.console.log(123);
//window 제외해도됨
// x=confirm("real?");
// console.log(x);

// x=prompt("who are you");
// console.log(x);

function f01(){
  // x=document.getElementById("target");
  // x=document.getElementsByTagName("h1");
  // x=document.getElementsByClassName("any");

  // x=document.querySelectorAll(".any");
  // console.log(x);
  // x[0].innerHTML = "hello";

  x = document.querySelector("input[name=title]");
  console.log(x.value);
  x.value="vac";
  x.focus();
}

