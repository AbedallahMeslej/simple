let btnMenu = document.querySelector(".btn-hambr");
let showNave  =document.querySelector(".nav-show");
let xMark = document.querySelector(".fa-xmark");
btnMenu.onclick = ()=>{  
    showNave.style.display = "block"
};
xMark.onclick = function(){
    showNave.style.display = "none"
};
//                                                            end  header  
let jobName = "front end engineer";
let job = document.querySelector("#my-job");
let index = 1;
function one(){
    job.textContent = jobName.slice(0,index)
    index++
    if(index > jobName.length ){
        index = 0;
    }
    
   
}
 setInterval(()=>{
        one()
    },200)
//                                                            end slice job
// let linkAbout = document.getElementById("link-one");
// linkAbout.onclick  = ()=>{
//     linkAbout.style.cssText= `
//     background:red;
//     padding:15px;
    
//     `;

// }