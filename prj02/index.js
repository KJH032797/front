function f01(){
  const x = {
    title : 'Poter',
    price : 1000,
  };
  fetch('http://192.168.40.3:8000/books', {
    method : "post",
    headers : {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(x),
  })
  .then((resp)=>{
    console.log('resp :', resp);
    return resp.json();
  })
  .then((data)=>{
    console.log(data);
  })
  ;
}