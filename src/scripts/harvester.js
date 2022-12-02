

//Step 2 - Define and Export a harvestPlants function
//Step 3 - The harvestPlants func must accept the plants array as input
    //accomplished thru adding the plantArr parameter
//Step 4 - The harvestPlants func will **return** an array of seed objects
    //accomplished through adding a new blank array
//Step 5 - Iterate the array of growing plants.
    //accomplished thru a for...of loop to access the array objects. Then using a for loop to increment through the objects based on the output.
//Step 5 cont - On each plant (within for loop), get the value of the output property
    //accomplished through iterating the array on the output key
//Step 6 - Add that many of the plant objects to the array that the function returns
    //NEED - need to a .push method for the value and return a new array return statement?
//Step 7 - 

export const harvestPlants = (plantArr) => {
    let newArr = [];
    for (const plant of plantArr) {
        if (plant.type === 'Corn') {
            for (let i = 0; i < plant.output/2; i++){
                newArr.push(plant);
            } 
        }
        else {
            for (let i = 0; i < plant.output; i++){
                newArr.push(plant);
            }
        }
    }
    return newArr;
}