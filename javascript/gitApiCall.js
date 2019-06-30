//var x;
function clickAction(){
var oReq=new XMLHttpRequest();
//oReq.addEventListener("load",clickAction);
oReq.onload=childAction;
oReq.open("get","https://api.github.com/users/Abhilashsri10/repos",true);
oReq.send();

function childAction(){
    var repos=JSON.parse(this.responseText);
    var a = document.getElementById("button");
    if(a.innerHTML==""){
        for(var i=0;i<repos.length;i++){
            a.innerHTML += `<div class="gitLink"><a href="${repos[i]["html_url"]}" target="_blank">${repos[i]["name"]}</a></div>`;
    }
    }
}
}