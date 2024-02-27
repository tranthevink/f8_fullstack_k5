var flatArray = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
    },
    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
    },
    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
    },
    {
        id: 12,
        name: "Chuyên mục 2.2.3",
        parent: 5,
    },
];


var hierarchicalArray = [];
flatArray.forEach(item => {
    addToHierarchicalArray(item);
});

console.log(hierarchicalArray);


function addToHierarchicalArray(item) {
    var parent = flatArray.find(x => x.id === item.parent);
    if (parent) {
        //find the parent reference of the item
        var parentReference = addToHierarchicalArray(parent);
        if (parentReference.children) {
            //check whether the item is existing in the children of the parent or not
            var existingItem = parentReference.children.find(x => x.id === item.id);
            if (!existingItem) {
                //not existing
                var newItem = JSON.parse(JSON.stringify(item));
                delete newItem.parent;
                parentReference.children.push(newItem);
                return newItem;
            } else {
                //existing
                return existingItem;
            }
        } else {
            //item is the new child of the parent
            var newItem = JSON.parse(JSON.stringify(item));
            delete newItem.parent;
            parentReference.children = [newItem];
            return newItem;
        }
    } else {
        //find the root reference
        var finder = hierarchicalArray.find(x => x.id === item.id);
        if (finder) {
            return finder;
        } else {
            var newItem = JSON.parse(JSON.stringify(item));
            delete newItem.parent;
            hierarchicalArray.push(newItem);
            return newItem;
        }
    }
}


