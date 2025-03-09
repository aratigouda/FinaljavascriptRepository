//let div = document.querySelector("div");
//console.log(div);
//let id = div.getAttribute("id");
//console.log(id);
//let para = document.querySelector("p");
//console.log(para.getAttribute("class"));
//console.log(para.setAttribute("class", "1234"));

   
//let div = document.querySelector("div");
//div.style.backgroundColor = "red";
//div.innerText = "hello";
//div.innerText.Color = "white";
//div.style.color = "white";
//div.style.visibility = "hidden";
//let newBtn = document.createElement("button");
//newBtn.innerText = "click me";
//console.log(newBtn);

//let div = document.querySelector("div");
//div.append(newBtn);
//div.prepend(newBtn);
//div.before(newBtn);
//div.after(newBtn);
//let newHead = document.createElement("h1");
//newHead.innerHTML = "<i>hi arati</i>";
//document.querySelector("body").after(newHead);
//newHead.remove();

//let para = document.querySelector("p");
//console.log(para.getAttribute("class"));
//para.setAttribute("class", "newclass");
//para.classList.add("newclass");
//let para1 = document.createElement("p");
//para.innerText = "my full name is aratigouda";
//console.log(para1);
//let div = document.querySelector("div");
//div.append(para1);

//let para = document.querySelector("p");
//console.log(para);
//para.getAttribute("class");
//para.classList.remove("newclass");

//let btn1 = document.querySelector("#btn1");
//btn1.onclick = () => {
    //console.log("hi arati");
    //let a = 20;
   // a++;
   // console.log(a);
   // console.log("i can get the answer");
//};


//at a time inline handling and handling in js fst preyority give to js

//event Object
//let btn1 = document.querySelector("#btn1");
//btn1.onclick = (evt) => {
    //console.log(evt);
   // console.log(evt.type);
    //console.log(evt.target);
   // console.log(evt.clientx, evt.clienty);
//};


//event listerners
//let btn1 = document.querySelector("#btn1");
//btn1.addEventListener("click", () => {
   // console.log("handler1");

//});
//const handler2 = () => {
   // console.log("handler2");
   // };
    
//btn1.addEventListener("click", handler2);

//btn1.addEventListener("click", () => {
   // console.log("handler3");
//});
//btn1.removeEventListener("click", handler2);


//let modeBtn = document.querySelector("#mode");
//let Body = document.querySelector("body");
//let currentmode = "light";
//modeBtn.addEventListener("click", () => {
   // if(currentmode == "light"){
     //   currentmode = "dark";
      //  Body.classList.add("dark");
      //  Body.classList.remove("light");
   // }else{
       // currentmode = "light";
       // Body.classList.add("light");
        //Body.classList.remove("dark");
    //}
    //console.log(currentmode);
//});


 
//let boxes = document.querySelectorAll(".box");
//let resetBtn = document.querySelector("#reset-btn");
//let box = document.querySelector("box");
//let turnO = true;
//let winPatterens = [
   // [0,1,2],
   // [3,4,5],
    //[6,7,8],
   // [1,4,7],
   // [2,5,8],
    //[0,4,8],
   // [0,3,6],
   // [2,4,8],
//];

 const boxes = document.querySelectorAll('.box');
 const resetBtn = document.querySelector('#reset-btn');
 const newGameBtn = document.querySelector('#new-btn');
 const msgContainer = document.querySelector('.msg-container');
 const msg = document.querySelector('#msg');
 const winPatterens = [
     [0,1,2],
    [3,4,5],
     [6,7,8],
     [1,4,7],
    [2,5,8],
     [0,4,8],
     [0,3,6],
    [2,4,8],
 ];
 let turnO = true;
 const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
 }
 
 boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('hi arati');
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        }else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = "true";
        checkWinner();
    });
 });
 const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
 };
 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 };

 const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
 }
 const checkWinner = () => {
    for(pattern of winPatterens) {
        //console.log(pattern[0], pattern[1], pattern[2]);
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    };
 };
  
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
    






