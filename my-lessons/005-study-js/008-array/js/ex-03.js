var users = [
    ["User 1", "user1@gmail.com", 20],
    ["User 2", "user2@gmail.com", 40],
    ["User 3", "user3@gmail.com", 21],
];


var test = setAdmin(users);
console.log(test);
console.log(users);
function setAdmin(input){
    if(!input)
        return undefined;
    let tempArray = JSON.parse(JSON.stringify(input));
    let maxAge = tempArray[0][2];
    tempArray.forEach(element => {
        if(element[2] > maxAge)
            maxAge = element[2];
    });
    tempArray.find(x => x[2] === maxAge)[1] = "admin@gmail.com";
    return tempArray;
}