// live char counter js

let span=document.querySelector("span");
let inp=document.querySelector("input");
let span2=document.querySelector("#span2")

inp.addEventListener("input",function(des){
  span.textContent=  inp.value.length;
});

inp.addEventListener("input",function(des){

  let a = 20- inp.value.length;
  span2.textContent=a;
  if(a<0){
    span2.style.color="red";
  }
  if(a>=0){
    span2.style.color="black";
  }

});
