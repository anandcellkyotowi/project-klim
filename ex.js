function removeClass(){
  var water = document.getElementById('water');
  water.classList.remove("waterdrop");

  document.getElementById('content').style.display="block"
  document.getElementById('show').style.display="none"
}


addEventListener('click',(e)=>{
  console.log(e.x)
})