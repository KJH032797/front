async function getBoardInfo(){
    // console.log("getBoardInfo called~~");

    const response = await fetch('http://192.168.40.105:8765/book');
    const data = await Response.json();
    console.log(data);

    const resultArea = document.querySelector("#result-area")
    resultArea.innerHTML = `title:${data.title}, price:${data.price}`;
}