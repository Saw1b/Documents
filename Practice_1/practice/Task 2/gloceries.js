const gloceries = [
    {
        name: "apple",
        category: "fruit",
        instock: false
    },
    {
        name: "milk",
        category: "dairy",
        instock: true
    },
    {
        name: "bread",
        category: "bakery",
        instock: true
    }
];

const gloceriesInStock = gloceries.filter(glocery => glocery.instock);
console.log("filteredData", gloceriesInStock);
