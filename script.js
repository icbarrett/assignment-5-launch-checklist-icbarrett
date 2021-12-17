// Write your JavaScript code here!
console.log("hello");
window.addEventListener("load", function() {
    console.log("in window listener");

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse)
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = [];
        planet = pickPlanet(listedPlanets);
        console.log(planet.image)
        
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

    document.addEventListener("submit", function(Event) {
        console.log("in document listener");
        Event.preventDefault();
        let pilotInput = document.querySelector("input[name = pilotName]");
        let coPilotInput = document.querySelector("input[name = copilotName]");
        let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
        let cargoMassInput = document.querySelector("input[name = cargoMass]");
        // let listInput = [pilotInput.value, coPilotInput.value, fuelLevelInput.value, cargoMassInput.value];
        formSubmission (document, pilotInput.value, coPilotInput.value, fuelLevelInput.value, cargoMassInput.value);
    });

});
