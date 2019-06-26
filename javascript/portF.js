var data=[{
    skill:"c/c++",value:"50%"
},{
    skill:"java",value:"50%"
},{
    skill:"sql",value:"60%"
},{
    skill:"python",value:"50%"
}];
getElement(data);
function getElement(data){
    var a=document.querySelectorAll(".blockSk");
    var b=document.querySelectorAll(".bar>span");
    for(var i=0;i<b.length;i++){
        a[i].innerHTML=data[i].skill;
        b[i].style.width=data[i].value;
    }
}