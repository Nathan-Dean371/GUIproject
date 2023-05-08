/*
booking JavaScript by Steven Derrig
this takes the inputs from the booking page 
*/

function validateForm()
		{	
				//once the form is submitted it will save the inputs into the locale storage, ideally not the best way for saving data for making a booking
				var Name = document.getElementById("InputName");
				localStorage.setItem("InputName", Name.value);
				var storedName = localStorage.getItem("InputName");
				
				var Email = document.getElementById("InputEmail");
				localStorage.setItem("InputEmail", Email.value);
				var storedEmail = localStorage.getItem("InputEmail");
				
				var Phone = document.getElementById("InputPhoneNumber");
				localStorage.setItem("InputPhoneNumber", Phone.value);
				var storedPhone = localStorage.getItem("InputPhoneNumber");
				
				var Date = document.getElementById("DateSelect");
				localStorage.setItem("DateSelect", Date.value);
				var storedDate = localStorage.getItem("DateSelect");
				
				var Time = document.getElementById("TimeSelect");
				localStorage.setItem("TimeSelect", Time.value);
				var storedTime = localStorage.getItem("TimeSelect");
				
				var NumPeople = document.getElementById("PartySize");
				localStorage.setItem("PartySize", NumPeople.value);
				var storedName = localStorage.getItem("PartySize");
				
				var Message = document.getElementById("AdditionalInfo");
				localStorage.setItem("AdditionalInfo", Message.value);
				var storedName = localStorage.getItem("AdditionalInfo");
					
			//checks to see if the correct email format is entered, making sure that it is in the format	
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
					//this will pop up once the user submits the form, informing them that thier reservation has been made
					confirm("Reservation Submitted");
			return true;
		}