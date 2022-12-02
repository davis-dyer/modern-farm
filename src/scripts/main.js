import { createPlan } from './plan.js'
import { usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalogFunc } from './catalog.js';

//Logging 3 rows of 6 random crops
const yearlyPlan = createPlan();
//console.log(yearlyPlan);

//Logging function used to create crop object
//const newCrop = createAsparagus();
//console.log(newCrop);

/* let final = addPlant(createAsparagus());
addPlant(createPotato());
addPlant(createSoybean());
addPlant(createSunflower());
addPlant(createWheat());
addPlant(createCorn());

let result = usePlants(final);
console.log(result); */




//SOWING - Invoke the function that plants all of the seeds
let plantTheSeeds = plantSeeds(yearlyPlan);


//SOWING - Then, get the plants array from the fields module
let getThePlants = usePlants(plantTheSeeds);

//SOWING - Log array ot see if the plants array has been populated correctly
//console.log(getThePlants);


//HARVEST - Get the array of plants (getThePlants) and then invoke the harvestPlants function
let getTheHarvest = harvestPlants(getThePlants);

console.log(getTheHarvest);

//CATALOG - Accept the harvest array as input

const parentHTMLElement = document.querySelector('.container');

parentHTMLElement.innerHTML = catalogFunc(getTheHarvest);



