var card = document.getElementById("card");
var btn = document.getElementById("btn");

	function openLogin(){
		card.style.transform = "rotateY(-180deg)";
		}
	function openRegister(){
		card.style.transform = "rotateY(0deg)";
		}
	btn.onclick =function(){
			window.Confirm('Allow browser to save password.')
		}