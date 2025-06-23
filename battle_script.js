/* JavaScript Battle Game script */

// Add an event handler to the button ele 
document.getElementById("button").onclick = startBattle;

// Def of the startBattle() function which begins the game
function startBattle() {
	// CLear any old messages frm prev games , use emptry string
	document.getElementById("victory").innerHTML = "";
	document.getElementById("defeat").innerHTML = "";

	// Initial prompt for the use input stored in a variable, toUpperCase: convert a string to uppercase letters
	let action = window.prompt("You're walking through the forest and troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nWill you BRIBE the troll?\n\nPlease enter your response below:").toUpperCase();
	console.log(action);

	// Switch stm to handle the player's choice
	switch(action) {
		case "FIGHT":
			fightBattle();
			break;
		case "RUN":
			runBattle();
			break;
		case "BRIBE":
			bribeBattle();
			break;
		default: 
			window.alert("You entered: " + action + ". That is NOT a valid choice! Please try again!");
			startBattle();
	} // end of switch stm

} // end of startBattle () function

// Def of the fightBattle() function
function fightBattle() {
	// Start by collecting some use responses 
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Do you think you are stronger than a troll? (YES or NO)").toUpperCase();

	if (skill === "YES" || strong === "YES") {
		// THe user said YES to at least 1 prompt, OR
		displayMessage("victory", "Greater strength or skill has won the day!<br/>You have survived!");
		playAudio("win");
	} else {
		// The user didn't answer YES to both questions
		displayMessage("defeat", "You aren't skilled or strong?<br/>You have been defeated!");
		playAudio("lose");
	}

	changeButtonText();
} // end of fightBattle()

// Def of the runBattle() function
function runBattle() {
	// COllect the use input, test it for NULL then turn it upper case
	let fast = window.prompt("Are you fast? (YES or NO)");

	if (fast && fast.trim() != "") {
		fast = fast.trim().toUpperCase();
		console.log(fast);
	} else {
		window.alert("Please type something!");
		runBattle();
		return;
	}

	// Now that we know we have something input, analyze the vavriable to determine the outcome
	if (fast === "YES") {
		displayMessage("victory", "Your speed has saved you!<br/>But, can you live with you cowardice?");
		playAudio("win");
	} else {
		displayMessage("defeat", "You tried to run when you aren't fast?<br/>You have lost!");
		playAudio("lose");
	}

	changeButtonText();
} // end of runBattle()

// Def of the bribeBattle() functino
function bribeBattle() {
	//Variable to store the use input
	let money = window.prompt("You have to pay the troll-toll\nDo you have any money? (YES or NO)").toUpperCase();

	// CHeck the response of YES / NO
	if (money === "YES") {
		//User said they have oney, now ask for the amount
		let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE!");
		//Nested if stm to check the amount
		if (amount > 65) {
			// User has the correct ammount
			displayMessage("victory", "Great job! The troll is happy!<br/>You may pass!");
			playAudio("win");
		} else {
			// User had money, just not enough of it
			displayMessage("defeat", "The troll needs more than that!<br/>Your fate is sealed!");
			playAudio("lose");
		}
	} else {
		// User said they had no money
		displayMessage("defeat", "No money? What were you planning to bribe with!<br/>You have lost!");
		playAudio("lose");
	}

	changeButtonText();
}

// Side functions:
function changeButtonText() {
	document.getElementById("button").textContent = "Try Again?";
}

function playAudio(id) {
	document.getElementById(id).play();
}

function displayMessage(id, message) {
	document.getElementById(id).innerHTML = message;
}