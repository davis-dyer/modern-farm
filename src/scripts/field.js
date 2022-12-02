
//Step #2 - Define an empty array
const field1 = [];

//Step 3 - Define and Export a Function named addPlant
//Step 4 - The addPlant function must accept a seed object as input
    //accomplished through parameter
//Cont - The function will add the seed to the field
    //accomplish through the .push method. pushing the plantseed to the empty array

export const addPlant = (seedObj1) => { 
    if (Array.isArray(seedObj1)) {
        for (const seed of seedObj1){
            field1.push(seed);
        }
    }
    else {
        field1.push(seedObj1);
    }
}
    //field1.push(seedObj1);

//Section #3 Check
/* let final = addPlant(createAsparagus());
final = addPlant(createPotato());
final = addPlant(createSoybean());
final = addPlant(createSunflower());
final = addPlant(createWheat());
final = addPlant(createCorn());
console.log(final); */


//Step 5 - Define and export a function usePlants that **returns** a copy of the array of plants
    //accomplish through the spread operator. 
export const usePlants = () => {
    return [...field1];
}





