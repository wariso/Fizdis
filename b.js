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
	document.getElementById(id2).src=value;
 }

function start()
{
	
		setPicture(100, document.getElementById("cardlist").value);
		setPicture(101, document.getElementById("cardlist2").value);
		setPicture(102, document.getElementById("cardlist3").value);
		setPicture(103, document.getElementById("cardlist4").value);
		setPicture(104, document.getElementById("cardlist5").value);
		setPicture(105, document.getElementById("cardlist6").value);
		setPicture(106, document.getElementById("cardlist7").value);
		setPicture(107, document.getElementById("cardlist8").value);
		setPicture(108, document.getElementById("cardlist9").value);
		setPicture(109, document.getElementById("cardlist10").value);
		setPicture(110, document.getElementById("cardlist11").value);
		setPicture(111, document.getElementById("cardlist12").value);
		setPicture(112, document.getElementById("cardlist13").value);
		setPicture(113, document.getElementById("cardlist14").value);
		setPicture(114, document.getElementById("cardlist15").value);
		setPicture(115, document.getElementById("cardlist16").value);
		setPicture(116, document.getElementById("cardlist17").value);
		setPicture(117, document.getElementById("cardlist18").value);
		setPicture(118, document.getElementById("cardlist19").value);
		setPicture(119, document.getElementById("cardlist20").value);
	
	
}