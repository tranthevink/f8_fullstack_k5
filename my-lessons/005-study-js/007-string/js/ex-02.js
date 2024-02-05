let inputString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus, dolor ullam ad voluptas
vel incidunt. Quibusdam architecto tempora consectetur sed est veniam doloribus, tenetur, vitae laborum
perferendis quam eius odit beatae eligendi? Suscipit sed adipisci omnis distinctio repellat assumenda sit
voluptas aut quidem dicta? Voluptatem Lorem numquam similique harum, ab eveniet tenetur distinctio corporis
alias porro vitae ad ratione assumenda excepturi, exercitationem iusto, accusamus odit veniam magnam ex
obcaecati. Temporibus praesentium minima lorem accusamus possimus illum rem ut ullam cum, rerum facilis ex
animi? Nulla minus qui maxime reiciendis temporibus lorem, veniam optio illum, non quidem quos repudiandae omnis.`;


console.log("abc abc abc".indexOf("abc"));


let inputStringAfterFormat = "";
let searchingString = "o";
let matchingCounter = 0;
let currentIndex = 0;

while (true) {
    // debugger;
    let matchingIndex = inputString.toLowerCase().indexOf(searchingString.toLowerCase(), currentIndex);
    if (matchingIndex >= 0) {
        matchingCounter++;
        inputStringAfterFormat +=  inputString.slice(currentIndex, matchingIndex) + `<span style="background-color:yellow;">${inputString.slice(matchingIndex, matchingIndex + searchingString.length)}</span>`;
        currentIndex = matchingIndex + searchingString.length;
        // debugger;

    } else {
        inputStringAfterFormat += inputString.slice(currentIndex);
        break;
        // debugger;

    }
}


document.write(`<p>Tìm kiếm với từ khóa <b>${searchingString}</b></p>`);
document.write(inputStringAfterFormat);
document.write(`<p>Đã tìm thấy <b>${matchingCounter}</b> kết quả với từ khóa <b>${searchingString}</b></p>`);






