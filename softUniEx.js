

function checkAllCharecters() {
    let result = "";

    for (let i="a".charCodeAt(); i<"z".charCodeAt();i++) {
        result+=String.fromCharCode(i);
    }
    return result;
}