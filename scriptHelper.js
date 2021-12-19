// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
        const div = document.getElementById("missionTarget")
        div.innerHTML=
            `<h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${image}">`
  
}

function validateInput(testInput) {
    if(testInput == "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }

}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    let listInput = [pilot, copilot,fuelLevel,cargoLevel];
    // // test for empty
    for (let i = 0; i < listInput.length; i++) {
        if (validateInput(listInput[i]) === "Empty") {
            alert("All fields are required!");
            return;
        }
    }
    
     //  test for correct data type 
    
    if (validateInput(pilot) != "Not a Number" ) {
        console.log("Not a string")
        alert("Make sure to enter valid information for each field!");
        return;
    }

    if (validateInput(copilot) != "Not a Number" ) {
        window.alert("Make sure to enter valid information for each field!");
        return;
    }
    
    if (validateInput(fuelLevel) != "Is a Number") {
        window.alert("Make sure to enter valid information for each field!");
        return;
    }
    
    if (validateInput(cargoLevel) != "Is a Number") {
        window.alert("Make sure to enter valid information for each field!");
        return;
    } 
    
    // Assigning variables to document

    if (fuelLevel > 10000 && cargoLevel < 10000 ) {
        document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} ready`;
        document.getElementById("fuelStatus").innerHTML = `Fuel Level: ${fuelLevel} level high enough for launch for launch`
        document.getElementById("cargoStatus").innerHTML = `Cargo Mass: ${cargoLevel} mass low enough for launch`
        return;

// Test for Fuel and Cargo  

    } else {
    
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = "red"
        document.getElementById("faultyItems").style.visibility = "visible";
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = `Fuel Level:${fuelLevel} too low for launch`
        };
        if (cargoLevel > 10000) {
            document.getElementById("cargoStatus").innerHTML = `Cargo Mass:${cargoLevel} too heavy for launch`
        }
        return;  

    }   
    

}


    async function myFetch() {
        console.log("in function myfetch")
        let planetsReturned ;
    
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json()
        })
        return planetsReturned;
    }


function pickPlanet(planetsReturned) {
    let index = Math.floor(Math.random()*planetsReturned.length);
    console.log (planetsReturned[index])
    return planetsReturned[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
