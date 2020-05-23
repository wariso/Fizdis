var button = document.getElementById("clickme"),
  count = 0;
//button.onclick = function() {
  //count += 1;
  //document.getElementById('1').innerHTML = + count;
  //button.innerHTML = "Clicksss me: " + count;
//};

function add(id)
{
  count = parseInt(document.getElementById(id).innerHTML);
  document.getElementById(id).innerHTML = count+1;
}
function substract(id)
{
  count = parseInt(document.getElementById(id).innerHTML);
  document.getElementById(id).innerHTML = count-1;
}
function setPicture(id2, value) {
    //var img = document.getElementById(id3);
    //var value = id3->options[id3.selectedIndex].value;
  


	document.getElementById(id2).src=value;
  

}