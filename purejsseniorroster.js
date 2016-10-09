console.log("Welcome to Senior Roster - by Henry Lawrence");
console.log("Functions: statusOnHour(hour), breakTime(name,breakNo) , calledSick(name); calledSickList(), displayHelp()"); 
console.log("Available names: Linda, Kim, John, Ava, Clark, Robyn, Courtney, Leah, Byron, Marlon");
console.log("statusOnHour(hour) requires an hour of the day in a 24 hour format and will return information appropriate to that hour. eg. statusOnHour(11) = 11:00 AM or statusOnHour(16) = 4:00 PM");
console.log("breakTime(name,breakNo) requires the name of the staff member going on break, and the break No 1, 2, or 3, where 1 and 3 is a 15 minute break, while 2 is a 30 minute break. eg. breakTime(Kim,2) will give Kim a 30 minute break");

var allStaff = [{firstName:"Linda", lastName:"Stephenson", ident:"332",isWorking:true, startTime:startTime1, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift1}, 
               {firstName:"Kim", lastName:"Palmer", ident:"318",isWorking:true, startTime:startTime2, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift2}, 
               {firstName:"John", lastName:"Lyon", ident:"112",isWorking:true, startTime:startTime3, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift3}, 
               {firstName:"Ava", lastName:"Master", ident:"134",isWorking:true, startTime:startTime4, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift4}, 
               {firstName:"Clark", lastName:"Trevis", ident:"346",isWorking:true, startTime:startTime5, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift5}, 
               {firstName:"Robyn", lastName:"Morris", ident:"999",isWorking:true, startTime:startTime6, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift6}, 
               {firstName:"Courtney", lastName:"Adamson", ident:"331",isWorking:true, startTime:startTime7, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift7}, 
               {firstName:"Leah", lastName:"Rafe", ident:"231",isWorking:true, startTime:startTime8, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift8}, 
               {firstName:"Byron", lastName:"Read", ident:"194",isWorking:true, startTime:startTime9, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift9}, 
               {firstName:"Marlon", lastName:"Hardy", ident:"112",isWorking:true, startTime:startTime10, firstBreak:"", secondBreak:"", thirdBreak:"",homeTime:"",currentBreak:"", totalHours:totalHourShift10}];

var totalHourShift1 = 8; 
var totalHourShift2 = 8; 
var totalHourShift3 = 8; var totalHourShift4 = 8; 
var totalHourShift5 = 8; 
var totalHourShift6 = 8; 	
var totalHourShift7 = 5; 
var totalHourShift8 = 4; 
var totalHourShift9 = 4; 
var totalHourShift10 = 4; 

var notes = "Other: \n";
var j = 0;

for(i = 0;i< allStaff.length; i++){

//init all times as dates
allStaff[i].startTime = new Date();
allStaff[i].firstBreak = new Date();
allStaff[i].secondBreak = new Date();
allStaff[i].thirdBreak = new Date();
allStaff[i].homeTime = new Date();


j = j + 1;//incrememt case 

switch (j) {
    case 1:
    	allStaff[i].startTime.setHours(10,0,0);
        break;
    case 2:
    allStaff[i].startTime.setHours(11,0,0);
        break;
    case 3:
    allStaff[i].startTime.setHours(12,30,0);
        break;
    case 4:
    allStaff[i].startTime.setHours(13,0,0);
        break;
    case 5:
    allStaff[i].startTime.setHours(13,0,0);
        break;
    case  6:
    allStaff[i].startTime.setHours(13,30,0);
       break;
    case  7:
    allStaff[i].startTime.setHours(14,30,0);
       break;
    case  8:
    allStaff[i].startTime.setHours(14,30,0);
       break;
    case  9:
    allStaff[i].startTime.setHours(14,30,0);   
       break;
    case  10:
    allStaff[i].startTime.setHours(14,00,0);   
       break;
}

allStaff[i].firstBreak.setHours(allStaff[i].startTime.getHours()+2,0,0);
allStaff[i].secondBreak.setHours(allStaff[i].firstBreak.getHours()+2,00,0);
allStaff[i].thirdBreak.setHours(allStaff[i].secondBreak.getHours()+2,30,0);
allStaff[i].homeTime.setHours(allStaff[i].thirdBreak.getHours() + 1,30,0);

}
function statusOnHour(hour){

	// Starting times increment
	for (i = 0; i<allStaff.length;i++) {
		var starting = allStaff[i].startTime;
		var startingHour = starting.getHours();
		if(starting.getHours() === hour){
			console.log(allStaff[i].firstName+" starts at "+allStaff[i].startTime.toLocaleTimeString());
		}
	}
	// Breaks increment1 
	for (i = 0; i<allStaff.length;i++) {
		var breakti = allStaff[i].firstBreak;
		var breakTime = breakti.getHours();
		if(breakti.getHours() === hour){
			console.log(allStaff[i].firstName+" needs a first break.");
			// console.log("... they have been working for ");
			console.log("... they started at "+allStaff[i].startTime.toLocaleTimeString());
		}
	}
	// Breaks increment 2
	for (i = 0; i<allStaff.length;i++) {
		var breakti2 = allStaff[i].secondBreak;
		var breakTime2 = breakti2.getHours();
		if(breakti2.getHours() === hour){
			console.log(allStaff[i].firstName+" needs a second break,");
			console.log("... their first was at "+allStaff[i].firstBreak.toLocaleTimeString());
		}
	}
	// Breaks increment 3
	for (i = 0; i<allStaff.length;i++) {
		var breakti3 = allStaff[i].thirdBreak;
		var breakTime3 = breakti3.getHours();
		if(breakti3.getHours() === hour){
			console.log(allStaff[i].firstName+" needs a third break,");
			console.log("... their second was at "+allStaff[i].secondBreak.toLocaleTimeString());
			console.log("... they finish their shift at "+allStaff[i].homeTime.toLocaleTimeString());

		}
	}


	// Home time increment
	for (i = 0; i<allStaff.length;i++) {
		var breakti4 = allStaff[i].homeTime;
		var breakTime4 = breakti4.getHours();
		if(breakti4.getHours() === hour){
			console.log(allStaff[i].firstName+" is going home!");
			console.log("... they finish their shift at "+allStaff[i].homeTime.toLocaleTimeString());
		}
	}
	console.log(notes);
	for (var i = 0; i < allStaff[i].length; i++) {
		if(allStaff[i].currentBreak.getHour() === hour){
			console.log(allStaff[i].firstName+" will be back from break at " + allStaff[i].currentBreak);
		}
	}
}

function breakTime(name,n){
var time =new Date(); time = time.toLocaleTimeString();
var fifteen = new Date(); fifteen.setHours(fifteen.getHours() + 0,fifteen.getMinutes()+15,0);
var half = new Date();    half.setHours(half.getHours() + 0,half.getMinutes()+30,0);

	console.log("Breaktime for "+name);
	if(n === 1|| n === 3){ //if break is the first, (15) or last (15)
		console.log("Please return at "+fifteen.toLocaleTimeString());
		var tscript = name +" went for a fifteen break at "+time +"\n they will return at "+fifteen.toLocaleTimeString();
		notes = notes + tscript+"\n";
		for ( i = 0; i < allStaff[i].length; i++) {
			if(allStaff[i].firstName === name){
				allStaff[i].currentBreak = fifteen.toLocaleTimeString();
			}
		}
	}
	else{//if break is 2nd, (30 minutes)
		console.log("Please return at "+half.toLocaleTimeString());
		var tscript = name +" went for a half break at "+time +"\n they will return at "+half.toLocaleTimeString();
		notes = notes + tscript +"\n"; //add data to notes
		for ( i = 0; i < allStaff[i].length; i++) {
			if(allStaff[i].firstName === name){
				allStaff[i].currentBreak = half.toLocaleTimeString();
			}
		}
	}
}
function calledSick(name){
	for (i = 0; i < allStaff.length; i++) {
			if(allStaff[i].firstName === name ){
				allStaff[i].isWorking = false;
				console.log(name+" called in sick.");
					return;
			}
	}

			console.log("Staff not found");

}
function calledSickList(){
	for ( i = 0; i < allStaff.length; i++ ) {
			if(allStaff[i].isWorking === false){
				console.log(allStaff[i].firstName+" is sick today.");
			}
		}
}

function displayHelp (){
console.log("Welcome to Senior Roster - by Henry Lawrence");
console.log("Functions: statusOnHour(hour), breakTime(name,breakNo) , calledSick(name); calledSickList() ,displayHelp()"); 
console.log("Available names: Linda, Kim, John, Ava, Clark, Robyn, Courtney, Leah, Byron, Marlon");
console.log("statusOnHour(hour) requires an hour of the day in a 24 hour format and will return information appropriate to that hour. eg. statusOnHour(11) = 11:00 AM or statusOnHour(16) = 4:00 PM");
console.log("breakTime(name,breakNo) requires the name of the staff member going on break, and the break No 1, 2, or 3, where 1 and 3 is a 15 minute break, while 2 is a 30 minute break. eg. breakTime(Kim,2) will give Kim a 30 minute break");
}
