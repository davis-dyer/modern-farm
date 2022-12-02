import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";


//Step 4 - The plan is an array. Figure out how to iterate both the parent array and the child array.
    //accomplished through a nested for...of loop in plantSeeds function.




//Step 2 - Define and Export a plantSeeds function
//Step 3 - This function must accept the year's planting plan as input
    //accomplished through the parameter "plantingPlan"
//Step 5 - As you iterate the row of food types to be planted, invoke the corresponding factory function
    //accomplished through "if" statement saying, "If the plant in the array matches, then invoke the create*seed* function to add to the array"
//Step 6 - Take the seed and add it to the array of plants in the field module
    //accomplished thru using the addPlant function and passing in the create*seed* function variable as an argument.
    
export const plantSeeds = (plantingPlan) => {
    for (const i of plantingPlan) {
       for (const j of i) {
            if (j === "Asparagus") {
                let crop1 = createAsparagus();
                addPlant(crop1);
            }
            if (j === "Potato") {
                let crop2 = createPotato();
                addPlant(crop2);
            }
            if (j === "Corn") {
                let crop3 = createCorn();
                addPlant(crop3);
            }
            if (j === "Soybean") {
                let crop4 = createSoybean();
                addPlant(crop4);
            }
            if (j === "Sunflower") {
                let crop5 = createSunflower();
                addPlant(crop5);
            }
            if (j === "Wheat") {
                let crop6 = createWheat();
                addPlant(crop6);
            }
        }
    }
}

