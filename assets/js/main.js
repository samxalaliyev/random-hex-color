const text = document.querySelector("#text");
const btn =  document.querySelector("#btn");
let wrap = document.querySelector(".wrap")

const hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const randomColor = () => {
    let hexCod = '#'
    for(let i = 0 ; i < 6; i++ ){
        hexCod += hexArray[Math.floor(Math.random()*hexArray.length)]
    }
    return hexCod;
}


btn.addEventListener('click',()=>{
    const changeColor = randomColor()
    text.innerHTML = changeColor
    document.body.style.backgroundColor = changeColor
})