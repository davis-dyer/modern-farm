const corn = {
    items: [
    {
        type: 'Corn',
        height: 180,
        output: 6
    },
    {
        type: 'Corn',
        height: 180,
        output: 6
    }
    ]
}

//Step 6 - Returning one item in the corn array
export const createCorn = () => {
    return corn.items.map(items => ({...items})) 
} 
