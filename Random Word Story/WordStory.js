function tellStory() {
	// Gathers Form Ellements
	var txtName = document.getElementById("txtName");
	var txtPlace = document.getElementById("txtPlace");
	var txtVerb = document.getElementById("txtVerb");
	var txtPetName = document.getElementById("txtPetName");
	var txtFood = document.getElementById("txtFood");
	var txtBook = document.getElementById("txtBook");
	var txtColor = document.getElementById("txtColor");
	var txtMonth = document.getElementById("txtMonth");
	var txtWeather = document.getElementById("txtWeather");
	var output = document.getElementById("output");

	// Create Variables For Input
	var name = txtName.value;
	var place = txtPlace.value;
	var verb = txtVerb.value;
	var petname = txtPetName.value;
	var food = txtFood.value;
	var book = txtBook.value;
	var color = txtColor.value;
	var month = txtMonth.value;
	var weather = txtWeather.value;

	// Write the Story
	var Story = name + " lives in " 
	+ place + " where they enjoy " + verb 
	+ " with their dog " + petname + ". When they were not " 
	+ verb + ", they enjoyed eating while reading " 
	+ book + " below the " + color 
	+ " sky. This was especially fun duiring " 
	+ month + " while it was " + weather 
	+ " outside."

	// Copy Story to Output
	output.innerHTML = Story;
}

// function readOutLoud(output) {
// 	var speech = new SpeechSynthesisUtterance();
// 	speech.text = messsage;
// 	speech.volume = 1;
// 	speech.rate = 1;
// 	speech.pitch = 1;
// }