function makeFun() {
    let name = "wedi kassa";
    function displayName() {
        console.log(name);
    }
    return displayName;
}
let myfun = makeFun();
myfun();