function f01(){
  window.open('https://www.naver.com', 'abc', 'width=300, height=200');
}

// function f02(){
//   setTimeout(lunchtime,3000);
// }

// function lunchtime(){
//   console.log('is coming!')
// }

function f02(){
  setTimeout(()=>{
  console.log('is coming!')
},3000);
}

function f03(){
  const timer = setInterval(()=>{
    console.log('hungry');
  },1000);
  setTimeout(()=>{
    clearTimeout(timer);
  }, 5000)
}

function f04(){
  // location.href = 'https://www.naver.com';
  location.reload();
}

function f05(){
  // history.back();
  // history.forward();
  // history.go(-1);
  // history.go(1);
}

function f06(){
  console.log(navigator);
}

function f07(){
  console.log(screen)
}