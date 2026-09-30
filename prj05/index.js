async function insertBoard(){
  const title = document.querySelector('input[name=title]').value;
  const content = document.querySelector('textarea[name=content]').value;
  const x = {
    title,  // const로 지정된 걸 밸류로 지정할 경우 바로 써줘도 키:밸류 인식함
    content,
  };
  
  const resp = await fetch('http://127.0.0.1:8765/board', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
    },
    body : JSON.stringify(x)
  });
  const data = await resp.json();
  alert(data.msg);
}

function getBoardById(){
  console.log('2nd');
}

function getBoardList(){
  console.log('3rd');
}