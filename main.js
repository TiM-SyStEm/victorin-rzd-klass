let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");
let level3 = document.getElementById("level3");
let balls = document.getElementById("balls");
let vplayer = document.getElementById("vplayer");
let nameVid = document.getElementById("nameVid");
let levelind = 0;
let i = 1;
let right;
let form = document.getElementById("form1");

function main(){
  nameVid.innerHTML = "Видео " + i;
  vplayer.src = window.data[i]["v1"];
  right = window.data[i]["right"];
}

function submit(){
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[1]
  };
  console.log(output);
  // валидация
  if(output == right){
    alert("верно");
  }
  else{
    alert("неверно");
  }
}

function easier(){
  if(levelind == 0){
    level1.style.backgroundColor = "white";
    level2.style.backgroundColor = "yellow";
    vplayer.src = window.data[i]["v2"];
    balls.style.color = "yellow";
    balls.innerHTML = "20";
    levelind = 1;
  }
  else if(levelind == 1){
    level2.style.backgroundColor = "white";
    level3.style.backgroundColor = "green";
    vplayer.src = window.data[i]["v3"];
    balls.style.color = "green";
    balls.innerHTML = "10";
    levelind = 2;
  }
}