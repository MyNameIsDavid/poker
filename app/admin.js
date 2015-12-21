function create(){
  toggleVisibility(document.getElementById('mainmenu'));
}

function save(){
  //TODO: Create functionality
}

function toggleVisibility(element){
  var attribute = element.getAttribute('class');
  //http://stackoverflow.com/questions/1789945/how-can-i-check-if-one-string-contains-another-substring
  if(~attribute.indexOf('hidden')){
    element.setAttribute('class', attribute.replace(' hidden', ''));
  }else{
    element.setAttribute('class', attribute + ' hidden');
  }
}

function showInvitations(){
  toggleVisibility(document.getElementById('rightmain'));
}
