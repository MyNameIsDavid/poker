(function(){
  background(0, 255, 0);
  document.getElementById('temp').innerHTML = 'mogguh';
})();


function submit(){
  toggleVisibility(document.getElementById('temp'));
  toggleVisibility(document.getElementById('greyout'));
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
