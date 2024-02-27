var query = {
    name: "The Vi",
    email: "tranthevink@gmail.com",
    keyword: "Fso"
}
function convertUrlSearchParams(object) {
    let queryParam = "";
    for (const key in object) {
        queryParam += `${key}=${object[key].replaceAll(" ", "+")}`;
        queryParam += "&";
    }
    return queryParam.slice(0, -1);
}
function convertUrlSearchParamsUsingArray(object) {
    return Object.entries(object)
        .map(x => x.join("="))
        .join("&")
        .replaceAll(" ", "+");
}

// console.log(convertUrlSearchParams(query));
// console.log(convertUrlSearchParamsUsingArray(query));


var url =`https://fullstack.edu.vn/search?name=The+Vi&email=tranthevink@gmail.com&keyword=Fso`

function extractUrl(url){
    let urlObject = {};
    let splitter = url.split("://");
    urlObject["Protocol"] = splitter[0];
    splitter = splitter[1].split("/");
    urlObject["Domain"] = splitter[0];
    splitter = splitter[1].split("?");
    urlObject["Path"] = splitter[0];
    splitter = splitter[1].split("&").map(x => x.replaceAll("+", " ").split("="));
    urlObject["Query"] = Object.fromEntries(splitter);
    return urlObject;
}
console.log(extractUrl(url));

