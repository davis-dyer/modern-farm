

//Step 3 - Define and export a catalog function
//Step 4 - Function should accept the harvested food array as input
    //accomplished thru harvestArr parameter
//Step 5 - The function should iterate the array of food objects
    //accomplished thru adding a for...of loop of the parameter. Then have to go another level to access the elements.
//Step 6 - 


export const catalogFunc = (harvestArr) => {
    let htmlString = '';
    for (const item of harvestArr) {
        //for (const food of item){
            htmlString += `<section class="plant">${item.type}</section>`;
        //}
    }
    return htmlString;
}

