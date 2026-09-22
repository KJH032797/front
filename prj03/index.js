async function f01(){
  const resp = await fetch('http://192.168.40.3:8000/hello', {
    method : "post",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({nick:'&judy'})
  });
  const data = await resp.json();
  console.log(data);
}