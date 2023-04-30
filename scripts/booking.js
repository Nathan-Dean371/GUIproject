/*Steven Derrig
this takes the inputs from the booking page 
*/
function validateForm()
		{	
			//checks to see if the correct email format is entered		
			let email = document.getElementById("InputEmail").value;
			var at = "@";
			var dot = ".";
			let emailAt = email.indexOf(at);
			let emailDot = email.indexOf(dot);
			if(emailAt == -1||emailDot == -1)
			{
				alert("You have entered an invalid email address, must contain @ or . Example: example@email.ie");
				return false;
			}
			return true;
		}