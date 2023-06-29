function timebutton() {
  alert("Time for you to get a watch!")
}


function askUser(){
    let number = prompt('On a Scale of 1-10, how much do you enjoy Architecture?');
    while(!number){
      number = prompt('Please tell me, I really want to know!')
    }
  for (let i = 0; i < number; i++) {
    document.write(
      '<img style="width:150px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Space_Needle_2011-07-04.jpg/800px-Space_Needle_2011-07-04.jpg">'
    )
  }   
}


