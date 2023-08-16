var createPolitician = function(fullName, partyColor)
{
  var politician = {};
  
  
  politician.name = fullName;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  
  politician.callPolitician = function()
  {
    console.log("Candidate " + this.name);
  };
  
  
  politician.callPolitician();
  
  
  
  politician.countTotalVotes = function() {
    
    this.totalVotes = 0;
    
    for (var i =0; i < this.electionResults.length; i++) {
      
      this.totalVotes = this.totalVotes + this.electionResults[i];
      console.log(this.totalVotes);
        
    }
    
  };
  
  return politician;
  
  
};

var daria = createPolitician("Daria Morgendorffer",  [1, 185, 254] ); //original colors [245, 141, 136]
var boondocks = createPolitician("Huey Freeman", [0, 57, 255]); //original colors [132, 17, 11]

daria.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2 ];
boondocks.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

daria.electionResults[9] = 1;
daria.electionResults[4] = 17;
daria.electionResults[43] = 11;

boondocks.electionResults[9] = 28;
boondocks.electionResults[4] = 38;
boondocks.electionResults[43] = 27;



console.log(daria.electionResults);
console.log(boondocks.electionResults);


var setStateResults = function(state) {
  
    theStates[state].winner = null;
    
    if (daria.electionResults[state] > boondocks.electionResults[state]){
      
        theStates[state].winner = daria;  //set winner to the candidate object, not the candidate's name
      
      
    }else if (daria.electionResults[state] < boondocks.electionResults[state]) {
      
         theStates[state].winner = boondocks;  //set winner to the candidate object, not the candidate's name
      
    }
  
  
    var stateWinner =  theStates[state].winner; 
  
    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
       
      
    }else {
        theStates[state].rgbColor = [11,32,57];
       
    }
  
    
    if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
  
 stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
  
  
  candidate1Name.innerText = daria.name;
candidate2Name.innerText = boondocks.name;
 
candidate1Results.innerText = daria.electionResults[state];
candidate2Results.innerText = boondocks.electionResults[state];
  
}



daria.countTotalVotes();
boondocks.countTotalVotes();

console.log(daria.totalVotes);
console.log(boondocks.totalVotes);

var winner = "???";

if (daria.totalVotes > boondocks.totalVotes) {
  
     winner = daria.name;
  
}else if (daria.totalVotes < boondocks.totalVotes) {
  
     winner = boondocks.name;
  
}else {
  
     winner = "DRAW";
  
}

console.log("The winner of the election is " + winner);

console.log("Daria Morgendorffer is color " + daria.partyColor);
console.log("Huey Freeman is color " + boondocks.partyColor);


var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = daria.name;
row.children[1].innerText = daria.totalVotes;
row.children[2].innerText = boondocks.name;
row.children[3].innerText = boondocks.totalVotes;
row.children[5].innerText = winner;

var stateTable = document.getElementById('stateResults');
var header = stateTable.children[0];
var body = stateTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];


 

 


