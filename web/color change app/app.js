let colors=['red','blue','green','yellow','purple','orange']
let button=document.getElementById('button');

button.addEventListener('click',function(){
    //addEvent listener supports http requestts.
    let index=parseInt((Math.random()*colors.length)+1);
    //parse int converts string to integer
    //random picks a random number within range

    let canvas=document.getElementById('canvas');
    document.body.style.background=`${colors[index]}`
})