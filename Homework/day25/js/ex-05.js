var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
]


let selectionElement = document.createElement("select");
let defaultOptionElement = document.createElement("option");
defaultOptionElement.value = 0;
defaultOptionElement.text = "Chọn chuyên mục";
selectionElement.appendChild(defaultOptionElement);
document.body.appendChild(selectionElement);

browseHierarchicalArray(categories, 0);
function browseHierarchicalArray(array, level) {
    array.forEach(arrayItem => {
        let optionElement = document.createElement("option");
        for (let index = 1; index <= level; index++) {
            optionElement.text += "--|";
        }
        optionElement.text += arrayItem.name;
        optionElement.value = arrayItem.id;
        selectionElement.appendChild(optionElement);
        if (arrayItem.children){
            browseHierarchicalArray(arrayItem.children, level+1);
        }
   });

}