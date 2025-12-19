//const { createElement } = require("react");

let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
let main=document.querySelector(".main")

form.addEventListener("submit",function(evn){
evn.preventDefault();

let card=document.createElement("div");
card.classList.add("card");

let profile=document.createElement("div");
profile.classList.add("profile");
 
let img=document.createElement("img");
img.setAttribute("src",inputs[0].value);
profile.classList.add("img");

let name=document.createElement("h3");
name.textContent=inputs[1].value;
card.classList.add("name");

let mail=document.createElement("h6");
mail.textContent=inputs[2].value;
card.classList.add("mail"); 

let h5=document.createElement("h5");
h5.textContent=inputs[3].value;
card.classList.add("h5");

let p=document.createElement("p");
p.textContent=inputs[4].value;
card.classList.add("p");

profile.appendChild(img);
card.appendChild(profile);
card.appendChild(name);
card.appendChild(mail);
card.appendChild(h5);
card.appendChild(p);

main.appendChild(card);

inputs.forEach(function(ele) {
    if(ele.value!=="submit")
    {
        ele.value="";
    }
});
});