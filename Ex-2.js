// Name Cases
let text = "Hello World";
console.log(text.toUpperCase())
console.log(text.toLowerCase())

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(toTitleCase(text));